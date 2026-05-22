import './globals.css';
import SidebarNav from '../components/SidebarNav';

export const metadata = {
  title: 'Club ASTRA | Plataforma de Asistencia',
  description: 'Dashboard ejecutivo y módulos de emergencia, membresía y beneficios para Club ASTRA.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="app-shell">
        <SidebarNav />
        <main className="main-view">{children}</main>
      </body>
    </html>
  );
}