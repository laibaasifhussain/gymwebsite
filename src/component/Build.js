import React from 'react'; 
import builderImage from '../assets/h1_hero.png';
import "./BuildStyle.css";

function Build(props){
  return(
    <>
    <div className={props.cName}>
        <img alt="builder" src={builderImage}/>
        </div>
        
        <div className='build-text'>
            <p>______ WITH PATRICK POTTER</p><br></br><br></br>
            <h1>BUILD PERFECT BODY <br></br><br></br>SHAPE FOR GOOD AND HEALTHY<br></br><br></br> LIFE</h1><br></br><br></br>
            <button>Become a member</button>
        </div>
        </>
  )
}

export default Build;