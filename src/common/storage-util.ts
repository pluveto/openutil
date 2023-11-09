export function loadStorage<T>(key): T | undefined {
    const value = localStorage.getItem(key);
    if (!value) {
        return undefined;
    }

    try {
        return JSON.parse(value);
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

export function saveStorage<T>(key, value: T): boolean {
    try {
        const serialized = JSON.stringify(value);
        localStorage.setItem(key, serialized);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
