import React from 'react'
import {Link} from 'react-router-dom'
import {
  Container,
  Divider,
  Grid,
  Header,
  List,
  Segment,
  Button
} from 'semantic-ui-react'

const Footer = () => (

<Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '1em 0em' }}>
<Container textAlign='center'>
  <Grid divided inverted stackable>
    <Grid.Column width={4}>
      <Header inverted as='h4' content='About our action' />
      <List link inverted>
        <List.Item as='a'><Link to= './aboutus'>About us</Link></List.Item>
        <List.Item as='a'>Forest Action</List.Item>
      </List>
    </Grid.Column>
    <Grid.Column width={4}>
      
      <List link inverted>
      <img width="20" src ='https://avatars2.githubusercontent.com/u/8874047?s=280&v=4' alt='WCC'/>
        <List.Item as='a' href ='https://www.wildcodeschool.com/en-GB' target=' _blanck'>Wild Code School 4 ever</List.Item>
      </List>
    </Grid.Column>
    
    <Grid.Column width={8}>
      <Header inverted as='h4' content="About Forest'Action" />
      <List.Item as='a' href='https://www.reforestaction.com' target=' _blanck'>
      To sign up, do not hesitate to inquire on the Forest'Action website
      </List.Item>
    </Grid.Column>
  </Grid>

  <Divider inverted section />
  <p>Social Network</p>
  <List horizontal inverted divided link size='small'>
  <Button circular color='facebook' icon='facebook' href ='https://www.facebook.com/' target=' _blanck' />
    <Button circular color='twitter' icon='twitter' href='https://twitter.com/'target=' _blanck' />
    <Button circular color='linkedin' icon='linkedin' href='https://www.linkedin.com/'target=' _blanck' />
    <Button circular color='google plus' icon='google plus' href='https://myaccount.google.com/'target=' _blanck' />
  </List>
</Container>
</Segment>

)
export default Footer