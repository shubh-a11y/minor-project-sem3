import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { Button } from "./button";

export const ThemeToggleButton = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={toggleTheme}
			className="rounded-full transition-all hover:scale-110 border-2 hover:border-orange-400 dark:hover:border-orange-500"
			aria-label="Toggle theme"
		>
			{theme === "light" ? (
				<Moon className="h-5 w-5 text-gray-700 hover:text-orange-500 transition-colors" />
			) : (
				<Sun className="h-5 w-5 text-yellow-400 hover:text-yellow-300 transition-colors" />
			)}
		</Button>
	);
};
