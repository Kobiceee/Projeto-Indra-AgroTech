import React, { useState } from 'react'
import FeedbackForm from './FeedbackForm'
import FeedbackItem from './FeedbackItem'
import './Feedback.css'

const FeedbackSection = () => {
  const [reviews, setReviews] = useState([
    { id: 1, user: 'Artorias', rating: 5, text: 'Interface imersiva e lore muito bem detalhada!' },
    { id: 2, user: 'Shadowheart', rating: 4, text: 'O design está excelente, mas adoraria ver mais filtros.' }
  ])

  const addFeedback = (newReview) => {
    setReviews(prevReviews => [newReview, ...prevReviews])
  }

  return (
    <section className="feedback-section">
      <div className="container">
        <h2>O que dizem sobre o Indra</h2>

        <FeedbackForm onAdd={addFeedback} />

        <div className="reviews-list">
          {reviews.length > 0 ? (
            reviews.map(item => (
              <FeedbackItem key={item.id} data={item} />
            ))
          ) : (
            <p className="empty-feedback">Seja o primeiro a avaliar!</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default FeedbackSection
