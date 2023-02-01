document.querySelector('.burger').addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.toggle('burger_active')
});
