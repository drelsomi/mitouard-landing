import Link from "next/link";

export default function FaqHomeFour() {
  return (
    <section className="faq-section bg-secondary  mx-md-3 mx-xl-4 rounded-4">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row g-5 align-items-center">
          {/* <!-- Service Card --> */}
          <div className="col-12 col-md-6">
            <div className="service-card-two style-two pe-xxl-5">
              <div className="service-thumb mb-0">
                <Link href="/contact" className="btn">Explore more</Link>
                <img src="/assets/img/bg-img/81.png" alt="" />
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            {/* <!-- Section Heading --> */}
            <div className="section-heading mb-5">
              <span className="subtitle"><span>Question</span></span>
              <h2 className="mb-0">Have Any Questions? Here Some Answers</h2>
            </div>

            {/* <!-- FAQ Accordion --> */}
            <div className="faq-accordion theme-two">
              <div className="accordion" id="faqAccordion">
                {/* <!-- Accordion Item --> */}
                <div className="accordion-item">
                  <div className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                      data-bs-target="#faqQuestion1" aria-expanded="true" aria-controls="faqQuestion1">
                      What is Artificial Intelligence?
                    </button>
                  </div>
                  <div id="faqQuestion1" className="accordion-collapse collapse show"
                    data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Nor is there anyone who loves or pursues or desires to obtain pain itself, pain
                      because it
                      is pain, but occasionally cumstances occur in which toil and pain can procuresteady
                      steady.
                    </div>
                  </div>
                </div>

                {/* <!-- Accordion Item --> */}
                <div className="accordion-item">
                  <div className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#faqQuestion2" aria-expanded="false" aria-controls="faqQuestion2">
                      What industries do you cater to?
                    </button>
                  </div>
                  <div id="faqQuestion2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Nor is there anyone who loves or pursues or desires to obtain pain itself, pain
                      because it
                      is pain, but occasionally cumstances occur in which toil and pain can procuresteady
                      steady.
                    </div>
                  </div>
                </div>

                {/* <!-- Accordion Item --> */}
                <div className="accordion-item">
                  <div className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#faqQuestion3" aria-expanded="false" aria-controls="faqQuestion3">
                      Machine Learning is AI that learns?
                    </button>
                  </div>
                  <div id="faqQuestion3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Nor is there anyone who loves or pursues or desires to obtain pain itself, pain
                      because it
                      is pain, but occasionally cumstances occur in which toil and pain can procuresteady
                      steady.
                    </div>
                  </div>
                </div>

                {/* <!-- Accordion Item --> */}
                <div className="accordion-item">
                  <div className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#faqQuestion4" aria-expanded="false" aria-controls="faqQuestion4">
                      Why Need Marketing Data Analysis?
                    </button>
                  </div>
                  <div id="faqQuestion4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Nor is there anyone who loves or pursues or desires to obtain pain itself, pain
                      because it
                      is pain, but occasionally cumstances occur in which toil and pain can procuresteady
                      steady.
                    </div>
                  </div>
                </div>

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
