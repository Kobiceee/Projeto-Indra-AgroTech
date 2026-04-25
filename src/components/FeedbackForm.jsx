import React, { useState } from 'react'

const FeedbackForm = ({ onAdd }) => {
  const [user, setUser] = useState('')
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!user.trim() || !text.trim()) {
      return alert('Preencha todos os campos!')
    }

    onAdd({
      id: Date.now(),
      user: user.trim(),
      text: text.trim(),
      rating: 5
    })

    setUser('')
    setText('')
  }

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Seu nome"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
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
