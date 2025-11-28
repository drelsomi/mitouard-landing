import Image from "next/image";

export default function CtaHomeTwo() {
  return (
    <section className="download-section bg-primary">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-12 col-md-6">
            <div className="section-heading pe-xxl-5">
              <span className="subtitle text-light fadeInUp" data-delay="0.5">Le Mitouard App</span>
              <h2 className="mb-4 text-white heading-chars" data-delay="0.6">Vos dossiers fiscaux et juridiques en poche.</h2>
              <p className="mb-5 text-white heading-line" data-delay="0.7">Téléchargez l’application mobile & tablette, synchronisez vos documents, puis consultez-les en mode offline. L’année 1 est offerte pour vos clients premium.</p>
              {/* <!-- Download App Button --> */}
              <div className="d-flex flex-wrap align-items-center gap-4">
                <a href="#" className="btn-download active fadeInUp" data-delay="0.8">
                  <div>
                    <i className="ti ti-brand-apple"></i>
                  </div>
                  <div>
                    <span className="sub-text">Version iOS</span>
                    <p className="mb-0">Bientôt disponible</p>
                  </div>
                </a>
                <a
                  href="/assets/app-release.apk"
                  download
                  className="btn-download fadeInUp"
                  data-delay="0.9"
                  style={{ backgroundColor: "#111", color: "#fff", borderColor: "#111" }}
                >
                  <div>
                    <i className="ti ti-brand-google-play"></i>
                  </div>
                  <div>
                    <span className="sub-text">Télécharger</span>
                    <p className="mb-0">Android (APK)</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Download App Image --> */}
          <div className="col-12 col-md-6">
            <div className="download-app-img fadeInUp" data-delay="1">
              <Image src="/assets/img/core-img/shape.png" alt="" width={1000} height={1000} priority/>
              <Image
                className="download-app-img-two"
                src="/assets/img/bg-img/fout.png"
                alt=""
                width={1000}
                height={1000}
                priority
                style={{ marginTop: "-5px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>
    </section>
  )
}
