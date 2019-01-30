import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Vehicles = (props) => {
  return (
      <div className="container">
            <div className="row">
     <div className="col-md-4">
      <Card>
        <CardImg top width="100%" src="/imagenes/V Sand Crawler.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name:Sand Crawler </CardTitle>
          <CardSubtitle>Model:Digger Crawler</CardSubtitle>
          <CardText>length: 36.8</CardText>
          <CardText>crew:46 </CardText>
          <CardText>passengers:30</CardText>
          <CardText>vehicle_class:wheeled</CardText>
        </CardBody>
      </Card>
      </div>
      <div className="col-md-4">
            <Card>
        <CardImg top width="100%" src="/imagenes/V T-16 skyhopper.jpg" alt="Card image cap" />
        <CardBody>
        <CardTitle>Name: T-16 skyhopper</CardTitle>
          <CardSubtitle>Model:T-16 skyhopper</CardSubtitle>
          <CardText>length:10.4 </CardText>
          <CardText>crew: 1</CardText>
          <CardText>passengers: 1</CardText>
          <CardText>vehicle_class:repulsorcraft</CardText>
        </CardBody>
      </Card>
      </div>
	
      <div className="col-md-4">
      <Card>
        <CardImg top width="100%" src="/imagenes/V X-34 landspeeder.jpg" alt="Card image cap" />
        <CardBody>
        <CardTitle>Name: X-34 landspeeder</CardTitle>
          <CardSubtitle>Model:X-34 landspeeder</CardSubtitle>
          <CardText>length:3.4 </CardText>
          <CardText>crew: 1</CardText>
          <CardText>passengers: 1</CardText>
          <CardText>vehicle_class:repulsorcraft</CardText>
        </CardBody>
      </Card>	
      </div>
      <div className="col-md-4">
            <Card>
        <CardImg top width="100%" src="/imagenes/V TIE LN starfighter.jpg" alt="Card image cap" />
        <CardBody>
        <CardTitle>Name:TIE/LN starfighter </CardTitle>
          <CardSubtitle>Model:Twin Ion Engine/Ln Starfighter</CardSubtitle>
          <CardText>length:6.4 </CardText>
          <CardText>crew: 1 </CardText>
          <CardText>passengers:0</CardText>
          <CardText>vehicle_class:starfighter</CardText>
        </CardBody>
      </Card>	
      </div>
      <div className="col-md-4">
            <Card>
        <CardImg top width="100%" src="/imagenes/V Snowspeeder.jpg" alt="Card image cap" />
        <CardBody>
        <CardTitle>Name: Snowspeeder</CardTitle>
          <CardSubtitle>Model:t-47 airspeeder</CardSubtitle>
          <CardText>length: 4.5</CardText>
          <CardText>crew:2 </CardText>
          <CardText>passengers:0</CardText>
          <CardText>vehicle_class:airspeeder</CardText>
        </CardBody>
      </Card>	
      </div>
     
      <div className="col-md-4">
      <Card>
        <CardImg top width="100%" src="/imagenes/V TIE bomber.jpg" alt="Card image cap" />
        <CardBody>
        <CardTitle>Name: TIE bomber</CardTitle>
          <CardSubtitle>Model:TIE/sa bomber</CardSubtitle>
          <CardText>length: 7.8</CardText>
          <CardText>crew: 1 </CardText>
          <CardText>passengers: 0</CardText>
          <CardText>vehicle_class:space/planetary bomber</CardText>
        </CardBody>
      </Card>
      </div> 	
      
      <div className="col-md-4">
           <Card>
        <CardImg top width="100%" src="/imagenes/V AT-AT.jpg" alt="Card image cap" />
        <CardBody>
        <CardTitle>Name:AT-AT </CardTitle>
          <CardSubtitle>Model:All Terrain Armored Transport</CardSubtitle>
          <CardText>length:20 </CardText>
          <CardText>crew: 5 </CardText>
          <CardText>passengers: 40</CardText>
          <CardText>vehicle_class:assault walker</CardText>
        </CardBody>
      </Card> 
      </div>      

      <div className="col-md-4">
      <Card>
        <CardImg top width="100%" src="/imagenes/V AT-ST.jpg" alt="Card image cap" />
        <CardBody>
        <CardTitle>Name:AT-ST </CardTitle>
          <CardSubtitle>Model:All Terrain Scout Transport</CardSubtitle>
          <CardText>length:2 </CardText>
          <CardText>crew: 2 </CardText>
          <CardText>passengers:0</CardText>
          <CardText>vehicle_class:walker</CardText>
        </CardBody>
      </Card>
      </div>
      <div className="col-md-4">
            <Card>
        <CardImg top width="100%" src="/imagenes/V Storm IV Twin-Pod cloud car.jpg" alt="Card image cap" />
        <CardBody>
        <CardTitle>Name:Storm IV Twin-Pod cloud car </CardTitle>
          <CardSubtitle>Model:Storm IV Twin-Pod</CardSubtitle>
          <CardText>length: 7</CardText>
          <CardText>crew: 2</CardText>
          <CardText>passengers:0 </CardText>
          <CardText>vehicle_class:repulsorcraft</CardText>
        </CardBody>
      </Card>
      </div>

      <div className="col-md-4">
      <Card>
        <CardImg top width="100%" src="/imagenes/V Sail barge.jpg" alt="Card image cap" />
        <CardBody>
        <CardTitle>Name:Sail barge </CardTitle>
          <CardSubtitle>Model:Modified Luxury Sail Barge</CardSubtitle>
          <CardText>length: 30</CardText>
          <CardText>crew: 26"</CardText>
          <CardText>passengers:500</CardText>
          <CardText>vehicle_class:sail barge</CardText>
        </CardBody>
      </Card> 
      </div>
      </div>
    		
      </div>

    
  );
};

export default Vehicles;