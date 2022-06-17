import React from 'react';
import { Card, CardText, CardImg, Row, Col } from 'reactstrap';
function Cards(props) {
    const myCard = props.project.map(item => {
        return (
        <Col key={item.id} xs={{size:4}}>
            <Card>
            {/* <a href={item.link}> */}
                <CardImg onClick={() => {props.projectSelect(item.id)}} src={item.coverImg} alt={item.alt}></CardImg>
            {/* </a> */}
                <CardText className="card-title">
                    {item.title}
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