import React from "react";
import { Col, Row, Modal, ModalHeader, ModalBody } from "reactstrap";

function MediaModal(props) {
  const myModal = props.project.filter(itemFilter => props.selectedProject === itemFilter.id).map(item => {
      return(
      <Col key={item.id}>
        <div className="custom-modal-div">
        <Modal isOpen={props.toggleModalOpen} size="xl" centered="true" modalClassName="modal-size" contentClassName="custom-modal">
          <ModalHeader toggle={props.toggleModal} className="close-modal">
            {item.title}
          </ModalHeader>
          <ModalBody>
          <iframe style={{width: '100%', height: '60vh'}}src={item.link}></iframe>
          <h1 style={{textAlign: "center"}}>Embedded Videos Coming Soon</h1>
          <h5>For now, click the link to watch a video of this project</h5>
          <a href={item.link}>Link</a>
          </ModalBody>
          {/* if selectedProject.isWebsite ? <iframe></iframe> : selectedProject.embedlink */}
          {/*Eventually, I would like to use netlify to set up the ACTUAL websites for users to interact with via iframe modal */}
        </Modal>
        </div>
      </Col>
  )
})

  return (
    <>
      <Row className="modal-row">{myModal}</Row>
    </>
  );
}

export default MediaModal;
