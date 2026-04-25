import React, { useState } from 'react'

const FeedbackForm = ({ onAdd }) => {
  const [user, setUser] = useState('')
  const [text, setText] = useState('')
  const [rating, setRating] = useState(5)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!user.trim() || !text.trim()) {
      return alert('Preencha todos os campos!')
    }

    onAdd({
      id: Date.now(),
      user: user.trim(),
      text: text.trim(),
      rating
    })

    setUser('')
    setText('')
    setRating(5)
  }

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Seu nome"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <div className="rating-input">
        <span>Avaliação:</span>
        <div className="rating-select">
          {Array.from({ length: 5 }).map((_, index) => {
            const value = index + 1
            return (
              <button
                type="button"
                key={value}
                className={`rating-star ${value <= rating ? 'selected' : ''}`}
                onClick={() => setRating(value)}
                aria-label={`${value} estrela${value > 1 ? 's' : ''}`}
              >
                ★
              </button>
            )
          })}
          <span className="rating-value">{rating} de 5</span>
        </div>
      </div>

      <textarea
        placeholder="Sua mensagem..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Publicar Feedback</button>
    </form>
  )
}

export default FeedbackForm
