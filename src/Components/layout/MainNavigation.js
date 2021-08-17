import { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { AiOutlinePlus } from "react-icons/ai";

import FavoritesContext from "../../store/favorites-context";

export default function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetings</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetings</Link>
          </li>
          <li className="add-meeting">
            <Link to="/new-meetup">
              Add New Meeting <AiOutlinePlus />{" "}
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
