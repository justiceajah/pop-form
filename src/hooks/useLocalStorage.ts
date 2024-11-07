import { useEffect, useState } from 'react';

function useLocalStorage<T>(key: string, initialValue?: T) {

    const [storedValue, setStoredValue] = useState<T | undefined>(
        initialValue);


    useEffect(() => {
        try {
            const item = window?.localStorage.getItem(key);
            setStoredValue(item ? JSON.parse(item) as T : initialValue);
        } catch (error) {
            console.error("Error reading localStorage key", key, error);
        }
    }, [key, initialValue]);

    const setValue = (value: T | ((val: T) => T | undefined) | undefined) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue as T) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error("Error setting localStorage key", key, error);
        }
    };

    return [storedValue, setValue] as const;
}

export default useLocalStorage;
