
import React from 'react'

import './styles.css'


export const Modal = ({ children, isOpen, closeModal }) => {
  return (
    <article className={`modal ${isOpen && `is-open`}`} onClick={closeModal} >
      <div className="modal-container">
        <button className="modal-close" onClick={closeModal}>X</button>
        { children }
      </div>
    </article>
  )
}

