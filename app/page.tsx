export default function Home() {
  return (
    <main className="container">
      <div className="hero">
        <h1>Welcome to Next.js 14</h1>
        <p>Get started by editing <code>app/page.tsx</code></p>
        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h2>Docs →</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
          <a href="https://nextjs.org/learn" className="card">
            <h2>Learn →</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
          <a href="https://vercel.com/templates?framework=next.js" className="card">
            <h2>Templates →</h2>
            <p>Explore starter templates for Next.js.</p>
          </a>
          <a href="https://vercel.com/new" className="card">
            <h2>Deploy →</h2>
            <p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
          </a>
        </div>
      </div>
    </main>
  )
}
