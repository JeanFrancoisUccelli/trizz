import React from 'react'
import './Home.css'
import { Button, Message } from 'semantic-ui-react'
import './History.css'
import { Link } from 'react-router-dom'
import StickyExamplePushing from './test'



function Home() {
  let points = localStorage.getItem('points')
  let trizz = localStorage.getItem('trizz')
  let rank = getRank(trizz)
  let plantedTrizz = localStorage.getItem('plantedTrizz')
  let trizzerName = localStorage.getItem('name')

  function setTrizzer() {
    trizzerName = prompt("Choose your Trizzer name")
    localStorage.setItem('name', trizzerName)
    window.location.reload(false)
  }

  function resetTrizzer() {
    localStorage.removeItem('name')
    localStorage.setItem('points', 0)
    localStorage.setItem('plantedTrizz', 0)
    localStorage.setItem('trizz', 0)
    window.location.reload(false)
  }

  function checkTrizzer() {
    return (
    trizzerName !== null ? <div id='trizzerName'><h1 >Hello {trizzerName}!!<br/><br/><Button color='brown' onClick={() => resetTrizzer()}>Forget Me</Button></h1></div> : setTrizzer()
    )}
  
  function getRank(trizz) {
    return (
      trizz >= 50 ?
        'Centenary tree' : 
        trizz >= 40 ?
          'Median' :
          trizz >= 30 ?
            'Perchis' :
            trizz >= 20 ?
              'Gaulis' :
              trizz >= 10 ?
                'Sprout' :
                'Seed')
  }
  return (
    <>
    <div className ='homeHeader'>
        <Message className='bandeau'>
          <h2 className='Header'>Play Trizz... to plant a lot of Trees</h2>
          <p className='paragraph'>In order to play, click on the apple which is on the tree</p>
        </Message>
        {checkTrizzer()}
        <h2>You accumulate {points} points, you help to plant {plantedTrizz} trizz and you achieve the rank of {rank} </h2><br/>
        {trizz - plantedTrizz > 0 ? <h3>`You're able to plant {trizz - plantedTrizz} trizz` <Link to='/Maps'><Button>Go plant Trizz</Button></Link></h3> : ""}
        
    </div>
<StickyExamplePushing />
    
    
  
 </>
        
        

  );
}
export default Home;





