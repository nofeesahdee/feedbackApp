import React from 'react';
import FeedbackItem from "./FeedbackItem"
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
  const {feedback} = useContext(FeedbackContext)

  if(!feedback || feedback.length === 0){
    return <p> No Feedback Yet.</p>
  }
  
  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default FeedbackList
