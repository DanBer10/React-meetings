import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removefavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});

function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);
    
    function addFavoriteHandler() {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        })
    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => meetupId !== meetupId);
        })
    }

    function itemsIsFavorite(meetupId) {
        return userFavorites.some(meetup => meetupId === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemsIsFavorite: itemsIsFavorite
    };

    return <FavoritesContext.Provider value={context}>
        {props-children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;