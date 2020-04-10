/*import preloader from "../../../assets/images/Infinity-1s-200px.svg"*/
import {CubeGrid} from 'styled-loaders-react'
import React from "react";
import style from "./Preloader.module.css"

let Preloader = (props) => {
    return <div className={style.preloader}>
        <CubeGrid color="#4a76a8" size="100px" duration="5s"/>
    </div>
}
export default Preloader