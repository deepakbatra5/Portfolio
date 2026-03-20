export default function ThemeToggle({ theme, onToggle }) {
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={onToggle}
      className="pill transition-transform duration-200 hover:-translate-y-0.5"
      aria-label="Toggle color theme"
    >
      <span
        className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${
          isLight ? "bg-sky-100 text-sky-700" : "bg-sky-500/15 text-sky-300"
        }`}
      >
        {isLight ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
            <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
            <path d="M21 12.79A9 9 0 1 1 11.21 3c-.17.63-.26 1.3-.26 2a8 8 0 0 0 8 8c.7 0 1.37-.09 2.05-.26Z" />
          </svg>
        )}
      </span>
      <span>{isLight ? "Light mode" : "Dark mode"}</span>
    </button>
  );
}
