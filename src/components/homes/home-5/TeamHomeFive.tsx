import Link from "next/link";
import Image from "next/image";

export default function TeamHomeFive() {
  return (
    <div className="team-section">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row align-items-end g-5">
          <div className="col-12 col-sm-7">
            <div className="section-heading">
              <span className="subtitle">Our Team Members</span>
              <h2 className="mb-0">Our Team is Ready To Help.</h2>
            </div>
          </div>

          <div className="col-12 col-sm-5">
            <div className="text-sm-end">
              <Link href="/team" className="btn btn-primary">
                <span>Our Services <i className="ti ti-arrow-up-right"></i></span>
                <span>Our Services <i className="ti ti-arrow-up-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider-sm"></div>

      <div className="container">
        <div className="row g-5 g-lg-4 g-xl-5 align-items-center">
          <div className="col-12 col-lg-5">
            <div className="tab-content" id="v-pills-tabContent">
              <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                aria-labelledby="v-pills-home-tab" tabIndex={0}>
                {/* <!-- Team Card --> */}
                <div className="team-card-two">
                  <Image src="/assets/img/bg-img/73.jpg" alt="" width={1000} height={1000} priority/>
                  <div className="team-social">
                    <a href="#"><i className="ti ti-brand-facebook"></i></a>
                    <a href="#"><i className="ti ti-brand-instagram"></i></a>
                    <a href="#"><i className="ti ti-brand-x"></i></a>
                    <a href="#"><i className="ti ti-brand-linkedin"></i></a>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="v-pills-profile" role="tabpanel"
                aria-labelledby="v-pills-profile-tab" tabIndex={0}>
                {/* <!-- Team Card --> */}
                <div className="team-card-two">
                  <Image src="/assets/img/bg-img/73.jpg" alt="" width={1000} height={1000} priority/>
                  <div className="team-social">
                    <a href="#"><i className="ti ti-brand-facebook"></i></a>
                    <a href="#"><i className="ti ti-brand-instagram"></i></a>
                    <a href="#"><i className="ti ti-brand-x"></i></a>
                    <a href="#"><i className="ti ti-brand-linkedin"></i></a>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="v-pills-messages" role="tabpanel"
                aria-labelledby="v-pills-messages-tab" tabIndex={0}>
                {/* <!-- Team Card --> */}
                <div className="team-card-two">
                  <Image src="/assets/img/bg-img/73.jpg" alt="" width={1000} height={1000} priority/>
                  <div className="team-social">
                    <a href="#"><i className="ti ti-brand-facebook"></i></a>
                    <a href="#"><i className="ti ti-brand-instagram"></i></a>
                    <a href="#"><i className="ti ti-brand-x"></i></a>
                    <a href="#"><i className="ti ti-brand-linkedin"></i></a>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="v-pills-settings" role="tabpanel"
                aria-labelledby="v-pills-settings-tab" tabIndex={0}>
                {/* <!-- Team Card --> */}
                <div className="team-card-two">
                  <Image src="/assets/img/bg-img/73.jpg" alt="" width={1000} height={1000} priority/>
                  <div className="team-social">
                    <a href="#"><i className="ti ti-brand-facebook"></i></a>
                    <a href="#"><i className="ti ti-brand-instagram"></i></a>
                    <a href="#"><i className="ti ti-brand-x"></i></a>
                    <a href="#"><i className="ti ti-brand-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <div className="nav flex-column team-nav-list" id="v-pills-tab" role="tablist"
              aria-orientation="vertical">
              <div className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill"
                data-bs-target="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                {/* <!-- Team Nav --> */}
                <div className="team-nav">
                  <h2 className="mb-0">Devid Miller</h2>
                  <p className="mb-0">CEO & Founder</p>
                  <Link href="/team-details" className="btn btn-team"><i className="ti ti-arrow-up-right"></i></Link>
                </div>
              </div>

              <div className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
                data-bs-target="#v-pills-profile" role="tab" aria-controls="v-pills-profile"
                aria-selected="false">
                {/* <!-- Team Nav --> */}
                <div className="team-nav">
                  <h2 className="mb-0">Michael Torres</h2>
                  <p className="mb-0">Creative Officer</p>
                  <Link href="/team-details" className="btn btn-team"><i className="ti ti-arrow-up-right"></i></Link>
                </div>
              </div>

              <div className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                data-bs-target="#v-pills-messages" role="tab" aria-controls="v-pills-messages"
                aria-selected="false">
                {/* <!-- Team Nav --> */}
                <div className="team-nav">
                  <h2 className="mb-0">John Doe</h2>
                  <p className="mb-0">Project Manager</p>
                  <Link href="/team-details" className="btn btn-team"><i className="ti ti-arrow-up-right"></i></Link>
                </div>
              </div>

              <div className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                data-bs-target="#v-pills-settings" role="tab" aria-controls="v-pills-settings"
                aria-selected="false">
                {/* <!-- Team Nav --> */}
                <div className="team-nav">
                  <h2 className="mb-0">Jessica Harper</h2>
                  <p className="mb-0">CEO & Founder</p>
                  <Link href="/team-details" className="btn btn-team"><i className="ti ti-arrow-up-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>
    </div>
  )
}
