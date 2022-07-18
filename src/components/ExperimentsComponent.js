import React from 'react';
import {PROJECT} from '../shared/project';
import Cards from '../components/CardsComponent';
import MediaModal from '../components/MediaModalComponent';

function Experiments() {
    const [toggleModalOpen, setToggleModalOpen] = React.useState(false)
const [selectedProject, setSelectedProject] = React.useState("")
function toggleModal() {
  setToggleModalOpen(prev => !prev)
  // use the selectedProject state value in the Media Modal to identify the correct project to display 
}
function projectSelect(selection) {
  setToggleModalOpen(prev => !prev)
  setSelectedProject(prev => selection)
}
    return (
        <>
            <h2>
                <a className="a-invisible" style={{color: "white"}} name="experiments" href="#experiments">Experiments:</a>
            </h2>
            <div>
                <div className="col">
                    <Cards project={PROJECT} projectSelect={projectSelect}/>
                    <MediaModal toggleModalOpen={toggleModalOpen} selectedProject={selectedProject} toggleModal={toggleModal}/>
                </div>
            </div>
        </>
    );
}

export default Experiments;