export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 font-sans dark:from-gray-900 dark:via-purple-900 dark:to-gray-900">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-16 py-16 px-8 sm:px-16">
        {/* Hero Section */}
        <section className="flex flex-col items-center gap-8 text-center">
          {/* Animated Icon */}
          <div className="relative">
            <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 blur-xl opacity-75"></div>
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 shadow-2xl">
              <span className="text-6xl">🎮</span>
            </div>
          </div>
          
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent dark:from-purple-400 dark:via-pink-400 dark:to-blue-400">
                Hacking on Poke
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="max-w-2xl text-xl sm:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 font-medium">
              Building something awesome, one commit at a time ⚡
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
              Get Started
            </button>
            <button className="px-8 py-4 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 border-2 border-gray-200 dark:border-gray-700">
              Learn More
            </button>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full mt-8">
          <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-bl-full opacity-20"></div>
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Fast Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Rapid prototyping and iteration with modern tools and frameworks.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-400 to-blue-400 rounded-bl-full opacity-20"></div>
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Beautiful Design
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Crafting delightful user experiences with attention to detail.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-bl-full opacity-20"></div>
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Creative Solutions
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Innovative approaches to solve complex problems efficiently.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
          <div className="text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur">
            <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-pink-400">
              100+
            </div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2 font-medium">
              Commits
            </div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur">
            <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent dark:from-pink-400 dark:to-blue-400">
              50+
            </div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2 font-medium">
              Features
            </div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur">
            <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
              24/7
            </div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2 font-medium">
              Building
            </div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur">
            <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-400">
              ∞
            </div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2 font-medium">
              Ideas
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p className="font-medium">Made with 💜 and lots of coffee ☕</p>
        </footer>
      </main>
    </div>
  );
}
