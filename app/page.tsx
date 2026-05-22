import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  Bot,
  BusFront,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  CircleDollarSign,
  ClipboardList,
  FileText,
  Mail,
  MessageCircle,
  Network,
  Share2,
  ShieldCheck,
  Star,
  UsersRound,
} from 'lucide-react';

const assetPath = (path: string) => `/clubastra${path}`;

const services = [
  {
    title: 'Mantenimiento Preventivo',
    description: 'Evita fallas inesperadas con revisiones programadas y soporte técnico especializado para tu unidad.',
    badge: 'Prevención',
    icon: ShieldCheck,
    image: assetPath('/manteniiento_preventivo.png'),
    className: 'service-featured',
  },
  {
    title: 'Vehículo de Reemplazo',
    description: 'Sigue operando mientras tu unidad está en taller.',
    badge: 'Continuidad',
    icon: BusFront,
    image: assetPath('/vehiculo_de_reemplazo.png'),
    className: 'service-compact',
  },
  {
    title: 'Asistencia en Ruta',
    description: 'Apoyo técnico y mecánico cuando tengas una emergencia.',
    badge: 'Emergencia',
    icon: AlertTriangle,
    image: assetPath('/asistemcioa_en_ruta.png'),
    className: 'service-compact',
  },
  {
    title: 'Red de Talleres Aliados',
    description: 'Accede a una red coordinada para resolver más rápido.',
    badge: 'Cobertura',
    icon: Network,
    image: assetPath('/red_de_talleres_aliados.png'),
    className: 'service-compact',
  },
  {
    title: 'Asistencia de Grúa',
    description: 'Traslado seguro de tu unidad ante fallas mayores.',
    badge: 'Rescate',
    icon: CircleDollarSign,
    image: assetPath('/asistencia_en_grua.png'),
    className: 'service-compact',
  },
];

const faqs = [
  {
    question: '¿Qué servicios ofrece el club?',
    answer:
      'Ofrecemos asistencia mecánica, mantenimiento, vehículo de reemplazo, red de talleres aliados y apoyo logístico para transportistas de personas.',
  },
  {
    question: '¿Cómo puedo unirme?',
    answer:
      'Puedes iniciar tu membresía desde el botón Unirme al Club o coordinar directamente por WhatsApp para recibir asesoría.',
  },
  {
    question: '¿Quiénes pueden ser miembros?',
    answer:
      'Pequeños transportistas de personas, transporte escolar, turismo, traslado de personal y servicios privados.',
  },
];

const heroHighlights = [
  { label: 'Soporte técnico especializado', icon: ShieldCheck },
  { label: 'Respuesta rápida 24/7', icon: Clock3 },
  { label: 'Coordinación eficiente', icon: UsersRound },
];

const coordinationSteps = [
  {
    title: 'Escríbenos',
    description: 'Inicia la conversación por WhatsApp cuando lo necesites.',
    icon: MessageCircle,
  },
  {
    title: 'Comparte tu necesidad',
    description: 'Cuéntanos qué servicio necesitas y los detalles clave.',
    icon: FileText,
  },
  {
    title: 'Confirmamos tu atención',
    description: 'Nuestro equipo valida tu solicitud y confirma la disponibilidad.',
    icon: ShieldCheck,
  },
  {
    title: 'Te coordinamos la solución',
    description: 'Te asignamos el servicio y te mantenemos informado hasta la solución.',
    icon: CalendarCheck,
  },
];

