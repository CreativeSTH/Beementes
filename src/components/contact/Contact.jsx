import React from 'react'
import '../contact/contact.css'
import plecas from "/design/plecas.svg"

function Contact() {
  return (
    <section className='contact__hero'>
        <div className='hero__contact__title'>
            <p className='hero__contact__text'>CREAMOS CONTENIDO AUDIOVISUAL PARA QUIENES BUSCAN ALGO MÁS QUE UNA IMÁGEN: BUSCAN UN IMPACTO.</p>
        </div>
        <img src={plecas} className="hero__plecas__a"></img>
        <h3 className='contact_title'>Contacto</h3>
    </section>
  )
}

export default Contact
