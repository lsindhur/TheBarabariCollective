import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import '../styles/feedbackform.css'


const Form = () => {

    const [name,setName] = useState('');
    const [feedback,setFeedback] = useState('');
    const [entries, setEntries] = useState([]);

    function handleName(e) {
        setName(e.target.value);
    }

    function handleFeedback(e) {
        setFeedback(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setEntries([...entries,{personName:name,personFeedback:feedback}])

        //console.log(entries);
        setName('');
        setFeedback('');
    }

/*     useEffect(() => {
            console.log("entries updated: ",entries)
        },[entries]) */



  return (
    <div className="feedback-form-container">
        <form onSubmit={handleSubmit} className="feedback-form">
            <label>Name:</label>
            <input 
            type='text'
            placeholder='Your name'
            value={name}
            onChange={handleName}

            />
            <label>Feedback:</label>
            <textarea 
            placeholder='Your feedback'
            value={feedback}
            onChange={handleFeedback}
            />
            <button>Submit</button>
        </form>

        <div className="feedback-entries">
            <h2>Feedback entries</h2>
            <ul>
                {
                    entries.map((entry,index) => (
                        <li key={index}>
                            <strong>{entry.personName}</strong>: {entry.personFeedback}
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Form