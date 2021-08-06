import React from "react";
import Card from "./Card";
import constants from "../contacts";
function App(){

return( <div>
                <h1 className="heading">My Contacts</h1>
                <Card
                    name={constants[0].name}
                    image ={constants[0].image}
                    contact ={constants[0].contact}
                    email ={constants[0].email}/>,
                <Card
                     name={constants[1].name}
                    image ={constants[1].image}
                    contact ={constants[1].contact}
                    email ={constants[1].email}/>,
                <Card
                    name={constants[2].name}
                    image ={constants[2].image}
                    contact ={constants[2].contact}
                    email ={constants[2].email}/>

</div> );

}
export default  App;