export default function HomePage() {
  return (
    <>
      <div className="landing-page">
        <section id="inicio" className="landing-hero">
          <video className="hero-video" autoPlay muted loop playsInline poster={assetPath('/minibuses.jpg')} aria-hidden="true">
            <source src={assetPath('/mp4.mp4')} type="video/mp4" />
          </video>
          <div className="hero-backdrop" />
          <div className="site-container hero-layout">
            <div className="hero-copy">
              <span className="premium-badge">Soporte premium 24/7</span>
              <h1>Club Astra: Tu respaldo en la ruta</h1>
              <p>
                El club exclusivo diseñado para profesionales del transporte escolar, turismo y traslado de personal.
                Aseguramos que tu negocio nunca se detenga.
              </p>
              <div className="hero-actions">
                <Link href="/membresia" className="btn btn-gold">
                  <Star className="btn-icon" />
                  Unirme al Club
                </Link>
                <a href="#servicios" className="btn btn-outline-light">
                  Conocer Servicios
                </a>
              </div>
              <div className="hero-highlights" aria-label="Beneficios principales">
                {heroHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="hero-highlight">
                      <Icon />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="member-service-card" id="coordina-servicio">
              <div className="member-card-inner">
                <div className="coordination-head">
                  <div className="coordination-brand">
                    <ShieldCheck className="hero-icon" />
                    <span>Club Astra</span>
                  </div>
                  <span className="online-pill">En línea</span>
                </div>
                <div className="coordination-intro">
                  <div>
                    <h2>
                      <span className="title-line-main">Coordina aquí</span>
                      <span>tu servicio</span>
                    </h2>
                    <p>Haz tu solicitud por WhatsApp y nosotros nos encargamos del resto.</p>
                  </div>
                  <div className="phone-visual" aria-hidden="true">
                    <picture>
                      <source srcSet={assetPath('/whatsap_astra_transparent.png')} type="image/png" />
                      <img src={assetPath('/whatsapp-phone.svg')} alt="" />
                    </picture>
                  </div>
                </div>
                <div className="coordination-steps">
                  {coordinationSteps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.title} className="coordination-step">
                        <span className="step-number">{index + 1}</span>
                        <div className="step-icon">
                          <Icon />
                        </div>
                        <div>
                          <h3>{step.title}</h3>
                          <p>{step.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <Link href="/sos" className="whatsapp-service-cta">
                  <span className="whatsapp-mark">
                    <MessageCircle />
                  </span>
                  <span>
                    Escríbenos por WhatsApp
                    <small>Respuestas rápidas 24/7</small>
                  </span>
                  <ArrowRight className="cta-arrow" />
                </Link>
              </div>
              <div className="secure-channel">
                <ClipboardList />
                <span>Canal oficial y seguro de Club Astra</span>
              </div>
            </div>
          </div>
        </section>

        <section id="mision" className="mission-section">
          <div className="site-container mission-grid">
            <div className="mission-image">
              <img src={assetPath('/Nuestra_comunidad.png')} alt="Flota Club Astra" />
              <div className="mission-image-badge">
                <ShieldCheck />
                <span>Respaldo para transportistas</span>
              </div>
              <div className="mission-image-metrics">
                <div>
                  <ShieldCheck />
                  <span>Cobertura</span>
                  <strong>nacional</strong>
                </div>
                <div>
                  <MessageCircle />
                  <span>Atención por</span>
                  <strong>WhatsApp</strong>
                </div>
                <div>
                  <Clock3 />
                  <span>Respuesta</span>
                  <strong>rápida</strong>
                </div>
              </div>
            </div>
            <div className="mission-copy">
              <span className="mission-eyebrow">Nuestra misión</span>
              <h2>Nuestra misión: que nada te detenga</h2>
              <p>
                En Club Astra entendemos que para un transportista profesional, un vehículo detenido es una pérdida
                crítica. Nacimos con la visión de ser el soporte integral que permite a los pequeños y medianos
                transportistas operar con la tranquilidad de una gran flota.
              </p>
              <ul>
                <li>
                  <CheckCircle2 />
                  Mantenimiento técnico de primer nivel.
                </li>
                <li>
                  <CheckCircle2 />
                  Soluciones logísticas ante emergencias.
                </li>
                <li>
                  <CheckCircle2 />
                  Pertenencia a una red de profesionales confiables.
                </li>
              </ul>
              <div className="mission-actions">
                <Link href="/beneficios" className="mission-cta">
                  Conoce nuestros beneficios
                  <ArrowRight />
                </Link>
                <div className="mission-trust">
                  <ShieldCheck />
                  <span>
                    Confianza que impulsa
                    <strong>tu camino.</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="services-section">
          <div className="site-container">
            <div className="section-heading">
              <div className="section-kicker" aria-hidden="true">
                <span />
                <Star />
                <span />
              </div>
              <h2>Servicios Exclusivos</h2>
              <p>Beneficios diseñados específicamente para las necesidades reales del transporte de pasajeros.</p>
            </div>
            <div className="service-bento">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article key={service.title} className={`service-tile ${service.className}`}>
                    <img src={service.image} alt="" aria-hidden="true" />
                    <div className="service-overlay" />
                    <div className="service-content">
                      <span className="service-badge">
                        <Icon />
                        {service.badge}
                      </span>
                      <h3>{service.title}</h3>
                      <span className="service-rule" />
                      <p>{service.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="services-action">
              <Link href="/beneficios" className="services-link">
                Explora todos los beneficios
                <ArrowRight />
              </Link>
            </div>
          </div>
        </section>

        <section id="comunidad" className="community-section">
          <div className="site-container community-grid">
            <div className="community-copy">
              <h2>Nuestra Comunidad</h2>
              <p>
                Pertenecer a Club Astra es más que un servicio; es ser parte de una red de confianza. Compartimos
                experiencias, recursos y la seguridad de que nunca viajarás solo.
              </p>
              <div className="community-metrics">
                <div>
                  <strong>500+</strong>
                  <span>Miembros Activos</span>
                </div>
                <div>
                  <strong>24/7</strong>
                  <span>Disponibilidad</span>
                </div>
              </div>
            </div>
            <div className="community-image">
              <img src={assetPath('/nuestra_mision.png')} alt="Comunidad Club Astra" />
            </div>
          </div>
        </section>

        <section id="faq" className="faq-section">
          <div className="faq-container">
            <h2>Preguntas Frecuentes</h2>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question} className="faq-item">
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="site-container">
            <div className="cta-panel">
              <h2>¿Listo para profesionalizar tu ruta?</h2>
              <p>Únete hoy y asegura la continuidad operativa de tu vehículo con el respaldo de los expertos.</p>
              <div className="cta-actions">
                <Link href="/membresia" className="btn btn-gold">
                  Unirme al Club Ahora
                </Link>
                <Link href="/sos" className="btn btn-outline-light">
                  Hablar con un Asesor
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <div className="site-container footer-grid">
          <div>
            <h3>Club Astra</h3>
            <p>Soluciones Premium para Profesionales del Transporte. Elevando los estándares de seguridad y confianza en la ruta.</p>
          </div>
          <div>
            <h4>Navegación</h4>
            <nav>
              <a href="#inicio">Inicio</a>
              <a href="#servicios">Servicios</a>
              <a href="#comunidad">Comunidad</a>
              <a href="#faq">Soporte 24/7</a>
            </nav>
          </div>
          <div>
            <h4>Síguenos</h4>
            <div className="social-row">
              <a href="#" aria-label="Compartir">
                <Share2 />
              </a>
              <a href="mailto:contacto@clubastra.cl" aria-label="Enviar correo">
                <Mail />
              </a>
            </div>
            <p className="copyright">© 2026 Club Astra. Soluciones Premium para Profesionales del Transporte.</p>
          </div>
        </div>
      </footer>

      <a href="#faq" className="ai-assistant">
        <Bot />
        <span>
          <small>Asistente IA</small>
          Consultar sobre el Club
        </span>
      </a>
    </>
  );
}
