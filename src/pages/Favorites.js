import React from "react";
import { useContext } from "react";
import MeetupList from "../Components/meetups/MeetupList";

import FavoritesContext from "../store/favorites-context";

export default function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <h2>You have no favorite meetings yet</h2>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <div>
      <h1>My favorites</h1>
      {content}
    </div>
  );
}
