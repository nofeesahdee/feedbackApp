import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext';
import React, { useState,useContext,useEffect } from 'react'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState();
    const [message, setMessage] = useState('')
    const [btnDisabled, setbtnDisabled] = useState(true)
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setbtnDisabled(false);
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit])

    const handleTextChange = (e) => {
        if(text === ' '){
            setbtnDisabled(true)
            setMessage(null)
        }else if(text !== ' ' && text.trim().length <= 10){
            setbtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        }else {
            setbtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating
            }
            if( feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }else{
                addFeedback(newFeedback);
            }
            
            setText('')
        }
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input 
                    type='text'
                    onChange={handleTextChange}
                    placeholder="Write a review"
                />
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm
