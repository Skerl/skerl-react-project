import { useState, useEffect } from "react";

export default function useLocalStorage(key, defData) {
    const [state, setState] = useState(() => {
        const localData = localStorage.getItem(key);
        return localData ? JSON.parse(localData) : defData;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}
