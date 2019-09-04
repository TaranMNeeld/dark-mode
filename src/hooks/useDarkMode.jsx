import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {

    const body = document.querySelector("body");

    const [storedValue, setStoredValue] = useLocalStorage("mode");

    useEffect(() => {
        if (storedValue === true) {
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
        }
    }, [storedValue]);

    return [storedValue, setStoredValue];
}