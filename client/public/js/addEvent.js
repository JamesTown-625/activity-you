$(document).ready(function() {
	// Getting jQuery references to the events information
	var titeInput = $("#title");
	var categoryInput = $("#category");
	var pictureInput = $("#picture");
	var monthInput = $("#month");
	var dateInput = $("#day");
	var yearInput = $("#year");
	var timeInput = $("#time");
	var addressInput = $("#address");
	var cityInput = $("#city");
	var stateInput = $("#state");
	var zipInput = $("#zip");
	var descriptionInput = $("#description");
	var eventForm = $("#addEvent");

// ====================== CLOUDINARY  CODE BELOW ==========================

var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dt9jd3i76/image/upload'
var CLOUDINARY_UPLOAD_PRESET = 'dt9jd3i76';
var imgPreview = document.getElementById('img-preview')
var fileUpload = document.getElementById('file-upload');
var imgURL;
  function updateURL() {
    $("#picture").val(imgURL);
    console.log("Done!")
  };
fileUpload.addEventListener('change', function() {
    //console.log(event);
    var file = event.target.files[0];
    var formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    axios({
        url: CLOUDINARY_URL,
        method: "POST",
        headers: {
           'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
           
        }).then(function(res){
           console.log(res);
           //console.log(res.data.secure_url)
         imgURL = res.data.secure_url
           console.log(imgURL)
           updateURL();
           
        }).catch(function(err){
           console.error(err);
        });
       
    });

// ^^^^^^^^^^^^^^^^^^^^^^ CLOUDINARY CODE ABOVE ^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// Adding an event listener for when the form is submitted
	$(eventForm).on("submit", handleFormSubmit);

	function handleFormSubmit(data) {
		event.preventDefault();

// Wont submit the event if we are missing any information
	    if (!titleInput.val().trim() || 
	    	!categoryInput.val().trim() || 
	    	!pictureInput.val().trim() || 
	    	!monthInput.val().trim() || 
	    	!dateInput.val().trim() || 
	    	!yearInput.val().trim() || 
	    	!addressInput.val().trim() || 
	    	!cityInput.val().trim() || 
	    	!stateInput.val().trim() || 
	    	!zipInput.val().trim() || 
	    	!descriptionInput.val()) {
	      return;
	    }
// Constructing a newEvent object to hand to the database
		    var newEvent = {
		    	title: titleInput
		    		.val()
		    		.trim(),
		    	category: categoryInput
		    		.val()
		    		.trim(),
		    	picture: pictureInput
		    		.val()
		    		.trim(),
		    	month: monthInput
		    		.val()
		    		.trim(),
		    	date: dateInput
		    		.val()
		    		.trim(),
		    	year: yearInput
		    		.val()
		    		.trim(),
		    	address: addressInput
		    		.val()
		    		.trim(),
		    	city: cityInput
		    		.val()
		    		.trim(),
		    	state: stateInput
		    		.val()
		    		.trim(),
		    	zip: zipInput
		    		.val()
		    		.trim(),
		    	description: descriptionInput
		    		.val()
		    		.trim(),
		    };
	}

// Submits a new event posting and brings user to home page upon completion
  	function submitEvent(data) {
	    console.log(data);
	    $.post("/api/event", data, function() {
	      window.location.href = "/home";
	    });
  	}
});