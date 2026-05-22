'use client';

import { useState } from 'react';
import { MessageCircle, AlertTriangle } from 'lucide-react';

const whatsappMessage = encodeURIComponent(
  'Necesito asistencia técnica en terreno. Coordinar servicio Club ASTRA en Región Metropolitana.'
);
const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`;

export default function SosPage() {
  const [status, setStatus] = useState('Listo para activar asistencia');
  const [loading, setLoading] = useState(false);

  const handlePanic = () => {
    setLoading(true);
    setStatus('Buscando cobertura en la Región Metropolitana...');
    window.setTimeout(() => {
      setLoading(false);
      setStatus('Cobertura encontrada. Coordinación directa por WhatsApp disponible.');
    }, 1800);
  };

  return (
    <div className="page-content">
      <section className="hero-panel hero-strong">
        <div className="hero-copy">
          <span className="hero-label">Emergencia en ruta</span>
          <h1 className="hero-title">Botón de Pánico S.O.S.</h1>
          <p>Activa asistencia técnica prioritaria y coordina el envío inmediato de tu apoyo en el área metropolitana.</p>
        </div>
      </section>

      <section className="card-panel">
        <div className="section-panel sos-panel">
          <div className="hero-card-head">
            <AlertTriangle className="hero-icon accent" />
            <div>
              <span className="status-pill">Módulo prioritario</span>
              <p className="hero-card-subtitle">Asistencia inmediata para fallas en terreno.</p>
            </div>
          </div>

          <div className="sos-grid">
            <div className="sos-details">
              <h2>Activo y listo</h2>
              <p>Presiona el botón para solicitar el apoyo técnico que tu unidad necesita. Recibe coordinación directa vía WhatsApp.</p>
              <div className="feature-item">
                <strong>Tiempo de respuesta</strong>
                <p>Rápido, directo y enfocado en mantener tu operación en movimiento.</p>
              </div>
            </div>

            <div className="sos-card">
              <button type="button" className="btn btn-whatsapp sos-action" onClick={handlePanic}>
                <MessageCircle className="icon-left" />
                {loading ? 'Buscando cobertura...' : 'Activar S.O.S'}
              </button>
              <div className="whatsapp-card">
                <p><strong>Contacto por WhatsApp</strong></p>
                <p>Mensaje preconfigurado para tu auxilio técnico en la Región Metropolitana.</p>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="http-link">
                  <MessageCircle /> Enviar mensaje ahora
                </a>
              </div>
            </div>
          </div>

          <div className="feature-row">
            <div className="feature-item">
              <strong>Estado</strong>
              <p>{status}</p>
            </div>
            <div className="feature-item">
              <strong>Cobertura</strong>
              <p>Región Metropolitana con técnica y logística prioritaria.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
