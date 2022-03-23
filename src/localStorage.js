export function getLocalStorage(todos) {
    const saved = localStorage.getItem(todos);
    return saved && saved.length > 0 ? JSON.parse(saved): [];

}

export function setLocalStorage(todoName, todos) {
    return localStorage.setItem(todoName, JSON.stringify(todos));
}