
export default function ServiceDetailsArea() {
  return (
    <div className="service-details-section">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row g-5">
          <div className="col-12 col-md-5 col-lg-4">
            <div className="d-flex flex-column gap-5">
              {/* <!-- Service Widget --> */}
              <ul className="service-list">
                <li>
                  <a href="#">Customer Support <i className="ti ti-chevron-right"></i></a>
                </li>
                <li>
                  <a href="#">Project Management <i className="ti ti-chevron-right"></i></a>
                </li>
                <li>
                  <a href="#">Advanced Software <i className="ti ti-chevron-right"></i></a>
                </li>
                <li>
                  <a href="#">Human Resources <i className="ti ti-chevron-right"></i></a>
                </li>
                <li>
                  <a href="#">Cyber Security <i className="ti ti-chevron-right"></i></a>
                </li>
                <li>
                  <a href="#">Email Marketing <i className="ti ti-chevron-right"></i></a>
                </li>
              </ul>

              {/* <!-- Widget --> */}
              <div className="widget-card">
                <div className="mb-5">
                  <h4>Need Any Help?</h4>
                  <p>Need Any Help, Call Us 24/7 For Support</p>
                </div>

                {/* <!-- Info Card Wrap --> */}
                <div className="info-card-wrap">
                  {/* <!-- Info Card --> */}
                  <div className="info-card">
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none">
                        <path
                          d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                          fill="#161616" />
                      </svg>
                    </div>
                    <div>
                      <p className="mb-1">Call Us</p>
                      <h5>+123 456 7890</h5>
                    </div>
                  </div>

                  {/* <!-- Info Card --> */}
                  <div className="info-card">
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none">
                        <path
                          d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                          fill="#161616" />
                      </svg>
                    </div>
                    <div>
                      <p className="mb-1">Mail Us</p>
                      <h5>info@example.com</h5>
                    </div>
                  </div>

                  {/* <!-- Info Card --> */}
                  <div className="info-card">
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none">
                        <path
                          d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z"
                          fill="#161616" />
                      </svg>
                    </div>
                    <div>
                      <p className="mb-1">Office Address</p>
                      <h5>125 Berlin, Germany</h5>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>

          <div className="col-12 col-md-7 col-lg-8">
            {/* <!-- Service Details Content --> */}
            <div className="service-details-content">
              <img src="/assets/img/bg-img/104.jpg" alt="" />
              <h2>Email Marketing</h2>
              <p>When an unknown printer took ar galley offer type year anddey scrambled make aewer specimen a
                book bethas survived not only five when anner year unknown printer eed little help from
                friend from time to time. Although we offer the one-stop convenience. unknown printer took
                galley type year anddey unknown printer took scrambled.</p>
              <p>When an unknown printer took ar galley offer type year anddey scrambled make aewer specimen a
                book bethas survived not only five when anner year unknown printer eed little help from
                friend from time to time. Although we offer the one-stop convenience. unknown printer took
                galley type year unknown printer took galley anddey scrambled.</p>
              <ul className="p-0 list-unstyled">
                <li>
                  <svg width="24" height="24">
                    <use href="#checkIcon3"></use>
                  </svg>
                  Sed nisl fusce est consequat mollis habitasse facilisi rutrum nisle.
                </li>
                <li>
                  <svg width="24" height="24">
                    <use href="#checkIcon3"></use>
                  </svg>
                  Cubilia quisque ad accumsan lorem platea elementum nisl curabitur dapibus.
                </li>
                <li>
                  <svg width="24" height="24">
                    <use href="#checkIcon3"></use>
                  </svg>
                  Egestas magnis sapien hack vehicula condimentum dui enim justo site.
                </li>
              </ul>
              <div className="row g-4">
                <div className="col-12 col-sm-6">
                  <img src="/assets/img/bg-img/105.jpg" alt="" />
                </div>
                <div className="col-12 col-sm-6">
                  <img src="/assets/img/bg-img/106.jpg" alt="" />
                </div>
              </div>
              <p>When an unknown printer took ar galley offer type year anddey scrambled make aewer specimen a
                book bethas survived not only five when anner year unknown printer eed little help from
                friend from time to time. Although we offer the one-stop convenience. unknown printer took
                galley type year anddey unknown printer took scrambled.</p>
            </div>

            {/* <!-- Divider --> */}
            <div className="divider-sm"></div>

            {/* <!-- Service Details FAQs --> */}
            <div className="faq-accordion style-three">
              <h2 className="faq-title mb-5">Frequently Asked Question</h2>

              <div className="accordion" id="faqAccordion">
                {/* <!-- Accordion Item --> */}
                <div className="accordion-item">
                  <div className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                      data-bs-target="#faqQuestion1" aria-expanded="true" aria-controls="faqQuestion1">
                      What is vision for the future?
                    </button>
                  </div>
                  <div id="faqQuestion1" className="accordion-collapse collapse show"
                    data-bs-parent="#faqAccordion">
                    <div className="accordion-body">Augue enim ut sem vulputate nunc eu ultrices nec bibendum.
                      Nullam non at eu tincidunt non purus vitae.leo nam quam elit imperdiet. Sit
                      malesuada massa scelerisque tincidunt. faucibus Sit dolor ultricie phasellus viverra
                      feugiat enim nisl.</div>
                  </div>
                </div>

                {/* <!-- Accordion Item --> */}
                <div className="accordion-item">
                  <div className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#faqQuestion2" aria-expanded="false" aria-controls="faqQuestion2">
                      Do you offer free resources?
                    </button>
                  </div>
                  <div id="faqQuestion2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">Augue enim ut sem vulputate nunc eu ultrices nec bibendum.
                      Nullam non at eu tincidunt non purus vitae.leo nam quam elit imperdiet. Sit
                      malesuada massa scelerisque tincidunt. faucibus Sit dolor ultricie phasellus viverra
                      feugiat enim nisl.</div>
                  </div>
                </div>

                {/* <!-- Accordion Item --> */}
                <div className="accordion-item">
                  <div className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#faqQuestion3" aria-expanded="false" aria-controls="faqQuestion3">
                      Can help to find investors?
                    </button>
                  </div>
                  <div id="faqQuestion3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">Augue enim ut sem vulputate nunc eu ultrices nec bibendum.
                      Nullam non at eu tincidunt non purus vitae.leo nam quam elit imperdiet. Sit
                      malesuada massa scelerisque tincidunt. faucibus Sit dolor ultricie phasellus viverra
                      feugiat enim nisl.</div>
                  </div>
                </div>

                {/* <!-- Accordion Item --> */}
                <div className="accordion-item">
                  <div className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#faqQuestion4" aria-expanded="false" aria-controls="faqQuestion4">
                      What services do you offer?
                    </button>
                  </div>
                  <div id="faqQuestion4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">Augue enim ut sem vulputate nunc eu ultrices nec bibendum.
                      Nullam non at eu tincidunt non purus vitae.leo nam quam elit imperdiet. Sit
                      malesuada massa scelerisque tincidunt. faucibus Sit dolor ultricie phasellus viverra
                      feugiat enim nisl.</div>
                  </div>
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
