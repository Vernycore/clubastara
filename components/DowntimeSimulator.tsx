'use client';
import { useState } from 'react';
import { TrendingDown, ShieldCheck, Download } from 'lucide-react';

export default function DowntimeSimulator() {
  const [fleteValue, setFleteValue] = useState(500000);
  const [daysInactive, setDaysInactive] = useState(5);

  const totalLoss = fleteValue * daysInactive;
  const membershipCost = 40000;
  const netSavings = totalLoss - membershipCost;

  const formatCLP = (value: number) =>
    value.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 });

  return (
    <div className="simulator-card">
      <div className="simulator-header">
        <div className="simulator-tag">
          <TrendingDown />
        </div>
        <h3 className="simulator-title">Simulador de Lucro Cesante</h3>
      </div>

      <p className="simulator-description">
        Calcula el impacto financiero real cuando tus unidades se detienen por imprevistos mecánicos.
      </p>

      <div className="simulator-inputs">
        <div className="simulator-input-group">
          <div className="simulator-input-labels">
            <span>Valor por día</span>
            <strong>{formatCLP(fleteValue)}</strong>
          </div>
          <input
            type="range"
            min="100000"
            max="2000000"
            step="50000"
            value={fleteValue}
            onChange={(e) => setFleteValue(Number(e.target.value))}
            className="simulator-slider"
          />
        </div>

        <div className="simulator-input-group">
          <div className="simulator-input-labels">
            <span>Días de inactividad anual</span>
            <strong>{daysInactive} días</strong>
          </div>
          <input
            type="range"
            min="1"
            max="30"
            value={daysInactive}
            onChange={(e) => setDaysInactive(Number(e.target.value))}
            className="simulator-slider"
          />
        </div>
      </div>

      <div className="simulator-summary">
        <div className="simulator-summary-row">
          <span>Pérdida operativa actual:</span>
          <strong>{formatCLP(totalLoss)}</strong>
        </div>
        <div className="simulator-summary-row">
          <span>Membresía Club Astra:</span>
          <strong>{formatCLP(membershipCost)}/año</strong>
        </div>
      </div>

      {netSavings > 0 ? (
        <div className="simulator-result">
          <ShieldCheck className="simulator-result-icon" />
          <p>
            <strong>Retorno Asegurado:</strong> Con Club Astra proteges tus contratos evitando perder <strong>{formatCLP(netSavings)}</strong> anuales.
          </p>
        </div>
      ) : null}

      <button className="simulator-button">
        <Download className="simulator-button-icon" /> Obtener Certificación de Continuidad
      </button>
    </div>
  );
}
