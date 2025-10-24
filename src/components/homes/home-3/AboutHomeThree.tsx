

export default function AboutHomeThree() {
  return (
    <div className="about-section bg-white style-three">
      {/* <!-- Divider --> */}
      <div className="divider"></div>
      <div className="container">
        <div className="row g-5">
          {/* <!-- About Top Content --> */}
          <div className="col-12 col-md-4 col-lg-3">
            <div className="about-top-content">
              <h3><span className="counter">1000</span>+</h3>
              <p className="mb-4">Active Community Member</p>
              <div className="about-top-img">
                <img src="/assets/img/bg-img/50.png" alt="" />
                <img src="/assets/img/bg-img/51.png" alt="" />
                <img src="/assets/img/bg-img/52.png" alt="" />
                <img src="/assets/img/bg-img/53.png" alt="" />
              </div>
            </div>
          </div>
          {/* <!-- About Top Content --> */}
          <div className="col-12 col-md-8 col-lg-9">
            <div className="about-top-content">
              <h2 className="mb-0 heading-chars">We are committed to staying at the forefront of technological
                innovation, constantly exploring emerging trends and incorporating advancements into our
                solutions.</h2>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- About Bottom Image --> */}
      <div className="about-bottom-img translateY10">
        <div className="custom-container imgZoomInOut">
          <img src="/assets/img/bg-img/54.png" alt="" />
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>
    </div>
  )
}
