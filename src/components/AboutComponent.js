import React from 'react';
import {Card, CardTitle, CardText, Container} from 'reactstrap';
import TypeWriter from './TypeWriterComponent';
import RotateImages from './RotateImagesComponent';
function About() {
    const texts = ['Hiker', 'Dad', 'Programmer', 'Kayaker', 'Dungeon Master', 'Biologist', 'Woodworker', 'Cyclist']
    const speed = 50
    const endSpeed = 2000
    const images =[`images/rafting.png`, `images/backflip.png`, `images/family.jpg`, `images/rainbow.png`, `images/woodworking.jpg`, `images/laptop-pool.jpg`]
    const imgInfo =  [`Kennebec, ME`, 'Thousand Islands, Canada', `Windermere, FL`, `West Forks, ME`,'Orlando, FL', `Huntsville, AL`]
    return (
        <>
        <div className="surround-div">
        <Container className="about-container">
        <Card className="about-card">
        <CardTitle className="about-title">
About
</CardTitle>
        <div className="laptop-div">
        <img alt="laptop" src="images/laptop.png" className="laptop"></img>
        </div>
        <TypeWriter texts={texts} speed={speed} endSpeed={endSpeed} className="type-writer" />

<a name="about" className="a-invisible" href="/#about">
</a>
<CardText className="about-text">
          Life-learners wear many hats, and I am one who loves to grow new, diverse skills. I have found my passion in programming. The problem-solving, critical-thinking, and creativity required as a programmer keeps me engaged, and I love to develop professionally, collaboratively, and as a hobby.
</CardText>
<RotateImages images={images} imgInfo={imgInfo} anime={'fade'}/>
{/* <CardImg>

</CardImg> */}
<CardText className="about-text about-text-bottom">
    When I'm not coding, I spend every waking moment that I can with my wife and two young boys. When I have time and availability solo, or with my family, you might find me hiking, swimming, kayaking, exploring Disney, woodworking, playing ultimate, cooking, observing wildlife, keeping up with new research, or playing Dungeons and Dragons. 
</CardText>
</Card>
</Container>
</div>
</>
    );
}

export default About;