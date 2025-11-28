import Link from "next/link";
import Image from "next/image";

export default function AboutHomeTwo() {
  return (
    <section className="about-section style-two bg-white">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row g-5">
          <div className="col-12 col-md-6">
            <div className="section-heading">
              <span className="subtitle">Cabinet Le Mitouard</span>
              <h2 className="mb-4">Vos dossiers sécurisés, toujours accessibles</h2>
              <p className="mb-5">Le Mitouard App centralise vos documents fiscaux, juridiques, sociaux et annexes. Vos clients naviguent facilement, consultent en mobilité, et retrouvent un document en quelques secondes grâce à l’IA embarquée.</p>
            </div>

            {/* <!-- About List --> */}
            <ul className="about-list mb-5">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
                  fill="none">
                  <use href="#checkIcon3" />
                </svg>
                <span>Mode offline pour accéder aux dossiers sans connexion</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
                  fill="none">
                  <use href="#checkIcon3" />
                </svg>
                <span>Catégorisation claire : fiscal, juridique, social et autres</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
                  fill="none">
                  <use href="#checkIcon3" />
                </svg>
                <span>Abonnement premium annuel, 1re année offerte</span>
              </li>
            </ul>

            <Link href="/about-us" className="btn btn-primary">
              <span>Découvrir l'app <i className="ti ti-arrow-up-right"></i></span>
              <span>Découvrir l'app <i className="ti ti-arrow-up-right"></i></span>
            </Link>
          </div>

          {/* <!-- About Image --> */}
          <div className="col-12 col-md-6">
            <div className="about-two-img translateY10">
              <Image className="first-img fadeInUp" data-delay="0.6" src="/assets/img/bg-img/42-new.png" alt="" width={1000} height={1000} priority/>
              <Image className="second-img fadeInUp" data-delay="0.7" src="/assets/img/bg-img/43-new.png" alt="" width={1000} height={1000} priority/>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>
    </section>
  )
}
