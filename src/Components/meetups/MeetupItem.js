import { useContext } from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { AiFillStar } from "react-icons/ai";
import FavoritesContext from "../../store/favorites-context";

export default function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  // Använder favorites-context funktionen itemIsFavorite
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        adress: props.adress,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <adress>{props.adress}</adress>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            <AiFillStar />
            {itemIsFavorite ? "Remove from favorites" : "Add to favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
