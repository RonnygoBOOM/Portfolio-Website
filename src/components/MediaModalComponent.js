import React from "react";
import { Col, Row, Modal, ModalHeader, ModalBody } from "reactstrap";
import {PROJECT} from '../shared/project';

function MediaModal(props) {
 

  const myModal = PROJECT.filter(itemFilter => props.selectedProject === itemFilter.id).map(item => {
      return(
      <Col key={item.id}>
        <div className="custom-modal-div">
        <Modal isOpen={props.toggleModalOpen} size="xl" centered="true" modalClassName="modal-size" contentClassName="custom-modal">
          <ModalHeader toggle={props.toggleModal} className="close-modal">
            {item.title}
          </ModalHeader>
          <ModalBody className="modal-video">
          {item.embed && item.embed}
          {item.website && <iframe title={item.title} className="iframe-embedded-video" src={item.link}></iframe>}
          {item.embed && !item.websiteImage && <a href={item.link}>Watch on Youtube</a>}
          {item.websiteImage && <img alt={item.alt} src={item.src} width="80%" height="80%"></img>}
          {item.website && <a href={item.link}>Go to Website</a>}
          </ModalBody>
          <ModalBody className="modal-text">
            {item.description}
          </ModalBody>
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
