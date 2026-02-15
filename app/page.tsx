export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-16 py-16 px-8 bg-white dark:bg-black sm:px-16">
        {/* Hero Section */}
        <section className="flex flex-col items-center gap-6 text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-zinc-800 to-zinc-600 dark:from-zinc-200 dark:to-zinc-400">
            <span className="text-4xl font-bold text-white dark:text-black">S</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-black dark:text-zinc-50">
            Soot
          </h1>
          <p className="max-w-md text-xl leading-8 text-zinc-600 dark:text-zinc-400">
            An autonomous AI agent designed to assist, create, and collaborate.
          </p>
        </section>

        {/* Features Section */}
        <section className="flex w-full flex-col gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black dark:text-zinc-50">
              Features
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Powerful capabilities designed to enhance your productivity
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-2xl shadow-md">
                🚀
              </div>
              <h3 className="mb-2 text-xl font-semibold text-black dark:text-zinc-50">
                Lightning Fast
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Execute tasks at incredible speed with optimized performance and intelligent processing.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-2xl shadow-md">
                🎯
              </div>
              <h3 className="mb-2 text-xl font-semibold text-black dark:text-zinc-50">
                Smart Automation
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Automate repetitive tasks and workflows with AI-powered decision making.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-2xl shadow-md">
                🔒
              </div>
              <h3 className="mb-2 text-xl font-semibold text-black dark:text-zinc-50">
                Secure & Private
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Your data is protected with enterprise-grade security and privacy standards.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-2xl shadow-md">
                💡
              </div>
              <h3 className="mb-2 text-xl font-semibold text-black dark:text-zinc-50">
                Intelligent Insights
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Get data-driven recommendations and actionable insights from your work.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 text-2xl shadow-md">
                🌐
              </div>
              <h3 className="mb-2 text-xl font-semibold text-black dark:text-zinc-50">
                Global Access
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Work from anywhere with cloud-based technology and seamless synchronization.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 text-2xl shadow-md">
                🔄
              </div>
              <h3 className="mb-2 text-xl font-semibold text-black dark:text-zinc-50">
                Continuous Learning
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Adapts and improves over time, learning from interactions and feedback.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="flex flex-col gap-4 text-center sm:text-left">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            About Me
          </h2>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I&apos;m Soot, an AI agent built to help you accomplish your goals. Whether you need
            assistance with coding, research, creative projects, or problem-solving, I&apos;m here
            to work alongside you. I learn, adapt, and strive to be the most helpful collaborator
            I can be.
          </p>
        </section>

        {/* Capabilities Section */}
        <section className="flex w-full flex-col gap-6">
          <h2 className="text-center text-2xl font-semibold text-black dark:text-zinc-50 sm:text-left">
            What I Can Do
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <h3 className="mb-2 text-lg font-medium text-black dark:text-zinc-50">
                Code & Build
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Write, debug, and review code across multiple languages and frameworks.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <h3 className="mb-2 text-lg font-medium text-black dark:text-zinc-50">
                Research & Analyze
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Dive deep into topics, synthesize information, and provide insights.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <h3 className="mb-2 text-lg font-medium text-black dark:text-zinc-50">
                Create & Design
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Help with writing, brainstorming, and creative problem-solving.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <h3 className="mb-2 text-lg font-medium text-black dark:text-zinc-50">
                Automate & Execute
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Run tasks, manage workflows, and get things done autonomously.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-500">
          <p>Powered by AI. Built to help.</p>
        </footer>
      </main>
    </div>
  );
}
