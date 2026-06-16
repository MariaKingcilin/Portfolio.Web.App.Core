export function Footer() {
  return (
    <footer className="py-8 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>
          &copy; {new Date().getFullYear()} | Designed and coded with <span className="text-red-500">❤️</span> by Sagar
        </p>
      </div>
    </footer>
  );
}
