import React from 'react';
import { Card, CardText, CardImg, Container, Row, Col } from 'reactstrap';
function Cards(props) {
    const myCard = props.project.map(item => {
        return (
        <Col key={item.id} sm={{size:3, offset: 1}}>
            <Card>
                <CardImg src={item.coverImg} alt={item.alt}></CardImg>
                <CardText>
                    <p>{item.title}</p>
                </CardText>
                
            </Card>
        </Col>
        )
    })
    return (
        <>
            <Row className="card-row">
                {myCard}
            </Row>
        </>
    );
}

export default Cards;