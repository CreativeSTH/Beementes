import React from 'react'
import '../services/service.css';

function Service() {
  return (
    <section className='service__hero'>
      <article className='service__hero_article'>
        <h2 className='hero__article__title'>servicios</h2>
        <div className='container__hero__article'>
            <div className='hero__article__container__tex'>
                <h3 className='article__container__title'>DIRECCIÓN CREATIVA</h3>
                <p className='article__container__tex'>Construimos estética al servicio del propósito</p>
            </div>
            <div className='hero__article__container__tex'>
                <h3 className='article__container__title'>PRODUCCIÓN AUDIOVISUAL</h3>
                <p className='article__container__tex'>Narramos historias a través deimágenes en movimiento</p>
            </div>
            <div className='hero__article__container__tex'>
                <h3 className='article__container__title'>PRODUCCIÓN FOTOGRÁFICA</h3>
                <p className='article__container__tex'>Mostramos y modelamos productos de maneras disruptiva</p>
            </div>
            <div className='hero__article__container__tex'>
                <h3 className='article__container__title'>DISEÑO WEB</h3>
                <p className='article__container__tex'>Creamos universos digitales a partir de estrategias simbióticas.</p>
            </div>
            <div className='hero__article__container__tex'>
                <h3 className='article__container__title'>COOLHUNTING <br />
                Y CONSULTORÍA</h3>
                <p className='article__container__tex'>Cazamos tendencias y asesoramos marcas</p>
            </div>
            <div className='hero__article__container__tex'>
                <h3 className='article__container__title'>DISEÑO <br /> GRAFICO</h3>
                <p className='article__container__tex'>Creamos soluciones creativas, estéticamente atractivas</p>
            </div>
        </div>
        <a className='service__hero__buttom'>Cotizar</a>
      </article>
    </section>
  )
}

export default Service
