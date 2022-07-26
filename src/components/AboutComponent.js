import React from 'react';
import {Card, CardTitle, CardText, Container} from 'reactstrap';
import TypeWriter from './TypeWriterComponent';
import RotateImages from './RotateImagesComponent';
function About() {
    const texts = ['Hiker', 'Dad', 'Programmer', 'Kayaker', 'Dungeon Master', 'Biologist', 'Woodworker', 'Cyclist']
    const speed = 50
    const endSpeed = 2000
    const images =[`images/Simba.jpg`, `images/family-couch.jpg`,`images/laptop-pool.jpg`, `images/kayaking.JPG`,`images/luke.JPG`,`images/chickens.JPG`,`images/book.JPG`, `images/sabre.JPG`,`images/coop.JPG`, `images/minecon.JPG`, `images/rainbow.png`, `images/woodworking.jpg`, `images/jack-helmet.jpg`, `images/wedding.jpg`]
    const imgInfo =  [`Winter Garden, FL`, 'Windermere, FL', `Huntsville, AL`,`Crystal River, FL`, `Windermere, FL`, `Winter Garden, FL`, `Huntsville, AL`, `Apopka, FL`, `Winter Garden, FL`, `Anniston, CA`, `Windermere, FL`, `West Forks, ME`, `Orlando, FL`,`Homewood, AL`]
    return (
        <>
        <div className="surround-div">
        <Container className="about-container">
        <Card className="about-card">
        <a name="about" className="a-invisible" href="/#about">
        <CardTitle className="about-title">
About
</CardTitle>
</a>
        <div className="laptop-div">
        <img alt="laptop" src="images/laptop.png" className="laptop"></img>
        </div>
        <TypeWriter texts={texts} speed={speed} endSpeed={endSpeed} className="type-writer" />
<CardText className="about-text">
          Life-learners wear many hats, and I am one who loves to grow new, diverse skills. I have found my passion in programming. The problem-solving, critical-thinking, and creativity required as a programmer keeps me engaged, and I love to develop professionally, collaboratively, and as a hobby.
</CardText>
<RotateImages images={images} imgInfo={imgInfo} anime={'fade'}/>
<CardText className="about-text about-text-bottom">
    Learning new coding languages, libraries, and frameworks, and experimenting with them is one of my favorite things to do, and I am focused on learning efficiently.  Creatively solving coding challenges, and implementing newly learned skills sparks joy. 
</CardText>
{/* TODO: Code this more beautifully with JS objects instead of hard-coding.*/}
<div className="about-card-images">
    <img src="images/html-logo.png" alt='HTML logo'className="coding-skill-image"></img>
    <img src="images/css3-logo.png" alt='CSS3 logo'className="coding-skill-image"></img>
    <img src="images/yarn-logo.png" alt='yarn logo'className="coding-skill-image"></img>
    <img src="images/c-logo.png" alt='C logo'className="coding-skill-image"></img>
    <img src="images/express-logo.png" alt='express logo'className="coding-skill-image"></img>
    <img src="images/git-logo-only.png" alt='git logo'className="coding-skill-image"></img>
    <img src="images/javascript-logo.png" alt='javascript logo'className="coding-skill-image"></img>
    <img src="images/json-logo.png" alt='json logo'className="coding-skill-image"></img>
    <img src="images/node-logo.png" alt='node logo'className="coding-skill-image"></img>
    <img src="images/mongo-db-logo.png" alt='mongoDB logo'className="coding-skill-image"></img>
    <img src="images/npm-logo.png" alt='npm logo'className="coding-skill-image"></img>
    <img src="images/python-logo.png" alt='python logo'className="coding-skill-image"></img>
    <img src="images/react-logo.png" alt='react logo'className="coding-skill-image"></img>
    <img src="images/react-native-logo.png" alt='react-native logo'className="coding-skill-image"></img>
    <img src="images/redux-logo.png" alt='redux logo'className="coding-skill-image"></img>
    <img src="images/rest-logo.png" alt='rest logo'className="coding-skill-image"></img>
    <img src="images/html-logo.png" alt='HTML logo'className="coding-skill-image"></img>
    <img src="images/css3-logo.png" alt='CSS3 logo'className="coding-skill-image"></img>
    <img src="images/yarn-logo.png" alt='yarn logo'className="coding-skill-image"></img>
    <img src="images/c-logo.png" alt='C logo'className="coding-skill-image"></img>
    <img src="images/express-logo.png" alt='express logo'className="coding-skill-image"></img>
    <img src="images/git-logo-only.png" alt='git logo'className="coding-skill-image"></img>
    <img src="images/javascript-logo.png" alt='javascript logo'className="coding-skill-image"></img>
    <img src="images/json-logo.png" alt='json logo'className="coding-skill-image"></img>
    <img src="images/node-logo.png" alt='node logo'className="coding-skill-image"></img>
    <img src="images/mongo-db-logo.png" alt='mongoDB logo'className="coding-skill-image"></img>
    <img src="images/npm-logo.png" alt='npm logo'className="coding-skill-image"></img>
    <img src="images/python-logo.png" alt='python logo'className="coding-skill-image"></img>
    <img src="images/react-logo.png" alt='react logo'className="coding-skill-image"></img>
    <img src="images/react-native-logo.png" alt='react-native logo'className="coding-skill-image"></img>
    <img src="images/redux-logo.png" alt='redux logo'className="coding-skill-image"></img>
    <img src="images/rest-logo.png" alt='rest logo'className="coding-skill-image"></img>
</div>
<CardText className="about-text about-text-bottom">
    When I'm not coding, I spend every waking moment that I can with my wife and two young boys. When I have time and availability solo, or with my family, you might find me hiking, teaching, swimming, kayaking, exploring Disney, woodworking, playing ultimate, cooking, observing wildlife, keeping up with new research, or playing Dungeons and Dragons. 
</CardText>
</Card>
</Container>
</div>
</>
    );
}

export default About;