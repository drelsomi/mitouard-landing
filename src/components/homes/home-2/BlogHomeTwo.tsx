import Link from "next/link";
import Image from "next/image";

export default function BlogHomeTwo() {
  return (
    <section className="blog-section">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
            <div className="section-heading text-center">
              <span className="subtitle">Ressources clients</span>
              <h2 className="mb-0">Actualités fiscales & juridiques du cabinet</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-sm"></div>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {/* <!-- Blog Card --> */}
          <div className="col-12 col-md-6 col-lg-4 translateY10">
            <div className="blog-card fadeInUp" data-delay="0.5">
              <div className="blog-img">
                <Image src="/assets/img/bg-img/10.jpg" alt="" width={1000} height={1000} priority/>
              </div>
              <div className="blog-body">
                <div className="blog-meta mb-2">
                  <a href="#" className="post-category">Fiscal</a>
                  <span className="dot"></span>
                  <a className="post-date" href="#">Jan 2025</a>
                </div>
                <Link href="/blog-details" className="post-title h4 mb-4">Checklist TVA 2025 : échéances et pièces à prévoir</Link>
                <Link href="/blog-details" className="btn btn-link">
                  <span>Lire <i className="ti ti-arrow-up-right"></i></span>
                  <span>Lire <i className="ti ti-arrow-up-right"></i></span>
                </Link>
              </div>
            </div>
          </div>

          {/* <!-- Blog Card --> */}
          <div className="col-12 col-md-6 col-lg-4 translateY10">
            <div className="blog-card fadeInUp" data-delay="0.6">
              <div className="blog-img">
                <Image src="/assets/img/bg-img/11.jpg" alt="" width={1000} height={1000} priority/>
              </div>
              <div className="blog-body">
                <div className="blog-meta mb-2">
                  <a href="#" className="post-category">Juridique</a>
                  <span className="dot"></span>
                  <a className="post-date" href="#">Jan 2025</a>
                </div>
                <Link href="/blog-details" className="post-title h4 mb-4">Clauses clés pour vos nouveaux contrats 2025</Link>
                <Link href="/blog-details" className="btn btn-link">
                  <span>Lire <i className="ti ti-arrow-up-right"></i></span>
                  <span>Lire <i className="ti ti-arrow-up-right"></i></span>
                </Link>
              </div>
            </div>
          </div>

          {/* <!-- Blog Card --> */}
          <div className="col-12 col-md-6 col-lg-4 translateY10">
            <div className="blog-card fadeInUp" data-delay="0.7">
              <div className="blog-img">
                <Image src="/assets/img/bg-img/12.jpg" alt="" width={1000} height={1000} priority/>
              </div>
              <div className="blog-body">
                <div className="blog-meta mb-2">
                  <a href="#" className="post-category">Social</a>
                  <span className="dot"></span>
                  <a className="post-date" href="#">Jan 2025</a>
                </div>
                <Link href="/blog-details" className="post-title h4 mb-4">Index égalité 2025 : documents à conserver</Link>
                <Link href="/blog-details" className="btn btn-link">
                  <span>Lire <i className="ti ti-arrow-up-right"></i></span>
                  <span>Lire <i className="ti ti-arrow-up-right"></i></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>
    </section>
  )
}
