import Nav from "../nav/Nav"
import plecas from "/design/plecas.svg"
import planeta from "/design/planeta.png"
import "./hero.css"

function Hero() {
  return (
    <section className='hero__container'>
      <div className="hero__elements">
        <h1 className="hero__tittle">DE IDEAS A PRODUCCIONES <br/>QUE DESAFÍAN<br/> LO CONVENCIONAL</h1>
        <a className="hero__button">Cotizar</a>
        <div className="hero__content_title_b">
          <img src={plecas} className="hero__plecas"></img>
          <p className="hero_content__text__b">CREAMOS CONTENIDO AUDIOVISUAL PARA QUIENES BUSCAN ALGO MÁS QUE UNA IMÁGEN: BUSCAN UN IMPACTO.</p>
        </div>
      </div>
      <div className="hero__back__container">
        <div className="hero__content__title">
          <img src={plecas} className="hero__plecas__b"></img>
          <p className="hero_content__text">PRODUCIMOS COMERCIALES, VIDEOCLIPS, DOCUMENTALES Y CAMPAÑAS PARA REDESSOCIALES, NUESTRO TRABAJOCOMBINA CREATIVIDAD, PRECISIÓN Y UN NIVEL DE CALIDAD QUE HABLA POR SÍ MISMO. </p>
        </div>
        <div className="hero__content__title_c">
          <p className="hero_content__text__c">NO HACEMOS CONTENIDO BONITO. HACEMOS CONTENIDO QUE IMPACTA. NO DISEÑAMOS PIEZAS AISLADAS. CONSTRUIMOS ESTRATEGIAS. NO SEGUIMOS TENDENCIAS. CREAMOS DIFERENCIACIÓN.</p>
          <img src={planeta} className="content__img__c"/>
        </div>
      </div>
    </section>
  )
}

export default Hero
