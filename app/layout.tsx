import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TongerKhobor — Internal Portal',
  description: 'Internal newsroom workspace for TongerKhobor.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="bn"><body>{children}</body></html>;
}
