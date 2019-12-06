function change() {
    const id = document.getElementById('client');
    const main = document.querySelector('main');

    if(id.value.trim().length <= 0) {
        main.classList.replace('enabled', 'disabled');
    } else {
        main.classList.replace('disabled', 'enabled');
    }
};