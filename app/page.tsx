export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 font-sans dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900 dark:to-violet-900">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center gap-16 py-16 px-8 sm:px-16">
        {/* Hero Section */}
        <section className="flex flex-col items-center gap-8 text-center">
          {/* Animated Icon */}
          <div className="relative">
            <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 opacity-75 blur-xl"></div>
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 shadow-2xl">
              <span className="text-6xl">🎮</span>
            </div>
          </div>

          {/* Title with Gradient */}
          <div className="space-y-4">
            <h1 className="text-6xl font-black tracking-tight sm:text-7xl md:text-8xl">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent dark:from-purple-400 dark:via-pink-400 dark:to-blue-400">
                Hacking on Poke
              </span>
            </h1>
            <div className="h-1 w-48 mx-auto rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"></div>
          </div>

          {/* Subtitle */}
          <p className="max-w-2xl text-xl leading-relaxed text-gray-700 dark:text-gray-300 sm:text-2xl">
            Building something awesome, one line of code at a time.
            <br />
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              Let&apos;s create magic together! ✨
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Get Started
            </button>
            <button className="px-8 py-4 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-2 border-purple-200 dark:border-purple-700">
              Learn More
            </button>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
          <div className="group rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-purple-100 dark:border-purple-900">
            <div className="mb-4 text-4xl">🚀</div>
            <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">
              Fast Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Rapid prototyping and iteration with modern tools and frameworks.
            </p>
          </div>

          <div className="group rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-pink-100 dark:border-pink-900">
            <div className="mb-4 text-4xl">💡</div>
            <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">
              Creative Solutions
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Innovative approaches to solve complex problems with elegance.
            </p>
          </div>

          <div className="group rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-blue-100 dark:border-blue-900">
            <div className="mb-4 text-4xl">🎨</div>
            <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">
              Beautiful Design
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Crafting pixel-perfect interfaces that users love to interact with.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 p-8 text-white shadow-2xl">
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-purple-100">Projects Built</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-purple-100">Always Coding</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">∞</div>
              <div className="text-purple-100">Possibilities</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Made with <span className="text-red-500 animate-pulse">❤️</span> by hackers, for hackers
          </p>
        </footer>
      </main>
    </div>
  );
}
