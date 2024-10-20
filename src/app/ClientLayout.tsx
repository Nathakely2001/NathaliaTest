// src/app/ClientLayout.tsx
'use client';

import {ReactNode, useState} from 'react';


export default function ClientLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <main className={`font-gilroy`}>
        {children}
      </main>
    </>
  );
}