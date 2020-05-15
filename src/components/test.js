import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import Podium from './Podium'
import ForestAction from './ForestAction'
import './Home.css'
import './test.css'
import {
  Grid,
  Segment,
  Popup,
  Item,
  Image
} from 'semantic-ui-react'
import trees from '../images/trees.png'
import Rules from './Rules'


function GridExampleCelledInternally() {
  const [articles, setArticles] = useState([])
  const [month, setMonth] = useState()
  function Clock() {
    // setDate(new Date().toLocaleDateString())
    setMonth(new Date().toLocaleDateString().substr(3, 2))
  }
  function getArticles() {
    const url = 'http://newsapi.org/v2/everything?' +
      'q=Reforestation&' +
      `from=2020-${month}-01&` +
      'sortBy=publishedAt&' +
      'pageSize=3&' +
      'apiKey=ffa55fe5bf19423f8bdd688c681415e3';
    Axios.get(url)
      .then(response => setArticles(response.data.articles))
  }
  useEffect(() => {
    getArticles()
  }, [])
  useEffect(() => {
    Clock()
  }, [])
  return (
  <> 
   <Grid columns={3} container divided stackable>
  
    <Grid.Row>
      <Grid.Column className = 'firstColumn' width={4}>
        <Segment><h2>Bests Trizzers</h2> <Podium/></Segment>
      </Grid.Column>
      <Grid.Column width={8}>
      <Segment> 
        <Popup
      trigger={<Link to ="/quiz"><img id="AppleButton" className="AppleButton"alt="pomme" src={trees} /></Link>}
      
      content='Click on tree to play trizz'
          position='bottom left' ></Popup>
          <Segment className ='center'> <h2>To know more ...<br/><br/><ForestAction/> </h2>
      
      <h2>Discover the game's rules <br/><br/><Rules /></h2>
      
     </Segment>
    </Segment>
      </Grid.Column>
      <Grid.Column width={4}>
     
     <Segment id="previewArticle">
            <h2>Last articles</h2>
            
              {articles.map(article => {
                return (
      <Item>
      <Item.Content href={article.url} target ='_blanck'>
        <Item.Header className ='titleArticle'as='a'>{article.title}</Item.Header>
        <Item.Description>
          <Image src={article.urlToImage}/><br/>
        </Item.Description>
      </Item.Content>
    </Item>
                  

                )
              })}
            
     </Segment>
      </Grid.Column>
    </Grid.Row></Grid></>
    )
  }
    

export default GridExampleCelledInternally

