import { useState } from "react";
import Modal from "./Modal"
import Backdrop from "./Backdrop"

export default function Todo(props) {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

     function deleteTodo() {
         setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button onClick={deleteTodo}>delete</button>
            </div>
            { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> }
            { modalIsOpen && <Backdrop  onCancel={closeModalHandler}/> }

        </div>
    )
}