import React from 'react'
import { Button } from 'semantic-ui-react'
import { Icon, Header } from 'semantic-ui-react'
import { Modal } from 'semantic-ui-react'
import './forestAction.css'
import './Rules.css'

const Rules = () => (
    <>
    <Modal  className ='Modal' trigger={ <Button id='buttonRules' icon='cubes' />} basic size='small' closeIcon>
    <Header icon='cubes' content="The game's rules" />
    <Modal.Content image>
      <ul>
    <li>Earn points by answering the questions well, each correct answer will give you, depending on the difficulty, 2, 3 or 5 points.</li>         
    <br/><li>Every 50 points you will be rewarded with 1 seed corresponding to the possibility of planting 1 tree at the location of your choice on the map.</li>         
    <br/><li>The higher your number of trees earned, the higher your rank will be: Seed, Sprout, Gaulis, Perchis, Median, Centenary tree.</li>
</ul>
    </Modal.Content>
    <Modal.Actions>
    
      <Button target='_blank' href = './Quiz' color='green' inverted>
        <Icon name='checkmark' /> Go to the Quizz ? 
      </Button>
     
    </Modal.Actions>
  </Modal>
    
</>
)
export default Rules