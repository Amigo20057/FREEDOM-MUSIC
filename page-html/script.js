document.querySelector(".burger").addEventListener("click", function() {
    this.classList.toggle('active');
    document.querySelector(".navigation-header").classList.toggle("open");
})

