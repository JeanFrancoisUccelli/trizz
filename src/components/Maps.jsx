import React, { useState, useEffect } from 'react';
import './Maps.css'
import {Modal } from 'semantic-ui-react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'
import axios from 'axios'
import Iframe from "react-iframe";

const plantations = [
    [45.101291,4.928171, 'France'],//France
    [-5.184195,-80.651014, 'Peru'], //pérou
    [6.963344,0.715310, 'Togo'],//togo
    [31.631278,-7.983147, 'Morocco'],//Maroc
    [5.322906, -4.345943, 'Ivory Coast'],//CotedIvoire
    [-0.152138,37.310082, 'Kenya'],//Kenya
    [-21.039826,55.549270, 'Reunion'],//LaRéunion
    [-1.175512,101.598136, 'Indonesia'],//indonésie
    [52.954153,-8.827211, 'Ireland'],//irelande
    [42.012131,-4.524637, 'Spain'],//espagne         
]

const APIKey = '7ESCVeg0KgkQwgRo1PtacPmPisCPQwvP'


function Maps () {
    const [Cam, setCam] = useState([])
    const [trizz, setTrizz] = useState()
    let [plantedTrizz, setPlantedTrizz] = useState()

    function getData() {
        setTrizz(localStorage.getItem('trizz'))
        setPlantedTrizz(localStorage.getItem('plantedTrizz'))
    }

    useEffect(() => {
        getData()
    }, [])
    

    function plantTrizz() {
        if (trizz - plantedTrizz > 0) {
            plantedTrizz = Number(plantedTrizz) + 1
            alert('your trizz will be plant in this area')
        } else {
            alert('you have not trizz enough')
        }
        localStorage.setItem('plantedTrizz', plantedTrizz)
        window.location.reload(false)
    }
    return (
    <>

    <div id='mapHeader'>
        <h1 id='maph1'>Choose the place you want to plant trees</h1>
        <h2 id='maph2'>Scroll the map</h2>
    </div>
    <LeafletMap className='map' center={plantations[0]} zoom={2}>
        <TileLayer className ='cadreMap'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {plantations.map(plantation => {
            function getCam() {
                axios.get(`https://api.windy.com/api/webcams/v2/list/category=forest/nearby=${plantation[0]},${plantation[1]},1000/limit=1?show=webcams:location,image,player&key=${APIKey}`)
                    .then(response => setCam(response.data.result.webcams))
            }
            
            return (
              <Marker onClick={() => getCam()} position={plantation}>
                <Popup>
                  <div className="spanCss">
                    <h5>{plantation[2]}</h5>
                    <br />
                    <br />
                    <p>trizz to plant: {trizz - plantedTrizz > 0 ? trizz - plantedTrizz : 0}<br/>
                    Are you sure to plant here ?</p>
                    <button onClick={() => plantTrizz()}>Oui !</button>
                    <Modal
                      id="webcam"
                      trigger={<button>Show Webcam</button>}
                      header={Cam.map(cam => { return <p>{cam.title}</p>})}
                      content={Cam[0] !== undefined ? Cam.map((cam) => {
                          return <Iframe url={cam.player.lifetime.embed} />})
                          : <p>There is no webcam here</p>
                      }
                      actions={[
                        { key: "done", content: "Close", positive: true },
                      ]} 
                    />
                  </div>
                </Popup>
              </Marker>
            );
        }
        )}
    </LeafletMap>
        </>
    )
    
};
export default Maps