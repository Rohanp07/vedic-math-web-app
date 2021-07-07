import React from 'react'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button';
const HomeComponent = () => {
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
                    <Card style={{ backgroundColor: 'gray' }}>
                    <Card.Body>
                        <Card.Title>Addition</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="primary">Start Learning</Button>
                    </Card.Footer>
                    </Card>
                    <Card>
                    <Card.Body>
                        <Card.Title>Subtraction</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="primary">Start Learning</Button>
                    </Card.Footer>
                    </Card>
                    <Card>
                    <Card.Body>
                        <Card.Title>Multiplication</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="primary">Start Learning</Button>
                    </Card.Footer>
                    </Card>
                    <Card>
                    <Card.Body>
                        <Card.Title>Division</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="primary">Start Learning</Button>
                    </Card.Footer>
                    </Card>
                </CardDeck>
          </div>
        </div>
    )
}

export default HomeComponent
