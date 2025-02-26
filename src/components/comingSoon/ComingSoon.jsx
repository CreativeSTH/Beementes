import "../comingSoon/comingSoon.css"
import bailarina from "/bailarina.png"
import logo from "/logo_Beementes.svg"
import logo2 from "/beemente.svg"

function ComingSoon() {
  return (
    <section className="container">
        <div className="logo__card">
          <img className="logo__card__a" src={logo} />
          <img className="logo__card__b" src={logo2} />
        </div>
        <img className="cs__card__logo" src={bailarina} alt="Logo de Beementes" />
        <article className="cs__card">
            <h1 className="cs__card__title">Coming Soon</h1>
            <p className="cs__card__text">En BEEMENTES estamos creando un sitio web increíble, próximamente estará disponible <br></br> gracias por la comprensión</p>
        </article>
    </section>
  )
}

export default ComingSoon
