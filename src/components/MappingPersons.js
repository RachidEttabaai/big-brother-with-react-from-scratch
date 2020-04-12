import React from 'react';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Form } from 'react-bootstrap';

function PositionsPersons(tabpersons,id){

  let response = [];

  tabpersons.map((person) =>{

      if(id === person._id){
        let positions = person.positions;

        positions.map((pos) => {
          let position = pos.split(",");
          response.push({latitude:parseFloat(position[1]),longitude:parseFloat(position[0])});
        })
      }
      
  });

  return response;

}

function PersonsIdentities(tabprofiles){

  let response = [];

  tabprofiles.map((profile) =>{
    response.push({id:profile._id,identity:profile.name.first+" "+profile.name.last});
  });

  return response;

}

export default function MappingPersons(props){

    let personlist = props.persons;

    const [id,setId] = React.useState("");

    let personsidentities = PersonsIdentities(personlist);

    const mainposition = [166.468694, -78.880765];
    const zoom = 2;

    let positionsperson;

    if(id){
      positionsperson = PositionsPersons(personlist,id);
    }else{
      positionsperson = [];
    }

    return(
      <>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Select a person to follow their movements</Form.Label>
                <Form.Control as="select" custom onChange={e => setId(e.target.value)}>
                    <option value="none" selected disabled hidden> 
                      Select a Person
                    </option> 
                {
                  personsidentities.map((personsidentitie) => (
                    <option key={personsidentitie.id} value={personsidentitie.id}>
                      {personsidentitie.identity}
                    </option>
                  ))
                }
                </Form.Control>
              </Form.Group>
          </Form>
          <Map center={mainposition} zoom={zoom}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            {
              positionsperson.map((pos,index) =>(
                <Marker key={index} position={[pos.latitude,pos.longitude]}>
                  <Popup>Position number {index}</Popup>
                </Marker> 
              ))
            }
            {/* */}
          </Map>
      </>
    );

}