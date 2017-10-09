
export function loadStorageItem(itemKey) {
    try {
        const item = localStorage.getItem(itemKey);

        return item ? JSON.parse(item) : item;
    } catch (err) {
        return null;
    }
}

export function saveItemToStorage(itemKey, item) {
    try {
        const serializedItem = JSON.stringify(item);
        localStorage.setItem(itemKey, serializedItem);
    } catch (err) {
        console.error(err);
    }
}