import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Umar Faraz — .NET Full Stack Developer', description: 'Umar Faraz: .NET full stack developer building enterprise applications across government, healthcare, fintech, e-commerce, CRM, and agentic AI.' };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
