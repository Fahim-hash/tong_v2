import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = { title: 'টং-এর খবর — TongerKhobor', description: 'Spreading tea from a tong to the world.' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="bn"><body><header className="site-header"><div className="wrap nav"><Link href="/" className="logo">টং-এর খবর</Link><nav><Link href="/">হোম</Link><Link href="/trending">ট্রেন্ডিং</Link><Link href="/team">টিম</Link><Link href="/about">আমাদের কথা</Link><Link href="/login">লগইন</Link></nav></div></header><main>{children}</main><footer><div className="wrap">© {new Date().getFullYear()} টং-এর খবর · Spreading tea from a tong to the world.</div></footer></body></html>;
}
