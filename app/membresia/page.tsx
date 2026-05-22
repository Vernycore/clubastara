import Link from 'next/link';

const faqs = [
  {
    question: '¿Incluye repuestos?',
    answer: 'No, solo cubre la mano de obra en talleres asociados. El socio aporta los repuestos.',
  },
  {
    question: '¿Aplica fuera de Santiago?',
    answer: 'Opera principalmente en la Región Metropolitana con cobertura prioritaria.',
  },
  {
    question: '¿Hay contrato anual?',
    answer: 'Pago mes a mes. Sin contratos anuales obligatorios.',
  },
];

export default function MembresiaPage() {
  return (
    <div className="page-content">
      <section className="hero-panel hero-landing">
        <div className="hero-copy">
          <span className="hero-label">Membresía Club ASTRA</span>
          <h1 className="hero-title">Plan mensual de $40.000 con mano de obra incluida.</h1>
          <p>Activa protección operativa para tu unidad con un plan transparente, diseñado para transporte escolar, turismo y flotas pequeñas.</p>
        </div>
      </section>

      <section className="card-panel">
        <div className="section-panel pricing-panel">
          <div className="pricing-card">
            <span className="service-pill">Plan mensual</span>
            <h2>$40.000</h2>
            <p>Pago mensual sin letra chica. Cobertura para mano de obra en talleres aliados.</p>
            <div className="feature-item compact">
              <strong>Incluye</strong>
              <p>Frenos, cambio de aceite, filtros y mantenciones menores en servicios certificados.</p>
            </div>
            <div className="feature-item compact">
              <strong>Prioridad</strong>
              <p>Coordinación desde el portal y seguimiento por WhatsApp.</p>
            </div>
            <Link href="https://www.clubastra.cl/membresia" target="_blank" className="btn btn-primary">
              Suscribirme ahora
            </Link>
          </div>

          <div className="faq-panel">
            <h3>Beneficios rápidos</h3>
            <ul>
              <li>Pago mes a mes sin contratos forzosos.</li>
              <li>Acceso a talleres certificados en RM.</li>
              <li>Sin cargos ocultos ni letra chica.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-panel">
        <div className="section-heading">
          <h2>Preguntas frecuentes</h2>
        </div>
        <div className="list-feature">
          {faqs.map((faq) => (
            <div key={faq.question} className="feature-item">
              <strong>{faq.question}</strong>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
