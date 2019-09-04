import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    
    //Item is set to the desired key/value pair that was previously stored.
    const storedItem = JSON.parse(localStorage.getItem(key));
    
    //Set storedValue equal to storedItem, if it exists within localStorage
    //If storedItem does not already exist, then set storedValue equal to initialValue.
    const [storedValue, setStoredValue] = useState(storedItem || initialValue);

    const setValue = value => {
        window.localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
    };

    return [storedValue, setValue];
}