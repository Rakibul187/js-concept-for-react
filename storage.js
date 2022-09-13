const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id')
    const id = idInput.value;
    const inputValue = document.getElementById('storage-value')
    const value = inputValue.value

    if (id && value) {
        localStorage.setItem(id, value)
    }
    else {
        alert('provide valid something')
    }
    idInput.value = '';
    inputValue.value = '';
}