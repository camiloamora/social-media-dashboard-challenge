const checkbox = document.querySelector('#checkbox');
if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
    checkbox.setAttribute('checked', true);
}


checkbox.addEventListener('change', function(event) {
    if(this.checked) {
        document.body.classList.add('isDarkMode');
        document.body.classList.remove('isLightMode');
    } else {
        document.body.classList.remove('isDarkMode');
        document.body.classList.add('isLightMode');
    }
})