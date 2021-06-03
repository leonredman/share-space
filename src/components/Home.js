import React from 'react';
import "./Home.css";

//  class Home extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			name: 'Leon'
// 		};
// 	}
// 	render() {

const Home = () => {
		return (
			<div className="home">

				<div className="hero-container">
					
					<div className="searchcontainer">
						<h1> FIND YOUR PERFECT ROOM<br /> CONNECT WITH YOUR PERFECT ROOMMATE </h1>
            <h4>Affordable, furnished housing for interns, students and recent grads</h4>
							<div className="searchbar">
								<label>
									<input className="locationsearch " type="text" name="name" placeholder="Enter an school, neighborhood, city, or Zip code" />
									<input className="searchBtn" type="submit" value="Submit" />
								</label>
							</div>				
					</div>
				</div>

			<div className="ui grid">
			<div className="row centered">
				<h3>Looking for Co-ed housing, need to split the rent,<br /> we can help you find the perfect roommate.</h3>
				</div>


				<div className="row centered">

				<div className="ui link cards">
  <div className="card">
    <div className="image">
      <img alt="rent" src="https://img1.wsimg.com/isteam/stock/6159/:/fm=f:6159" />
    </div>
    <div className="content">
      <div className="header">Stay Close To School</div>
      
      <div className="description">
        Find your place with an immersive photo experience 
		and the most listings, including things you won't 
		find anywhere else.
      </div>
    </div>
    
  </div>
  <div className="card">
    <div className="image">
      <img alt="sell" src="https://img1.wsimg.com/isteam/stock/u2JkP6zDD5u7KeWgJ/:/fm=f:u2JkP6zDD5u7KeWgJ" />
    </div>
    <div className="content">
      <div className="header">Relax Knowing Your Safe</div>
            <div className="description">
        Whether you get a cash offer through our service or choose to sell traditionally,
		we can help you navigate a successful sale.
      </div>
    </div>
    
  </div>
  <div className="card">
    <div className="image">
      <img alt="rent" src="https://img1.wsimg.com/isteam/stock/lbqNel1/:/fm=f:lbqNel1" />
    </div>
    <div className="content">
      <div className="header">Dont Break The Bank</div>
       <div className="description">
        We're creating a seamless online experience - from shopping on the
		largest rental network, to applying, to paying rent.
      </div>
    </div>
   
  </div>
</div>
</div>
</div>

			</div>
			
		);
	}

export default Home;