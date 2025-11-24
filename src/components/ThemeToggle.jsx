import { Sun, Moon } from "lucide-react";
import useDarkMode from "../hooks/useDarkMode";

export default function ThemeToggle() {
    const [isDarkMode, toggleDarkMode] = useDarkMode();

    return (
        <button
            type="button"
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
            className="fixed top-5 right-5 z-50 grid h-10 w-10 place-items-center
                 rounded-full cursor-pointer
                 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md
                 border border-gray-300 dark:border-gray-700
                 shadow-md hover:shadow-lg active:scale-95
                 transition-all duration-200 ease-in-out
                 text-gray-800 dark:text-gray-200"
        >
            <div className="relative h-5 w-5">
                <Sun
                    className={`absolute inset-0 m-auto transition-all duration-300 ease-in-out
            ${!isDarkMode ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}
                />
                <Moon
                    className={`absolute inset-0 m-auto transition-all duration-300 ease-in-out
            ${isDarkMode ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"}`}
                />
            </div>
        </button>
    );
}