import React from 'react';
import { Card, CardText, CardImg, Row, Col } from 'reactstrap';
function Cards(props) {
    const myCard = props.project.map(item => {
        return (
        <Col key={item.id} sm={{size:4}}>
            <Card>
            <a href={item.link}>
                <CardImg src={item.coverImg} alt={item.alt}></CardImg>
            </a>
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