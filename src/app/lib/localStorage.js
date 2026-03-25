export const saveAddressesToLocalStorage = (key, data) => {
    if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(data));
    }
}