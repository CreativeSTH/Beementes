import React from 'react'
import '../portfolio/portfolio.css';

const Portfolio = () => {
  return (
      <section className='portfolio__hero'>
        <div className='cloud'></div>
        <div className='cloud2'></div>
        <div className='cloud3'></div>
        <article>
          <h2 className='portfolio__hero__title'>portafolio</h2>
          <p className='portfolio__hero__text'> 
            Elegimos colaborar con quienes comparten nuestra 
            visión de lo extraordinario y entienden que cada 
            proyecto es una oportunidad para innovar, sorprender 
            y marcar la diferencia. Aquí no seguimos las reglas, las 
            reinventamos. ¿Listo para destacar?
          </p>
        </article>
        <article className='hero__article'>
          <a className='portfolio__hero__buttom'>Siguenos</a>
          <p className='portfolio__hero__text__2'>
            NO HACEMOS CONTENIDO BONITO. * HACEMOS 
            CONTENIDO QUE IMPACTA*. NO DISEÑAMOS PIEZAS 
            AISLADAS. CONSTRUIMOS ESTRATEGIAS. NO 
            SEGUIMOS TENDENCIAS. ‡ CREAMOS DIFERENCIACIÓN
          </p>
        </article>
      </section>
  )
}

export default Portfolio
