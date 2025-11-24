import {useCallback, useEffect, useState} from "react";

const STORAGE_KEY = "theme" ;

const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export default function useDarkMode() {
    const [isDarkMode, setDarkMode] = useState(()=>{
        const savedTheme = localStorage.getItem(STORAGE_KEY);
        if (savedTheme) {
            return savedTheme==='dark';
        }
        return getSystemTheme()==='dark';
    });

    const toggleDarkMode = useCallback(()=>{
        setDarkMode((prev)=>{
            const newMode = !prev;
            const root = document.documentElement;
            if(newMode){
                root.classList.add("dark");
                localStorage.setItem("theme", 'dark');
            }else{
                root.classList.remove("dark");
                localStorage.setItem("theme", 'light');
            }
            return newMode;
        });

    },[]);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);

    useEffect(() => {
        const media = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = () => {
            if (!localStorage.getItem(STORAGE_KEY)) {
                setDarkMode(getSystemTheme()==='dark');
            }
        };
        media.addEventListener("change", handleChange);
        return () => media.removeEventListener("change", handleChange);
    }, []);
    return [isDarkMode, toggleDarkMode];
}