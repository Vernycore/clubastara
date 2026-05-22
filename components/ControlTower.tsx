'use client';
import { MapPin, Truck, Radio } from 'lucide-react';

export default function ControlTower() {
  const fleetPositions = [
    { id: 'ASTRA-RELEVO-01', status: 'Disponible', zone: 'Sector Norte KM 45', distance: '12 km' },
    { id: 'ASTRA-RELEVO-02', status: 'En Tránsito', zone: 'Ruta Central KM 120', distance: '34 km' },
    { id: 'ASTRA-RELEVO-03', status: 'Disponible', zone: 'Interconexión Este', distance: '8 km' },
  ];

  return (
    <div className="control-card">
      <div className="control-header">
        <div className="control-header-title">
          <div className="control-badge">
            <Radio />
          </div>
          <h3>Torre de Control Club Astra</h3>
        </div>
        <span className="control-tag">SLA Activo</span>
      </div>

      <p className="control-description">
        Unidades de reemplazo estratégico (Hot-Swap) activas en cuadrantes críticos de ruta.
      </p>

      <div className="control-map">
        <div className="marker marker-a03">
          <Truck />
          <span>A-03</span>
        </div>
        <div className="marker marker-a01">
          <Truck />
          <span>A-01</span>
        </div>
        <div className="marker marker-center">
          <div className="marker-ring" />
          <MapPin />
          <span>Tu Unidad</span>
        </div>
      </div>

      <div className="control-list">
        {fleetPositions.map((unit) => (
          <div key={unit.id} className="control-item">
            <div className="control-item-left">
              <span className={`control-status-dot ${unit.status === 'Disponible' ? 'control-status-available' : 'control-status-transit'}`} />
              <div>
                <div className="control-item-title">{unit.id}</div>
                <div className="control-item-subtitle">{unit.zone}</div>
              </div>
            </div>
            <div className="control-item-right">
              <div className="control-item-distance">{unit.distance}</div>
              <div className="control-item-note">Interceptación</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
