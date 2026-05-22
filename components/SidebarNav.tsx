'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

const navigation = [
  { href: '/#inicio', label: 'Inicio' },
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#comunidad', label: 'Comunidad' },
  { href: '/#faq', label: 'Contacto' },
  { href: '/sos', label: 'Soy Miembro (Activar)' },
];

export default function SidebarNav() {
  return (
    <header className="top-nav">
      <div className="top-nav-inner">
        <Link href="/#inicio" className="brand-link" aria-label="Club Astra inicio">
          <Image src="/logo.avif" alt="Club Astra" width={58} height={58} priority />
        </Link>

        <nav className="menu-list-top" aria-label="Navegación principal">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="menu-item">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="top-actions">
          <Link href="/membresia" className="nav-join">
            Unirme al Club
          </Link>
          <Link href="/sos" className="nav-service">
            <MessageCircle />
            <span>¿Ya eres miembro? Coordina acá tu servicio</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
