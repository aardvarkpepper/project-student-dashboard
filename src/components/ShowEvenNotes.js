// import { useState } from 'react';
import IndividualNote from './IndividualNote';
export default function ShowEvenNotes({ student, showNotes, pressNiceButton, notes }) {
    // const [notes, setNotes] = useState([]);

    // function pressNiceButton(event) {
    //     event.preventDefault();
    //     setNotes(previous => [...previous, {commenterName: event.target.commenterName.value, comment: event.target.comment.value}]);
    // }

    if (showNotes) {
        return (
            <div>
                <h3>1-on-1 Notes</h3>
                <div className="notesForm">
                    <form onSubmit={pressNiceButton}>
                        <label>Commenter Name {" "}
                            <input type="text" name="commenterName" id="commenterName" />
                        </label>
                        <br />
                        <label>Comment {" "}
                            <input type="text" name="comment" id="comment" />
                        </label>
                        <br />
                        <br />
                        <button className="niceButton" type="submit">Add Note</button>
                    </form>
                    <ul>{notes.map(note => {
                        return (
                            <IndividualNote commenterName={note.commenterName} comment={note.comment}/>
                        );
                    })}</ul>
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }

}