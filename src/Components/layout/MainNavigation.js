import React from 'react'
import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css';

export default function MainNavigation() {
    return (
        <header className={classes.header}>
        <div className={classes.logo}>
          Bananiel and Pohfies Notes
        </div>
        <nav>
            <ul>
                <li>
                    <Link to="/">All Notes</Link>
                </li>
                <li>
                    <Link to="/new-meetup">Add New Note</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites</Link>
                </li>
            </ul>
        </nav>
        </header>

    )
}
