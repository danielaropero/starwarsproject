import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Naves = (props) => {
  return (
    <div className="container">
<div className="row">
      <div className="col-md-4">
        <Card>
        <CardImg top width="100%" src="/imagenes/SS Death Star.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: Death Star</CardTitle>
          <CardSubtitle>Model: DS-1 Orbital Battle Station</CardSubtitle>
          <CardText>Manufacturer: Imperial Department of Military Research, Sienar Fleet Systems</CardText>
          <CardText>Crew: 342953</CardText>
          <CardText>Passengers: 843342</CardText>
        </CardBody>
      </Card></div>
      <div className="col-md-4">
        <Card>
        <CardImg top width="100%" src="/imagenes/SS Executor.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: Executor</CardTitle>
          <CardSubtitle>Model: Executor-class star dreadnought</CardSubtitle>
          <CardText>Manufacturer: Kuat Drive Yards, Fondor Shipyards</CardText>
          <CardText>Crew: 279144</CardText>
          <CardText>Passengers: 38000</CardText>
        </CardBody>
      </Card>
        </div>
      <div className="col-md-4">
      <Card>
        <CardImg top width="100%" src="/imagenes/SS Sentinel-class landing craft.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: Sentinel-class landing craft</CardTitle>
          <CardSubtitle>Model: Sentinel-class landing craft</CardSubtitle>
          <CardText>Manufacturer: Sienar Fleet Systems, Cyngus Spaceworks</CardText>
          <CardText>Crew: 5</CardText>
          <CardText>Passengers:75</CardText>
        </CardBody>
      </Card>
        </div>
      <div className="col-md-4">
      <Card>
        <CardImg top width="100%" src="/imagenes/SS Millennium Falcon.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: Millennium Falcon</CardTitle>
          <CardSubtitle>Model: YT-1300 light freighter</CardSubtitle>
          <CardText>Manufacturer: Corellian Engineering Corporation</CardText>
          <CardText>Crew: 4</CardText>
          <CardText>Passengers:6</CardText>
        </CardBody>
      </Card>
        </div>
      <div className="col-md-4">
      <Card>
        <CardImg top width="100%" src="/imagenes/YWing.jpeg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: Y-wing</CardTitle>
          <CardSubtitle>Model: BTL Y-wing</CardSubtitle>
          <CardText>Manufacturer: Koensayr Manufacturing</CardText>
          <CardText>Crew: 2</CardText>
          <CardText>Passengers:0</CardText>
        </CardBody>
        </Card>
        </div>
      
      
      <div className="col-md-4"><Card>
        <CardImg top width="100%" src="/imagenes/SS X-wing.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: X-wing</CardTitle>
          <CardSubtitle>Model: T-65 X-wing</CardSubtitle>
          <CardText>Manufacturer: Incom Corporation</CardText>
          <CardText>Crew: 1</CardText>
          <CardText>Passengers:0</CardText>
        </CardBody>
      </Card>
        </div>
      <div className="col-md-4">
        <Card>
        <CardImg top width="100%" src="/imagenes/SS TIE Advanced x1.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: TIE Advanced x1</CardTitle>
          <CardSubtitle>Model: Twin Ion Engine Advanced x1</CardSubtitle>
          <CardText>Manufacturer: Sienar Fleet Systems</CardText>
          <CardText>Crew: 1</CardText>
          <CardText>Passengers:0</CardText>
        </CardBody>
      </Card>
        </div>  
      <div className="col-md-4">
         <Card>
        <CardImg top width="100%" src="/imagenes/SS Slave 1.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: Slave 1</CardTitle>
          <CardSubtitle>Model: Firespray-31-class patrol and attack</CardSubtitle>
          <CardText>Manufacturer: Kuat Systems Engineering</CardText>
          <CardText>Crew: 1</CardText>
          <CardText>Passengers:6</CardText>
        </CardBody>
      </Card>
      </div>
     <div className="col-md-4">
       <Card>
        <CardImg top width="100%" src="/imagenes/SS Imperial shuttle.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: Imperial shuttle</CardTitle>
          <CardSubtitle>Model: Lambda-class T-4a shuttle</CardSubtitle>
          <CardText>Manufacturer: Sienar Fleet Systems</CardText>
          <CardText>Crew: 6</CardText>
          <CardText>Passengers:20</CardText>
        </CardBody>
      </Card>
     </div>
      <div className="col-md-4">
              <Card>
        <CardImg top width="100%" src="/imagenes/SS EF76 Nebulon-B escort frigate.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: EF76 Nebulon-B escort frigate</CardTitle>
          <CardSubtitle>Model: EF76 Nebulon-B escort frigate</CardSubtitle>
          <CardText>Manufacturer: Kuat Drive Yards</CardText>
          <CardText>Crew: 854</CardText>
          <CardText>Passengers:75</CardText>
        </CardBody>
      </Card>
      </div>
     </div>
    </div>
     
      


  );
};

export default Naves;