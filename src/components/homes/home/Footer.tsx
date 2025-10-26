export default function Footer() {
  return (
    <footer className="footer-wrapper">
      {/* <!-- Divider --> */}
      <div className="divider"></div>
      {/* <!-- Preview Footer Content --> */}
      <div className="preview-footer-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-xl-9">
              <h2 className="heading-chars" data-delay="0.5">Let's Build a Creative Website Today!</h2>
              <p className="fadeInUp" data-delay="0.6">One-time payment and get all features, templates &
                demos!</p>
              <a href="#" className="btn btn-primary fadeInUp" data-delay="0.7"><span>PURCHASE
                NOW</span><span>PURCHASE
                  NOW</span></a>
              <img className="curve-arrow fadeInUp" src="/assets/img/core-img/curved-arrow.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>

      {/* <!-- Border --> */}
      <div className="container">
        <div className="border-top"></div>
      </div>

      <div className="container">
        <div className="text-center">
          <p className="mb-0 mt-4 copyright">Copyright © {new Date().getFullYear()} <a href="https://themeforest.net/user/designing-world" target="_blank">Designing World</a> All rights reserved.</p>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider-sm"></div>
    </footer>
  )
}
