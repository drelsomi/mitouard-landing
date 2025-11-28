export default function ContactArea() {
  return (
    <>
      <section className="contact-info-section">
        {/* <!-- Divider --> */}
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5">
            {/* <!-- Contact Info Card --> */}
            <div className="col-12 col-md-6 col-lg-5">
              <div className="contact-info-card me-xxl-5">
                <h2 className="mb-5">+242 05 546 50 60</h2>
                <p className="mb-4">+242 06 663 50 60</p>

                <div className="contact-sm-card">
                  <h4 className="mb-3">Adresse</h4>
                  <p>54, Avenue Charles de Gaulle - BP 22</p>
                  <p>Pointe-Noire, République du Congo</p>
                </div>

                <hr />

                <div className="contact-sm-card">
                  <h4 className="mb-3">Email</h4>
                  <p>contact@lemitouard.com</p>
                </div>

                <hr />

                <div className="contact-sm-card">
                  <h4 className="mb-3">Follow</h4>
                  {/* <!-- Social Navigation --> */}
                  <div className="social-nav">
                    <a href="#"><i className="ti ti-brand-facebook"></i></a>
                    <a href="#"><i className="ti ti-brand-twitter"></i></a>
                    <a href="#"><i className="ti ti-brand-instagram"></i></a>
                    <a href="#"><i className="ti ti-brand-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Contact Info Card --> */}
            <div className="col-12 col-md-6 col-lg-7">
              <div className="section-heading">
                <span className="subtitle">Nous contacter</span>
                <h2 className="mb-5">Écrivons-nous pour activer l’accès Le Mitouard App.</h2>
              </div>

              <form action="#">
                <div className="row g-4">
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control bg-secondary" placeholder="Votre nom" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <input type="email" className="form-control bg-secondary" placeholder="Adresse email" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input type="text" className="form-control bg-secondary" placeholder="Objet" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea className="form-control bg-secondary" placeholder="Votre message"></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100 rounded-3">
                      <span>Envoyer <i className="ti ti-arrow-up-right"></i></span>
                      <span>Envoyer <i className="ti ti-arrow-up-right"></i></span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <!-- Divider --> */}
        <div className="divider"></div>
      </section>

      {/* <!-- Maps Section --> */}
      {/* Maps section removed */}
    </>
  )
}
