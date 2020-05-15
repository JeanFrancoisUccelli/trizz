import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { Segment, Header, Grid, Image, List, Item  } from 'semantic-ui-react'
import './Articles.css'

function CardExampleLinkCard() {
  const [articles, setArticles] = useState([])
  const [month, setMonth] = useState()
  function Clock() {
    // setDate(new Date().toLocaleDateString())
    setMonth(new Date().toLocaleDateString().substr(3, 2))
  }

  const style = {
    h1: {
      marginTop: '3em',
    },
    h2: {
      margin: '4em 0em 2em',
    },
    h3: {
      PaddingTop: '2em',
      padding: '2em 0em',
    },
  }

  function getArticles() {
    const url = 'http://newsapi.org/v2/everything?' +
      'q=Reforestation&' +
      `from=2020-${month}-01&` +
      'sortBy=publishedAt&' +
      'pageSize=12&' +
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
     <Header as='h3' content='Month 12 last articles' style={style.h3} textAlign='center' />
      <Grid columns={4} doubling stackable container divided >
        {articles.map(article => {
        return (
          <>
       <Header as='h3' content='' textAlign='center' style={style.h3} />
   
          
      <Grid.Column>
      <Segment id="previewArticle">
      <List className='ListMap' widht = '100px' height ='30px'>
    
      <Image src={article.urlToImage} as='a' href={article.url} target='_blanck'/>
      <List.Content>
        <List.Header><br/>{article.title}</List.Header>
      <br/>Published {article.publishedAt.substr(0,10)}
      </List.Content>
    
    </List>
        
    </Segment></Grid.Column> 
      </>)})}
   </Grid>

   <Item.Group className ='action'relaxed='very'>
   <Item>
      <Item.Content as='a'href ='https://www.reforestaction.com/en/#0' target ='_blanck' verticalAlign='middle'>
        <Item.Header>You want to invest in reforestation? Click here ! </Item.Header>
        <Item.Image size='tiny' src='https://www.aquacleanconcept.com/1205-home_default/1-arbre-plante-avec-reforest-action.jpg' target = "_blanck"/>
      </Item.Content> 
  </Item></Item.Group> 
   
</>
  )
}
  
  export default CardExampleLinkCard