import React from 'react'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button';
import CardComponent from './CardComponent';
const HomeComponent = () => {

    const [operations,setOperation]=useState([
        {opr:"Addition"},
        {opr:"Subtraction"},
        {opr:"Division"},
        {opr:"Multiplication"}
    ]);

    return (
        <div className="ninja">
             <h2>What do we offer?</h2>
             <div class="container" style={{ display:'inline-block',width:'15em'}}>
                <div style={{ float:'left' }}>
                    <p>"We offer multiple courses regarding Vedic maths which would not only strengthen your concepts but our interactive practise sessions would make sure that you are clear with the taught concepts "</p>
                </div>
             </div>
             <hr></hr>
             <br></br>
             <br></br>
             <br></br>
             <div class="container">
            <CardDeck>
                {operations.map(operations => 
                    <CardComponent operations={operations} />
                )}
            </CardDeck>
          </div>
        </div>
    )
}

export default HomeComponent
