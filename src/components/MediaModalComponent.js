import React from "react";
import { Col, Row, Modal, ModalHeader } from "reactstrap";

function MediaModal(props) {
  const myModal = props.project.filter(itemFilter => props.selectedProject === itemFilter.id).map(item => {
      return(
      <Col key={item.id} sm={{ size: 4 }}>
        <Modal isOpen={props.toggleModalOpen}>
          <ModalHeader toggle={props.toggleModal} className="close-modal">
            {item.title}
          </ModalHeader>
          <iframe src={item.link}></iframe>
          <h1>Embedded Videos Coming Soon</h1>
          <h5>For now, click the link to watch a video of this project</h5>
          <a href={item.link}>Link</a>
          {/* if selectedProject.isWebsite ? <iframe></iframe> : selectedProject.embedlink */}
          {/*Eventually, I would like to use netlify to set up the ACTUAL websites for users to interact with via iframe modal */}
        </Modal>
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
