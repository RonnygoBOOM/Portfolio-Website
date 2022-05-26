import React from "react";
import {PROJECT} from '../shared/project';
import Cards from '../components/CardsComponent';
import MediaModal from '../components/MediaModalComponent';

function Home(props) {

const [toggleModalOpen, setToggleModalOpen] = React.useState(false)
const [selectedProject, setSelectedProject] = React.useState()
function toggleModal(selection) {
  setToggleModalOpen(prev => !prev)
  setSelectedProject(prev => selection)
  // use the selectedProject state value in the Media Modal to identify the correct project to display 
}
function projectSelect(selection){
  
}

  return (
    <>
      <div className="top-container">
        <div className="col">
          <img
            className="top-image"
            alt="front end dev desk with monitors"
            src="images/front-end-displays.jpg"
          ></img>
        </div>
        <h2 className="top-text">Ron Scheibel</h2>
        <h2 className="bottom-text">Web Developer</h2>
      </div>
      <h2>
        Experiments:
        </h2>
      <div>
      <div className="col">
        <Cards project={PROJECT} toggleModal={toggleModal} projectSelect={projectSelect}/>
        <MediaModal toggleModalOpen={toggleModalOpen} toggleModal={toggleModal}/>
      </div>
      </div>
    </>
  );
}

export default Home;
