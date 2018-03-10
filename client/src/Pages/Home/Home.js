import React from 'react';

import Carousel from '../../components/Carousel';
const Home = (props) => {

  return (
    <div className="jumbotron">
      <h1 className="display-4"></h1>
      <p className="lead"></p>
      <hr className="my-4" />
      <Carousel title={"Practice text"} />
      
    </div>
  );
};

export default Home;