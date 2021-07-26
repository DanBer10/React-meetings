import { useHistory } from 'react-router-dom'
import NewMeetupForm from '../Components/meetups/NewMeetupForm'

export default function NewMeetup() {
    const history = useHistory();

    function addMeetupHandler(meetupData) {
        fetch('https://react-todos-8bde1-default-rtdb.firebaseio.com/meetups.json',
         {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(() => {
            history.replace('/');
        })
    }
    return (
        <div>
         <h1>Add New Meetup</h1>
         <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </div>
    )
}
