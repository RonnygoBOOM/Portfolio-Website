import React from "react";
import { Col, Row, Modal, ModalHeader, ModalBody, Button } from "reactstrap";

function MediaModal(props) {
  const myModal = (
    <>
      <Col sm={{ size: 4 }}>
        <Modal isOpen={props.toggleModalOpen}>
          <ModalHeader toggle={props.toggleModal} className="close-modal">
            item.title
          </ModalHeader>
          <h1>MY MODAL in Modal</h1>
          {/* if selectedProject.isWebsite ? <iframe></iframe> : selectedProject.embedlink */}
          {/*Eventually, I would like to use netlify to set up the ACTUAL websites for users to interact with via iframe modal */}
        </Modal>
      </Col>
    </>
  );

  return (
    <>
      <Row className="modal-row">{myModal}</Row>
    </>
  );
}

export default MediaModal;
