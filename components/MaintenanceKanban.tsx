'use client';
import { Calendar, CheckCircle2, AlertTriangle, AlertCircle } from 'lucide-react';

export default function MaintenanceKanban() {
  const mockVehicles = [
    { plate: 'ASTRA-90', model: 'Scania R450', health: 'excellent', nextCheck: '15,000 km', statusText: 'Flota Asegurada' },
    { plate: 'CLUB-12', model: 'Volvo FH16', health: 'warning', nextCheck: 'En 12 días', statusText: 'Preventivo Pendiente' },
    { plate: 'ASTR-55', model: 'Mercedes Actros', health: 'critical', nextCheck: 'Inmediato', statusText: 'Alerta Sistema Inyección' },
  ];

  return (
    <div className="maintenance-card">
      <div className="maintenance-header">
        <div className="maintenance-icon-box">
          <Calendar />
        </div>
        <h3>Escudo Predictivo Club Astra</h3>
      </div>
      <p className="maintenance-description">
        Seguimiento técnico y cronológico de las patentes adscritas al plan de continuidad operativa.
      </p>

      <div className="maintenance-list">
        {mockVehicles.map((vehicle) => (
          <div key={vehicle.plate} className="vehicle-row">
            <div className="vehicle-main">
              {vehicle.health === 'excellent' && <CheckCircle2 className="vehicle-icon vehicle-icon-success" />}
              {vehicle.health === 'warning' && <AlertTriangle className="vehicle-icon vehicle-icon-warning" />}
              {vehicle.health === 'critical' && <AlertCircle className="vehicle-icon vehicle-icon-critical" />}
              <div>
                <span className="vehicle-plate">{vehicle.plate}</span>
                <span className="vehicle-model">{vehicle.model}</span>
                <span className="vehicle-status-text">{vehicle.statusText}</span>
              </div>
            </div>

            <div className="vehicle-actions">
              <div className="vehicle-plan">
                <span>Planificación</span>
                <strong>{vehicle.nextCheck}</strong>
              </div>
              {vehicle.health === 'warning' && <button className="vehicle-button warning">Agendar Taller</button>}
              {vehicle.health === 'critical' && <button className="vehicle-button critical">Despachar Relevo</button>}
              {vehicle.health === 'excellent' && <span className="vehicle-tag">Monitoreado</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
