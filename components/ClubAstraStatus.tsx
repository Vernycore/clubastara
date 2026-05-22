'use client';

import { useEffect, useState } from 'react';
import { Globe2, Link2, RefreshCw } from 'lucide-react';

type RemoteStatus = {
  clubAstraUrl: string;
  status: string;
  statusCode: number | null;
  title: string;
};

export default function ClubAstraStatus() {
  const [status, setStatus] = useState<RemoteStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStatus = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/clubastra');
      const data = await response.json();

      if (!response.ok) {
        setError('No se pudo conectar al proxy de Club Astra.');
      }

      setStatus(data);
    } catch (err) {
      setError('Error al obtener el estado de ClubAstra.cl.');
      setStatus(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  return (
    <div className="status-card">
      <div className="status-card-header">
        <div>
          <p className="status-card-label">Enlace oficial</p>
          <h2 className="status-card-title">Estado de clubastra.cl</h2>
        </div>
        <button
          onClick={fetchStatus}
          disabled={loading}
          className="status-card-refresh"
        >
          <RefreshCw className="status-card-refresh-icon" />
          {loading ? 'Actualizando' : 'Refrescar'}
        </button>
      </div>

      <div className="status-card-tip">
        <Globe2 className="status-card-tip-icon" />
        <span>Conexión proxy al sitio oficial para validación de disponibilidad.</span>
      </div>

      {error ? (
        <div className="status-card-error">{error}</div>
      ) : status ? (
        <div className="status-card-body">
          <div className="status-card-row">
            <span className="status-card-label">Estado</span>
            <span className={`status-pill ${status.status === 'Conectado' ? 'status-pill-online' : 'status-pill-offline'}`}>
              {status.status}
            </span>
          </div>

          <div className="status-card-grid">
            <div className="status-card-detail">
              <p className="status-card-detail-label">Código HTTP</p>
              <p className="status-card-detail-value">{status.statusCode ?? '—'}</p>
            </div>
            <div className="status-card-detail">
              <p className="status-card-detail-label">Título remoto</p>
              <p className="status-card-detail-value">{status.title}</p>
            </div>
          </div>

          <a
            href={status.clubAstraUrl}
            target="_blank"
            rel="noreferrer"
            className="status-link-button"
          >
            <Link2 className="status-link-icon" /> Abrir clubastra.cl
          </a>
        </div>
      ) : (
        <div className="status-card-loading">Cargando estado de conexión...</div>
      )}
    </div>
  );
}
