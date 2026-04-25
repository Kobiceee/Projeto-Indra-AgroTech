import React from 'react'

const FeedbackItem = ({ data }) => {
  const { user, rating, text } = data

  return (
    <article className="review-card">
      <div className="review-header">
        <h3>{user}</h3>
        <div className="rating-stars" aria-label={`Avaliação ${rating} de 5`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} className={index < rating ? 'star filled' : 'star'}>★</span>
          ))}
        </div>
      </div>
      <p>{text}</p>
    </article>
  )
}

export default FeedbackItem
