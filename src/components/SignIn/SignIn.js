import React from 'react'
//import {addStage} from '../../actions/actions'
//import Stage from '../Stage/Stage';
//import './Board.css'
import { NavLink } from "react-router-dom";
const SignIn = ({title}) => {
   return ( 
      <div className = "Board-container">
        <h1>{title}</h1>
        <NavLink to={'/SignUp'}>Next</NavLink>
      </div>
   ); 
}

export default SignIn;