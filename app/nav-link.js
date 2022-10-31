'use client'; //turn it to client component

import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

export default function NavLink({ href, children }) {
  let segment = useSelectedLayoutSegments(); //client component hook
  console.log({ href, segment });
  let active = href === `/${segment}`;
  console.log({ href, active });
  return (
    <Link className={active ? 'underline' : ''} href={href}>
      {children}
    </Link>
  );
}
