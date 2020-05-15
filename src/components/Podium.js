import React from 'react'
import './Podium.css'
import {List, Image} from 'semantic-ui-react'


function Podium() {
  let trizzers = [
    
    {
    name: "Chris",
    score: getScore(),
    },
    {
    name: "JeffF",
    score: getScore(),
    },
    {
    name: "Anaïs",
    score: getScore(),
    },
    {
    name: "Nadir",
    score: getScore(),
    },
    {
    name: localStorage.getItem("name"),
    score: localStorage.getItem("plantedTrizz"),
    },
  ];
  

  
  function getScore(){
    return Math.floor(Math.random() * Math.floor(10));
  }

  return (
    <List id ='trizzers'>
      {trizzers.sort(function (a, b) {
        if (a.score > b.score)
          return -1;
        else
          return 1;
      }).map(trizzer => (
    <List.Item className ="triz">
          <Image className='avatar' avatar src={`https://zupimages.net/up/20/20/${trizzers.indexOf(trizzer) === 0 ? "lwgf" : trizzers.indexOf(trizzer) === 1 ? '2npl' : trizzers.indexOf(trizzer) === 2 ? 'z2en' : trizzers.indexOf(trizzer) === 3 ? "qnfp" : trizzers.indexOf(trizzer) === 4 ? "ylcz" : "" }.png`}/>
      <List.Content>
          <List.Header className='name' as='a'>{trizzer.name}</List.Header>
        <List.Description className ='description'>
              {trizzers.indexOf(trizzer) === 0 ? "First" : trizzers.indexOf(trizzer) === 1 ? 'Second' : trizzers.indexOf(trizzer) === 2 ? 'Third' : trizzers.indexOf(trizzer) === 3 ? "Fourth" : trizzers.indexOf(trizzer) === 4 ? "Fifth" : ""}  Trizzer{' '}
          <a>
            <b>{trizzer.score} Trees</b>
          </a>{' '}
for this week        </List.Description>
      </List.Content>
    </List.Item>
    ))}
    </List>
)
  }


export default Podium