const value = document.querySelector('#range_value');
const input = document.querySelector('#range');
value.textContent = input.value;
input.addEventListener ("input", (event) => {
    value.textContent = event.target.value;

});

document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, 100 * index);
    })
})