import { NextResponse } from 'next/server';

const CLUB_ASTRA_URL = 'https://clubastra.cl/';

async function fetchClubAstraStatus() {
  const headers = {
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
  };

  try {
    const response = await fetch(CLUB_ASTRA_URL, {
      headers,
      cache: 'no-store',
    });

    const html = await response.text();
    const titleMatch = html.match(/<title>(.*?)<\/title>/i);
    const title = titleMatch?.[1]?.trim() ?? (response.ok ? 'Sitio activo' : 'No disponible');

    return {
      clubAstraUrl: CLUB_ASTRA_URL,
      status: response.ok ? 'Conectado' : 'Error de conexión',
      statusCode: response.status,
      title,
      ok: response.ok,
    };
  } catch (error) {
    return {
      clubAstraUrl: CLUB_ASTRA_URL,
      status: 'Error de conexión',
      statusCode: null,
      title: 'No disponible',
      ok: false,
    };
  }
}

export async function GET() {
  const data = await fetchClubAstraStatus();
  return NextResponse.json(data, {
    status: data.ok ? 200 : 502,
  });
}
