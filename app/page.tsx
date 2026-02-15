export default function Home() {
  return (
    <main className="container">
      <div className="content">
        <h1>Welcome to Next.js 14</h1>
        <p>This is a minimal Next.js application using the App Router.</p>
        <div className="features">
          <h2>Features:</h2>
          <ul>
            <li>✨ Next.js 14 with App Router</li>
            <li>⚡ TypeScript support</li>
            <li>🎨 Basic CSS styling</li>
            <li>📦 Minimal setup</li>
          </ul>
        </div>
        <div className="getting-started">
          <h2>Getting Started:</h2>
          <ol>
            <li>Run <code>npm install</code> to install dependencies</li>
            <li>Run <code>npm run dev</code> to start the development server</li>
            <li>Open <a href="http://localhost:3000">http://localhost:3000</a> in your browser</li>
          </ol>
        </div>
      </div>
    </main>
  )
}
