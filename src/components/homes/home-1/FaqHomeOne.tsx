import Link from "next/link";
import Image from "next/image";  

export default function FaqHomeOne() {
 
  return (
    <section className="faq-section">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row g-5">
          {/* <!-- Section Heading --> */}
          <div className="col-12 col-md-6">
            <div className="section-heading pe-xxl-5">
              <span className="subtitle">Questions fréquentes</span>
              <h2 className="mb-4">Comprendre l’accès à Le Mitouard App</h2>
              <p className="mb-5">Accès premium annuel avec 1re année offerte, consultation offline sur mobile/tablette et recherche IA pour vos documents fiscaux, juridiques, sociaux et autres.</p>
              <Link href="/contact" className="btn btn-primary">
                <span>Poser une question <i className="ti ti-arrow-up-right"></i></span>
                <span>Poser une question <i className="ti ti-arrow-up-right"></i></span>
              </Link>
              {/* <!-- Question Mark --> */}
              <div className="question-mark">
                <Image className="w-auto h-auto" data-speed="0.8" src="/assets/img/core-img/question-mark.png" alt="" width={1920} height={1080} priority/>
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
                      L’app fonctionne-t-elle sans connexion internet ?
                    </button>
                  </div>
                  <div id="faqQuestion1" className="accordion-collapse collapse show"
                    data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Oui. Les documents synchronisés restent disponibles en mode offline sur mobile et tablette. À la reconnexion, les mises à jour se synchronisent automatiquement.
                    </div>
                  </div>
                </div>

                {/* <!-- Accordion Item --> */}
                <div className="accordion-item">
                  <div className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#faqQuestion2" aria-expanded="false" aria-controls="faqQuestion2">
                      Quelles catégories de documents sont disponibles ?
                    </button>
                  </div>
                  <div id="faqQuestion2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Quatre catégories : fiscal, juridique, social et autres (annexes, contrats spécifiques, pièces diverses). La structure reste la même pour tous vos clients.
                    </div>
                  </div>
                </div>

                {/* <!-- Accordion Item --> */}
                <div className="accordion-item">
                  <div className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#faqQuestion3" aria-expanded="false" aria-controls="faqQuestion3">
                      Comment fonctionne l’abonnement premium ?
                    </button>
                  </div>
                  <div id="faqQuestion3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      L’abonnement est annuel et conditionne l’accès aux documents. La première année est offerte pour vos clients. Un renouvellement simple prolonge l’accès au-delà.
                    </div>
                  </div>
                </div>

                {/* <!-- Accordion Item --> */}
                <div className="accordion-item">
                  <div className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#faqQuestion4" aria-expanded="false" aria-controls="faqQuestion4">
                      La recherche est-elle assistée par l’IA ?
                    </button>
                  </div>
                  <div id="faqQuestion4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Oui. L’IA comprend les requêtes en langage naturel, propose des filtres intelligents et retrouve un document même si le titre exact n’est pas connu.
                    </div>
                  </div>
                </div>

                {/* <!-- Accordion Item --> */}
                <div className="accordion-item">
                  <div className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#faqQuestion5" aria-expanded="false" aria-controls="faqQuestion5">
                      Comment sécurisez-vous les accès ?
                    </button>
                  </div>
                  <div id="faqQuestion5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Accès nominatif, sessions chiffrées et gestion des droits par client. Les données sont stockées et synchronisées de façon sécurisée.
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
