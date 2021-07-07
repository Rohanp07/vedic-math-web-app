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
                    <Card style={{ backgroundColor: '#DCE4DD' }}>
                    <Card.Body>
                        <Card.Title>Addition</Card.Title>
                        <Card.Text>
                            Here you can learn about different <strong>addition</strong> techniques which would allow you to do calculations at a faster rate
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="primary">Start Learning</Button>
                    </Card.Footer>
                    </Card>
                    <Card style={{ backgroundColor: '#DCE4DD' }}>
                    <Card.Body>
                        <Card.Title>Subtraction</Card.Title>
                        <Card.Text>
                        Here you can learn about different <strong>subtraction</strong> techniques which would allow you to do calculations at a faster rate
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="primary">Start Learning</Button>
                    </Card.Footer>
                    </Card>
                    <Card style={{ backgroundColor: '#DCE4DD' }}>
                    <Card.Body>
                        <Card.Title>Multiplication</Card.Title>
                        <Card.Text>
                        Here you can learn about different <strong>multiplication</strong> techniques which would allow you to do calculations at a faster rate
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="primary">Start Learning</Button>
                    </Card.Footer>
                    </Card>
                    <Card style={{ backgroundColor: '#DCE4DD' }}>
                    <Card.Body>
                        <Card.Title>Division</Card.Title>
                        <Card.Text>
                        Here you can learn about different <strong>division</strong> techniques which would allow you to do calculations at a faster rate
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
