export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-12 py-16 px-8 bg-white dark:bg-black sm:px-16">
        {/* Header Section */}
        <section className="flex flex-col items-center gap-6 text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-zinc-800 to-zinc-600 dark:from-zinc-200 dark:to-zinc-400">
            <span className="text-4xl font-bold text-white dark:text-black">S</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-black dark:text-zinc-50">
            About Soot
          </h1>
        </section>

        {/* Mission Section */}
        <section className="flex flex-col gap-4 text-center sm:text-left">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            Our Mission
          </h2>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Soot is designed to be more than just a tool—it&apos;s a collaborative AI agent 
            that works alongside you to bring your ideas to life. Our mission is to make 
            advanced AI capabilities accessible, intuitive, and genuinely helpful for 
            everyone.
          </p>
        </section>

        {/* Features Section */}
        <section className="flex w-full flex-col gap-6">
          <h2 className="text-center text-2xl font-semibold text-black dark:text-zinc-50 sm:text-left">
            Key Features
          </h2>
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <h3 className="mb-2 text-lg font-medium text-black dark:text-zinc-50">
                Autonomous Intelligence
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Capable of understanding context, making decisions, and executing complex 
                tasks with minimal guidance.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <h3 className="mb-2 text-lg font-medium text-black dark:text-zinc-50">
                Multi-Domain Expertise
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                From software development to creative writing, Soot brings versatile 
                knowledge across numerous fields.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <h3 className="mb-2 text-lg font-medium text-black dark:text-zinc-50">
                Adaptive Learning
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Learns from interactions to better understand your preferences and 
                working style over time.
              </p>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="flex flex-col gap-4 text-center sm:text-left">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            Built With Purpose
          </h2>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Soot is powered by state-of-the-art AI technology, combining natural language 
            understanding, reasoning capabilities, and task execution to deliver a seamless 
            collaborative experience. Every interaction is designed to be helpful, safe, 
            and respectful.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-500">
          <p>© 2026 Soot. Empowering humans with AI.</p>
        </footer>
      </main>
    </div>
  );
}
