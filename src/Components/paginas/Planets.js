import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Planets = (props) => {
  return (
      <div className="container">
<div className="row">
<div className="col-md-4">
      <Card>
        <CardImg top width="100%" src="/imagenes/Planet Alderaan.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: Alderaan</CardTitle>
          <CardSubtitle>Diameter: 12500</CardSubtitle>
          <CardText>Climate:temperate </CardText>
          <CardText>Terrain: grasslands, mountains</CardText>
          <CardText>Surface_water:40 </CardText>
          <CardText>Population: 2000000000</CardText>
        </CardBody>
      </Card> 
      </div>
      <div className="col-md-4">
           <Card>
        <CardImg top width="100%" src="/imagenes/PlanetYavinIV.jpg" alt="Yavin IV" />
        <CardBody>
          <CardTitle>Name: Yavin IV</CardTitle>
          <CardSubtitle>Diameter: 10200</CardSubtitle>
          <CardText>Climate:temperate, tropical </CardText>
          <CardText>Terrain: jungle, rainforests</CardText>
          <CardText>Surface_water:8 </CardText>
          <CardText>Population: 1000</CardText>
        </CardBody>
      </Card>    
      </div>
 	
     <div className="col-md-4">
           <Card>
        <CardImg top width="100%" src="imagenes/Planet Hoth.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: Hoth</CardTitle>
          <CardSubtitle>Diameter: 7200</CardSubtitle>
          <CardText>Climate:Frozen </CardText>
          <CardText>Terrain: tundra, ice caves, mountain ranges</CardText>
          <CardText>Surface_water:100 </CardText>
          <CardText>Population: unknown</CardText>
        </CardBody>
      </Card>    
     </div>
	
     <div className="col-md-4">
         <Card>
        <CardImg top width="100%" src="imagenes/Planet Dagobah.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: Dagobah</CardTitle>
          <CardSubtitle>Diameter: 8900</CardSubtitle>
          <CardText>Climate:murky </CardText>
          <CardText>Terrain: swamp, jungles</CardText>
          <CardText>Surface_water:8 </CardText>
          <CardText>Population: unknown</CardText>
        </CardBody>
      </Card>	
         </div>      
         
         <div className="col-md-4">
             <Card>
        <CardImg top width="100%" src="imagenes/Planet Bespin.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: Bespin</CardTitle>
          <CardSubtitle>Diameter: 118000</CardSubtitle>
          <CardText>Climate:temperate </CardText>
          <CardText>Terrain: gas giant</CardText>
          <CardText>Surface_water:0 </CardText>
          <CardText>Population: 6000000</CardText>
        </CardBody>
      </Card>	  
             </div> 
       
       <div className="col-md-4">
           <Card>
        <CardImg top width="100%" src="imagenes/Planet Endor.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: Endor</CardTitle>
          <CardSubtitle>Diameter: 4900</CardSubtitle>
          <CardText>Climate:temperate </CardText>
          <CardText>Terrain: forests, mountains, lakes</CardText>
          <CardText>Surface_water:8 </CardText>
          <CardText>Population: 30000000</CardText>
        </CardBody>
      </Card>	
           </div>   

           <div className="col-md-4">
                    <Card>
        <CardImg top width="100%" src="imagenes/Planet Naboo.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: Naboo</CardTitle>
          <CardSubtitle>Diameter: 12120</CardSubtitle>
          <CardText>Climate:temperate </CardText>
          <CardText>Terrain:grassy hills, swamps, forests, mountains</CardText>
          <CardText>Surface_water:12 </CardText>
          <CardText>Population: 4500000000</CardText>
        </CardBody>
      </Card>
               </div>   
 
     <div className="col-md-4">
         <Card>
        <CardImg top width="100%" src="imagenes/Planet Coruscant.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: Coruscant</CardTitle>
          <CardSubtitle>Diameter: 12240</CardSubtitle>
          <CardText>Climate:temperate </CardText>
          <CardText>Terrain:cityscape, mountains</CardText>
          <CardText>Surface_water:unknown </CardText>
          <CardText>Population: 1000000000000</CardText>
        </CardBody>
      </Card>
         </div>

      <div className="col-md-4">
          <Card>
        <CardImg top width="100%" src="imagenes/Planet kamino.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: Kamino</CardTitle>
          <CardSubtitle>Diameter: 19720</CardSubtitle>
          <CardText>Climate:temperate </CardText>
          <CardText>Terrain:ocean</CardText>
          <CardText>Surface_water:100 </CardText>
          <CardText>Population: 1000000000</CardText>
        </CardBody>
      </Card>
          </div>

      <div className="col-md-4">
          <Card>
        <CardImg top width="100%" src="imagenes/Planet Geonosis.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: Geonosis</CardTitle>
          <CardSubtitle>Diameter: 11370</CardSubtitle>
          <CardText>Climate:temperate, arid" </CardText>
          <CardText>Terrain:rock, desert, mountain, barren</CardText>
          <CardText>Surface_water:5 </CardText>
          <CardText>Population: 100000000000</CardText>
        </CardBody>
      </Card>
          </div>
      </div>
      </div>
      

    		
   
  );
};

export default Planets;