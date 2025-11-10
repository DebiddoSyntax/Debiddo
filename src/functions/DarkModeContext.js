"use client";
import React, { createContext, useContext, useEffect, useState } from "react";


const DarkModeContext = createContext(undefined);

// Helper: get initial theme
const getInitialTheme = () => {
	if (typeof window === "undefined") return false; // SSR safe
	const savedTheme = localStorage.getItem("theme");
	if (savedTheme === "dark") return true;
	if (savedTheme === "light") return false;
	return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export const DarkModeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

	// Apply theme class whenever it changes
	useEffect(() => {
		document.documentElement.classList.toggle("dark", isDarkMode);
		localStorage.setItem("theme", isDarkMode ? "dark" : "light");
	}, [isDarkMode]);

	const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

	return (
		<DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};



export const useDarkMode = () => {
	const context = useContext(DarkModeContext);
	if (!context) throw new Error("useDarkMode must be used inside a DarkModeProvider");
	return context;
};
