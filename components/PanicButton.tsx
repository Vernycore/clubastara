'use client';
import { useState } from 'react';
import { AlertOctagon, CheckCircle, ShieldAlert } from 'lucide-react';

export default function PanicButton() {
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEmergency = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsActive(true);
    }, 2000);
  };

  return (
    <div className="panic-card">
      {!isActive ? (
        <>
          <div className="panic-icon-wrapper">
            <ShieldAlert className="panic-icon" />
          </div>
          <h3 className="panic-title">Botón S.O.S de Emergencia</h3>
          <p className="panic-description">
            Presiónalo ante detenciones forzadas. Geolocaliza tu posición y activa la cobertura de Club Astra inmediatamente.
          </p>

          <button
            onClick={handleEmergency}
            disabled={loading}
            className={`panic-action ${loading ? 'panic-action-disabled' : ''}`}
          >
            <AlertOctagon className="panic-action-icon" />
            <span>{loading ? 'Buscando...' : 'ACTIVAR'}</span>
          </button>
        </>
      ) : (
        <div className="panic-state">
          <div className="panic-success-icon">
            <CheckCircle className="panic-success-check" />
          </div>
          <h3 className="panic-state-title">Respuesta en Curso</h3>
          <div className="panic-state-box">
            <p className="panic-state-line">✓ Coordenadas satelitales recibidas.</p>
            <p className="panic-state-line">✓ Grúa de asistencia en camino.</p>
            <p className="panic-state-line">✓ Camión de reemplazo Hot-Swap asignado.</p>
          </div>
          <button
            onClick={() => setIsActive(false)}
            className="panic-reset"
          >
            Simular nueva alerta
          </button>
        </div>
      )}
    </div>
  );
}
