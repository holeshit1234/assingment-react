import React from 'react'
import './Modal.css'
export default function Modal({ setIsOpen, film }) {
    return (
        <div className='modal-show' onClick={() => setIsOpen(false)}>
            <div className='modal-content'>
                <h4> Trailer for {film.title}</h4>
                <p><iframe width="560" height="315" src={film.clip} title={film.title} frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen /> </p>
                <div className="modal-footer">
                    <a className="modal-close red-text"> Close</a>
                </div>
            </div>

        </div>
    )
}