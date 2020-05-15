import React from 'react'
import { Button } from 'semantic-ui-react'
import { Image, Icon, Header } from 'semantic-ui-react'
import { Modal } from 'semantic-ui-react'
import './forestAction.css'

const ForestAction = () => (
    <>
    <Modal  className ='Modal' trigger={ <Button className='buttonTree' icon='tree' />} basic size='small' closeIcon>
    <Header icon='tree' content="About Reforest'Action" />
    <Modal.Content image>
    <Image wrapped size='small' src='https://radiovillageinnovation.com/attachments/images/broadcast/34619/medium.png' />
      <p>
      Join a collective action by planting your forest thanks to a participative planting platform
      </p>
    </Modal.Content>
    <Modal.Actions>
    
      <Button target='_blank' href = "https://www.reforestaction.com/en/blog/all-posts" color='green' inverted>
        <Icon name='checkmark' /> Go to Forest'Action
      </Button>
    </Modal.Actions>
  </Modal>
    
</>
)
export default ForestAction