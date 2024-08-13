import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./Header.module.css"
function LowerHeader() {
  return (
    <div className={classes.lower_container}>
        <ul>
            <li>
                <AiOutlineMenu/>
                <p>ALL</p>
           <li>SameDay Delivery</li>
           <li>MedicalCare</li>
           <li>Today's Deal</li> 
           <li>Amazone Basics</li>
           <li>Groceries</li>
            <li>Livestreams</li> 
            <li>Gift Cards</li>
            <li>Customer service</li>
            <li>Registry</li>
            <li>Buy Agin</li>
            <li>Shop by Interest</li>  
            </li>  
        </ul>

    </div>
  )
}

export default LowerHeader