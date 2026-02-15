import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="text-center space-y-6 max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="relative">
          <h1 className="text-9xl font-bold text-gray-200 dark:text-gray-700 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl">🔍</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mt-8">
          Page Not Found
        </h2>

        {/* Message */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        {/* Link Back to Home */}
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Additional Help Text */}
        <p className="text-sm text-gray-500 dark:text-gray-500 pt-8">
          If you believe this is an error, please contact support.
        </p>
      </div>
    </div>
  );
}
