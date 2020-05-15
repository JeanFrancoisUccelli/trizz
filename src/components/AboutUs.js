
import React, { Component } from 'react'
import { Button, Card, Image, Icon } from 'semantic-ui-react'
import './AboutUs.css'
import {Grid, Segment } from 'semantic-ui-react'


class AboutUs extends Component {
  

  render() {
    

    return (
      <div>
      
      <h1>About Us</h1>
        <p>Let's start by introducing ourselves! We are a team of students with one idea in mind, to make a fun activity useful for the environment. Our goal is to distract you and allow you by doing this to serve the planet your way. The principle of our quizzes. Depending on your answers and your progress, you actively participate in reforestation! all this while having fun from home! for this you just need to click on the apple on the tree .. let yourself be guided, have fun and do a good</p>
      
    <Grid columns={4} container divided stackable>
      <Grid.Column>
        <Segment><Card>
    <Image src='https://media-exp1.licdn.com/dms/image/C4D03AQFzwNY046bCXw/profile-displayphoto-shrink_200_200/0?e=1594857600&v=beta&t=u0WMAs_Bc_bq3NirOyD9lDiBarDu1CZ2ONOPBCZQqjU' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Anaïs REAU</Card.Header>
      <Card.Meta>
        <span className='date'>Wild Code School</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
    <Button color='linkedin' href='https://www.linkedin.com/in/anais-réau-48ab4319b' target ='_blanck'>
      <Icon name='linkedin' /> LinkedIn
    </Button>
    </Card.Content>
  </Card></Segment>
      </Grid.Column>


      <Grid.Column>
        <Segment><Card>
    <Image src='https://media-exp1.licdn.com/dms/image/C5603AQEbDwcFRNrHJg/profile-displayphoto-shrink_200_200/0?e=1594857600&v=beta&t=ikLJDCXYRXZucEeqrL7pudcJ7oeRaM-EA9qIIJ2_Nss' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Jeff UCCELLI</Card.Header>
      <Card.Meta>
        <span className='date'>Wild Code School</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
    <Button color='linkedin' href='https://www.linkedin.com/in/jeff-uccelli/' target ='_blanck'>
      <Icon name='linkedin' /> LinkedIn
    </Button>
    </Card.Content>
  </Card></Segment>
      </Grid.Column>

      
        <Grid.Column>
          <Segment><Card>
    <Image src='https://media-exp1.licdn.com/dms/image/C5603AQHWTZQqE3Ijcw/profile-displayphoto-shrink_200_200/0?e=1594857600&v=beta&t=XEAiu0dtPviwk18S41s8HiqIOi63xSa2iB2FZlU2zvE' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Christophe TURPIN</Card.Header>
      <Card.Meta>
        <span className='date'>Wild Code School</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
    <Button color='linkedin' href='https://www.linkedin.com/in/christophe-turpin-9b451b70/' target ='_blanck'>
      <Icon name='linkedin' /> LinkedIn
    </Button>
    </Card.Content>
  </Card>

</Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment><Card>
    <Image src='https://media-exp1.licdn.com/dms/image/C4D03AQFk7dkHvecFhA/profile-displayphoto-shrink_200_200/0?e=1594857600&v=beta&t=Jh_22nXa8AiTi8JYPHozgsgaq4aRlIc_cfpxEChY8fo' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Nadir ABDELOUAHAB</Card.Header>
      <Card.Meta>
        <span className='date'>Wild Code School</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
    <Button color='linkedin' href='https://www.linkedin.com/in/nadir-abdelouahab/' target ='_blanck'>
      <Icon name='linkedin' /> LinkedIn
    </Button>
    </Card.Content>
  </Card></Segment>
        </Grid.Column>
        
          
    </Grid>
      
        
        
        
  </div>
    )
  }
}
export default AboutUs