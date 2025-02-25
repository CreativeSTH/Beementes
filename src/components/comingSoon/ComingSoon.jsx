import "../comingSoon/comingSoon.css"
import bailarina from "/bailarina.png"

function ComingSoon() {
  return (
    <section className="container">
        <img className="cs__card__logo" src={bailarina} alt="Logo de Beementes" />
        <article className="cs__card">
            <h1 className="cs__card__title">Coming Soon</h1>
            <p className="cs__card__text">En BEEMENTES estamos creando un sitio web increíble, próximamente estará disponeble <br></br> gracias por la comprensión</p>
        </article>
    </section>
  )
}

export default ComingSoon
