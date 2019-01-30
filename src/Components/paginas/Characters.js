import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Characters = (props) => {
  return (
      <div className="container">
            <div className="row">  
        <div className="col-md-6 col-sm-6">
      <Card>
        <CardImg top width="100%" src="/imagenes/P Luke.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: Luke Skywalker</CardTitle>
          <CardSubtitle>Birth_year: 19BBY</CardSubtitle>
          <CardText>Gender: Male</CardText>
          <CardText>Homeworld: https://swapi.co/api/planets/1/</CardText>
          <CardText>Films: 	"https://swapi.co/api/films/2/",
				"https://swapi.co/api/films/6/",
				"https://swapi.co/api/films/3/",
				"https://swapi.co/api/films/1/",
				"https://swapi.co/api/films/7/"</CardText>
          <CardText>Species: https://swapi.co/api/species/1/</CardText>
        </CardBody>
      </Card>
      </div>
      <div className="col-md-6 col-sm-6">
            <Card>
        <CardImg top width="100%" src="/imagenes/C-3PO.jpeg" alt="Card image cap" />
        <CardBody>
        <CardTitle>Name: C-3PO</CardTitle>
          <CardSubtitle>Birth_year: 112BBY</CardSubtitle>
          <CardText>Gender: n/a</CardText>
          <CardText>Homeworld: https://swapi.co/api/planets/1/</CardText>
          <CardText>Films: 	"https://swapi.co/api/films/2/",
				"https://swapi.co/api/films/5/",
				"https://swapi.co/api/films/4/",
				"https://swapi.co/api/films/6/",
				"https://swapi.co/api/films/3/",
				"https://swapi.co/api/films/1/"</CardText>
          <CardText>Species: https://swapi.co/api/species/2/</CardText>
        </CardBody>
      </Card>
      </div>

      <div className="col-md-6 col-sm-6">
      <Card>
        <CardImg top width="100%" src="/imagenes/P R2-D2.jpg" alt="Card image cap" />
        <CardBody>
        <CardTitle>Name: R2-D2"</CardTitle>
        <CardSubtitle>Birth_year: 33BBY</CardSubtitle>
          <CardText>Gender: n/a</CardText>
          <CardText>Homeworld: https://swapi.co/api/planets/8/</CardText>
          <CardText>Films:"https://swapi.co/api/films/2/",
				"https://swapi.co/api/films/5/",
				"https://swapi.co/api/films/4/",
				"https://swapi.co/api/films/6/",
				"https://swapi.co/api/films/3/",
				"https://swapi.co/api/films/1/",
				"https://swapi.co/api/films/7/"</CardText>
          <CardText>Species: https://swapi.co/api/species/2/</CardText>
        </CardBody>
      </Card>
      </div>
      <div className="col-md-6 col-sm-6">
      <Card>
        <CardImg top width="100%" src="/imagenes/P Darth Vader.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: Darth Vader</CardTitle>
          <CardSubtitle>Birth_year: 41.9BBY</CardSubtitle>
          <CardText>Gender: male</CardText>
          <CardText>Homeworld: https://swapi.co/api/planets/8/</CardText>
          <CardText>Films:"https://swapi.co/api/films/2/",
				"https://swapi.co/api/films/6/",
				"https://swapi.co/api/films/3/",
				"https://swapi.co/api/films/1/"</CardText>
          <CardText>Species: https://swapi.co/api/species/1/</CardText>
        </CardBody>
      </Card>
      </div>
      <div className="col-md-6 col-sm-6">
      <Card>
        <CardImg top width="100%" src="/imagenes/P Leia Organa.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: Leia Organa</CardTitle>
          <CardSubtitle>Birth_year: 19BBY</CardSubtitle>
          <CardText>Gender: female</CardText>
          <CardText>Homeworld: https://swapi.co/api/planets/2/</CardText>
          <CardText>Films:	"https://swapi.co/api/films/2/",
				"https://swapi.co/api/films/6/",
				"https://swapi.co/api/films/3/",
				"https://swapi.co/api/films/1/",
				"https://swapi.co/api/films/7/"</CardText>
          <CardText>Species: https://swapi.co/api/species/1/</CardText>
        </CardBody>
      </Card>
      </div>
      <div className="col-md-6 col-sm-6">
      <Card>
        <CardImg top width="100%" src="/imagenes/P Owen Lars.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: Owen Lars</CardTitle>
          <CardSubtitle>Birth_year: 52BBY</CardSubtitle>
          <CardText>Gender: male</CardText>
          <CardText>Homeworld: https://swapi.co/api/planets/1/</CardText>
          <CardText>Films:"https://swapi.co/api/films/5/",
				"https://swapi.co/api/films/6/",
				"https://swapi.co/api/films/1/"</CardText>
          <CardText>Species: https://swapi.co/api/species/1/</CardText>
        </CardBody>
      </Card>
      </div>
      <div className="col-md-6 col-sm-6">
            <Card>
        <CardImg top width="100%" src="/imagenes/P Beru Whitesun lars.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: Beru Whitesun lars</CardTitle>
          <CardSubtitle>Birth_year: 47BBY</CardSubtitle>
          <CardText>Gender: female</CardText>
          <CardText>Homeworld: https://swapi.co/api/planets/1/</CardText>
          <CardText>Films:	"https://swapi.co/api/films/5/",
				"https://swapi.co/api/films/6/",
				"https://swapi.co/api/films/1/"</CardText>
          <CardText>Species: https://swapi.co/api/species/1/</CardText>
        </CardBody>
      </Card>
      </div>

      <div className="col-md-6 col-sm-6">
      <Card>
        <CardImg top width="100%" src="/imagenes/P R5-D4.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: R5-D4</CardTitle>
          <CardSubtitle>Birth_year:unknown</CardSubtitle>
          <CardText>Gender: n/a</CardText>
          <CardText>Homeworld: https://swapi.co/api/planets/1/</CardText>
          <CardText>Films:"https://swapi.co/api/films/1/"</CardText>
          <CardText>Species: https://swapi.co/api/species/2/</CardText>
        </CardBody>
      </Card>
      </div>
      <div className="col-md-6 col-sm-6">
      <Card>
        <CardImg top width="100%" src="/imagenes/P Biggs Darklighter.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: Biggs Darklighter</CardTitle>
          <CardSubtitle>Birth_year:24BBY</CardSubtitle>
          <CardText>Gender: male</CardText>
          <CardText>Homeworld: https://swapi.co/api/planets/1/</CardText>
          <CardText>Films:"https://swapi.co/api/films/1/"</CardText>
          <CardText>Species: https://swapi.co/api/species/1/</CardText>
        </CardBody>
      </Card>
      </div>
      <div className="col-md-6 col-sm-6">
           <Card>
        <CardImg top width="100%" src="/imagenes/obi.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: Obi-Wan Kenobi"</CardTitle>
          <CardSubtitle>Birth_year:57BBY</CardSubtitle>
          <CardText>Gender: male</CardText>
          <CardText>Homeworld: https://swapi.co/api/planets/20/</CardText>
          <CardText>Films:	"https://swapi.co/api/films/2/",
				"https://swapi.co/api/films/5/",
				"https://swapi.co/api/films/4/",
				"https://swapi.co/api/films/6/",
				"https://swapi.co/api/films/3/",
				"https://swapi.co/api/films/1/"</CardText>
          <CardText>Species: https://swapi.co/api/species/1/</CardText>
        </CardBody>
      </Card>
      </div>

      </div>
      </div>


    
  );
};

export default Characters;