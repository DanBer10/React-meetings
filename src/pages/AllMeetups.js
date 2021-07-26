import { useState, useEffect } from 'react'
import MeetupList from "../Components/meetups/MeetupList";

export default function AllMeetups() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([])

    useEffect(() => {
        setIsLoading(true);
        fetch('https://react-todos-8bde1-default-rtdb.firebaseio.com/meetups.json')
        .then((response) => {
            return response.json();
        }).then((data) => {
            const meetups = [];

            for (const key in data) {
                const meetup = {
                    id: key,
                   ...data[key]
                };
                meetups.push(meetup);
            }
            setIsLoading(false);
            setLoadedMeetups(meetups);
        })
    }, [])


   if (isLoading) {
       return (
       <section>
           <p>Loading...</p>
       </section>
       )
   }

   if (loadedMeetups.length === 0) {
       return (
           <section>
               You have 0 notes left
           </section>
       )
   }
   

    return (
        <div>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </div>
    )
}
