import Link from "next/link";

export default function FaqHomeFive() {
  return (
    <section className="faq-section">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row g-5">
          {/* <!-- Section Heading --> */}
          <div className="col-12 col-md-6">
            <div className="section-heading pe-xxl-5">
              <span className="subtitle">Question</span>
              <h2 className="mb-4">Have Any Questions? Here Some Answers</h2>
              <p className="mb-5">In relation to websites and apps, UI design considers the look, interactivity of
                the making product. It's all about making sure that the user interface.</p>
              <Link href="/contact" className="btn btn-primary">
                <span>Ask Your Question <i className="ti ti-arrow-up-right"></i></span>
                <span>Ask Your Question <i className="ti ti-arrow-up-right"></i></span>
              </Link>
              {/* <!-- Question Mark --> */}
              <div className="question-mark">
                <img data-speed="0.8" src="/assets/img/core-img/question-mark.png" alt="" />
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            {/* <!-- FAQ Accordion --> */}
            <div className="faq-accordion">
              <div className="accordion" id="faqAccordion">
                {/* <!-- Accordion Item --> */}
                <div className="accordion-item">
                  <div className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                      data-bs-target="#faqQuestion1" aria-expanded="true" aria-controls="faqQuestion1">
                      What warranties do I have for installation?
                    </button>
                  </div>
                  <div id="faqQuestion1" className="accordion-collapse collapse show"
                    data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Nor is there anyone who loves or pursues or desires to obtain pain itself,
                      because it is pain, but occasionally cumstances occur in which toil and pain can
                      which toil and pain can procuresteady steady.
                    </div>
                  </div>
                </div>

                {/* <!-- Accordion Item --> */}
                <div className="accordion-item">
                  <div className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#faqQuestion2" aria-expanded="false" aria-controls="faqQuestion2">
                      How long does it take to build a new website?
                    </button>
                  </div>
                  <div id="faqQuestion2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Pursues or desires to obtain pain Nor is there anyone who loves or  itself,
                      because it is pain, but occasionally cumstances occur in which toil and pain can
                      which toil and pain can procuresteady steady.
                    </div>
                  </div>
                </div>

                {/* <!-- Accordion Item --> */}
                <div className="accordion-item">
                  <div className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#faqQuestion3" aria-expanded="false" aria-controls="faqQuestion3">
                      What do you need to start making me a website?
                    </button>
                  </div>
                  <div id="faqQuestion3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Which toil and pain can procuresteady steady.
                      Nor is there anyone who loves or pursues or desires to obtain pain itself,
                      because it is pain, but occasionally cumstances occur in which toil and pain can
                      
                    </div>
                  </div>
                </div>

                {/* <!-- Accordion Item --> */}
                <div className="accordion-item">
                  <div className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#faqQuestion4" aria-expanded="false" aria-controls="faqQuestion4">
                      How to soft launch your business?
                    </button>
                  </div>
                  <div id="faqQuestion4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Occasionally cumstances occur in which Nor is there anyone who loves or pursues or desires to obtain pain itself,
                      because it is pain, but  toil and pain can
                      which toil and pain can procuresteady steady.
                    </div>
                  </div>
                </div>

                {/* <!-- Accordion Item --> */}
                <div className="accordion-item">
                  <div className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#faqQuestion5" aria-expanded="false" aria-controls="faqQuestion5">
                      How does the trial work?
                    </button>
                  </div>
                  <div id="faqQuestion5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      There anyone who loves or pursues or desires Nor is  to obtain pain itself,
                      because it is pain, but occasionally cumstances occur in which toil and pain can
                      which toil and pain can procuresteady steady.
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