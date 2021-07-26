import React from 'react'
import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import { AiFillStar } from 'react-icons/ai'

export default function MeetupItem(props) {
    return (
        <li className={classes.item}>
            <Card>
         <div className={classes.image}>
             <img src={props.image} alt={props.title}>
                 </img>
         </div>  
         <div className={classes.content}>
             <h3>{props.title}</h3>
             <adress>{props.adress}</adress>
             <p>{props.description}</p>
             </div> 
             <div className={classes.actions}>
                 <button><AiFillStar /> To favorites</button>
             </div>
             </Card>
        </li>
    )
}
