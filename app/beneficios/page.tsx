'use client';

import { useState } from 'react';

const tabs = [
  { id: 'mano', label: 'Mano de obra incluida' },
  { id: 'vehiculo', label: 'Vehículo de reemplazo' },
];

const content = {
  mano: {
    title: 'Mano de obra incluida',
    description: 'Mantenciones básicas con mano de obra en talleres asociados. El socio aporta repuestos y materiales.',
    details: [
      'Frenos, cambios de aceite y filtros',
      'Mantenciones preventivas y correctivas menores',
      'Ajustes mecánicos sencillos',
      'Atención prioritaria en talleres aliados',
    ],
  },
  vehiculo: {
    title: 'Vehículo de reemplazo',
    description: 'Respaldo ante eventos operativos, sujeto a disponibilidad y coordinación previa por WhatsApp.',
    details: [
      'Hasta 18 días al año',
      'Máximo 6 eventos',
      'Hasta 3 días por evento',
      'Coordinación técnica antes del servicio',
    ],
  },
};

export default function BeneficiosPage() {
  const [activeTab, setActiveTab] = useState('mano');
  const currentContent = content[activeTab];

  return (
    <div className="page-content">
      <section className="hero-panel hero-landing">
        <div className="hero-copy">
          {/*<span className="hero-label">Servicios</span>*/}
          <h1 className="hero-title">Coberturas reales para tu flota sin falsas promesas.</h1>
          <p>Descubre cómo nuestro plan mensual se transforma en asistencia operativa y talleres de confianza.</p>
        </div>
      </section>

      <section className="section-panel">
        <div className="section-heading">
          <h2>Qué incluye</h2>
          <p>Selecciona una categoría y revisa cómo opera el respaldo ASTRA.</p>
        </div>
        <div className="tab-navigation">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`tab-button${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tab-panel">
          <h3>{currentContent.title}</h3>
          <p>{currentContent.description}</p>
          <ul>
            {currentContent.details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="comunidad" className="section-panel">
        <div className="section-heading">
          <h2>Comunidad y talleres aliados</h2>
          <p>La red ASTRA reúne servicios confiables en Santiago para que tu operación se mantenga siempre en movimiento.</p>
        </div>
        <div className="list-feature">
          <div className="feature-item">
            <strong>Red colaborativa</strong>
            <p>Alianzas con talleres locales que priorizan tus solicitudes.</p>
          </div>
          <div className="feature-item">
            <strong>Comunicación directa</strong>
            <p>Coordinación rápida por WhatsApp para cada solicitud de asistencia.</p>
          </div>
          <div className="feature-item">
            <strong>Seguimiento operativo</strong>
            <p>Respuestas claras para evitar downtime y mejorar tu flujo diario.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
