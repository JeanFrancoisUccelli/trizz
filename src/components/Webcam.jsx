import React, {useState, useEffect} from 'react';
import './Maps.css'
import axios from 'axios'
import Iframe from "react-iframe";
import { Map as Popup } from 'react-leaflet'



const APIKey = '7ESCVeg0KgkQwgRo1PtacPmPisCPQwvP'


function Webcam(props) {
    const plantation = props.plantation
    const [cam, setCam] = useState(false)
    // console.log(`https://api.windy.com/api/webcams/v2/list/nearby=${plantation.lat},${plantation.long},500/limit=1?show=webcams:location,image,player&key=${APIKey}`)
    function getCam() {
        axios.get(`https://api.windy.com/api/webcams/v2/list/nearby=${plantation[0]},${plantation[1]},500/limit=1?show=webcams:location,image,player&key=${APIKey}`)
            .then(response => console.log(response.data.result.webcams[0]))
    }

    useEffect(() => {
        getCam()
    }, [])
    return (
    <>
        <Iframe url={cam.player.lifetime.embed} />
    </>
    )};





export default Webcam