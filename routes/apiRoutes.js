//grabbing our sequelize models
var db = require('../models')
//bringing in the bcrypt npm module
var bcrypt = require('bcrypt');
// console.log(db, "this is db")
module.exports = function (app){

  //login endpoint
  app.post("/api/login", function (req, res) {
    //will show our user data from front end
    console.log(req.body)
    //will see the currently formatted session object with user data
    console.log(req.session)
    //initalizing user data variable to an empty object. this will hold our user data on this endpoint
    var user = {};
    //using our users model to query our MySQL database for user info where ther username equals the username we passed in from the front end
    db.users.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(function (dbData) {
        //if the database does not find a user with that username we will revice a null value from our database. null values are a little "special" in relation to JS.
        //this is how we would correctly do a check for a null value if recieved
        if (!dbData && typeof dbData === "object"){
          //this will send an error code to our front end for the user not existing
          res.status(404).send('ohhh no, there is a problem with the username or password!')
        }else{
          //here we bring in bcrypt. bcrypt's compair method asks for a few things. it asks for the first parameter you send in a plain text password. 
          //AKA: our users password coming in from the front end. the second parameter bcrypt wants us to pass in the hashed password that we stored in the db. lastly it wants a callback funtion
          //bcrypt will hash the pasword coming in from the front end and compaire it to the users hashed password from our database it will give us a boolean value to let us know if the 
          //passwords were the same
          bcrypt.compare(req.body.password, dbData.dataValues.password, function (err, bcryptRes) {
            // bcryptRes == true or false

            //if the response is false send an error to the front end letting the user know that the passwords did not match.
            if (!bcryptRes) {
              res.status(404).send('ohhh no, there is a problem with the username or password!')
            }else{
              //if the response from bcrypt was true we know our users password matched and we can now format the user data coming from the database to be sent to the font end
              var userObj = {
                id: dbData.dataValues.id,
                fullName: dbData.dataValues.fullName,
                email: dbData.dataValues.email,
                picture: dbData.dataValues.picture
              }
             //we update the loggedIn key to have a true value. we can use this value on the fron end to see if the user is logged in or not.
              req.session.user.isAdmin = dbData.dataValues.isAdmin;
              req.session.user.loggedIn = true;
            //here the session's user object is updated with the users data. we can hit our /session endpoing witha  get request from the front end and get our user object.
              req.session.user.currentUser = userObj;
              
              console.log(dbData.dataValues)
              res.status(200).send('Successful login')
            }
          });
        }
      });
  })

// signin enpoint logic
  app.post("/api/signUp", function (req, res, next) {
    console.log(req.body)
    //to store a hased password into the database we need to first salt our password. this will tell bcrypt how many time to pass through the users password to generate the hash
    bcrypt.genSalt(10, function (err, salt) {
      //the bcrypt hash method will then 
      bcrypt.hash(req.body.password, salt, function (err, hash) {
        // Store hash in your password DB.
        req.body.password = hash;
          db.users.create(req.body).then(function (dbData) {
            var userObj = {
              id: dbData.dataValues.id,
              fullName: dbData.dataValues.fullName,
              email: dbData.dataValues.email,
              profilePic: dbData.dataValues.picture
            }
            req.session.user.isAdmin = dbData.dataValues.isAdmin;
            req.session.user.loggedIn = true;
            req.session.user.currentUser = userObj;
            res.json(req.session.user);
          });
      });
    });
  });

  app.post("/api/addEvent", function (req, res) {
          db.Event.create({
              title: req.body.title,
              interestsId: req.body.interest,
              image: req.body.picture,
              date: req.body.date,
              time: req.body.time,
              address: req.body.address,
              city: req.body.city,
              state: req.body.state,
              zipcode: req.body.zip,
              description: req.body.description
            }).then(function(dbPost){
              res.json(dbPost)
            })
          //   req.session.user.isAdmin = dbData.dataValues.isAdmin;
          //   req.session.user.loggedIn = true;
          //   req.session.user.currentUser = userObj;
          //   res.json(req.session.user);
          // });
      });
  
  //endpoint for grabbing session user object to be used accrossed entire app.
  app.get("/api/session", function(req, res, next){
    res.json(req.session.user)
  });
  app.get("/api/logout", function (req, res) {
    req.session.user = {}
    req.session.user.currentUser = {
      id: null,
      fullName: '',
      email: '',
      picture: null
    }
    req.session.user.loggedIn = false;
    req.session.user.isAdmin = false;
    res.send("loggedOut")
  })
  
  //get user info endpoint via query params
  app.get('/api/profile/:email', function(req, res, next){
    console.log(req.params.email);
    db.users.findOne({
      where: {
        email: req.params.email
      }
    }).then(function(dbData){
      console.log(dbData)
      var userObj = {
        id: dbData.dataValues.id,
        fullName: dbData.dataValues.fullName,
        email: dbData.dataValues.email,
        picture: dbData.dataValues.picture
      }
      // req.session.user.loggedIn = true;
      // req.session.user.currentUser = userObj;
      res.json(userObj)
    })
  });
  //update profile route
  app.put('/api/update/:email', function(req, res, next){
    req.session.user.currentUser = req.body
    var loggedUser = req.session.user.currentUser;
    if(true){
      db.users.update({
        fullName: loggedUser.fullName,
        email: loggedUser.email,
        password: loggedUser.password,
        picture: loggedUser.picture
        }).then(function (dbData) {
          res.json(req.session.user)
        })
    }else{
      res.status(404).json("please log in to update profile")
    }
  });

//this will eb used for creating user's interests
  app.post("/api/userInterests", function (req, res) {
    // req.body == {
    //   userdata: {
    //     id: 1
    //   },
    //   interests: [1, 4, 5, 12]
    // }

    for (var i = 0; i < req.body.interests.length; i++){
      db.userInterests.create({
        interestsId: req.body.interests[i],
        userId: req.body.userdata.id
      })
        // use promise method to pass the burgers...
        .then(function (userInterests) {
          // into the main index, updating the page
          console.log(userInterests);
        });
    }
    res.send("check your db punks!!!!");
  })

  //this will be used for finding user interests
  app.get("/api/userInterests/:userId", function (req, res) {
    // req.body == {
    //   userdata: {
    //     id: 1
    //   },
    //   interests: [1, 4, 5, 12]
    // }

    db.users.findAll({
      include: [{
        model: db.Interests
      }],
      where :{
        id: req.params.userId
      }
    })
        // use promise method to pass the burgers...
        .then(function (userInterests) {
          // into the main index, updating the page
          console.log(userInterests);
          res.send(userInterests);
        });
    
  })


  app.get("/api/event", function (req, res) {
    db.Interests.findAll({
      include: [db.Event]
    }).then(function (dbAuthor) {
      res.json(dbAuthor);
    });
  })
}
