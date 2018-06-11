import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import './modal.css'

const ModalJob = props => {
  console.log('props = ', props)
    return (
  <Modal trigger={<Button className='LearMoreBtn'>Learn more ..</Button>}>
    <Modal.Header>{props.header}</Modal.Header>
    <Modal.Content image>
      <Image className='imageModal' wrapped size='medium' src={props.image} />
      <Modal.Description>
        <Header>{props.title}</Header>
        <p>{props.description}</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)
}
export default ModalJob
