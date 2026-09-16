import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const internal = ['/', '/newscard', '/profile', '/team', '/admin', '/api/generate-caption'];
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  if (path === '/favicon.ico' || path.startsWith('/_next/') || path.startsWith('/api/generate-caption')) return NextResponse.next();
  if (internal.some(route => route === path)) return NextResponse.next();
  const url = request.nextUrl.clone(); url.pathname = '/'; return NextResponse.redirect(url);
}
export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] };
