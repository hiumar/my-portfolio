'use client';
export default function ErrorPage({reset}:{reset:()=>void}){return <main style={{padding:'80px 24px',maxWidth:700}}><h1>Temporarily unavailable</h1><p>The portfolio could not load right now. Please try again in a moment.</p><button className="button primary" onClick={reset}>Try again</button></main>;}
