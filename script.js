const tombolBeli = document.querySelectorAll(".btn-beli");

tombolBeli.forEach(function(tombol) {
    tombol.addEventListener("click", function() {
        const namaProduk = this.closest(".card").querySelector(".card-title").textContent;

        alert(namaProduk + " berhasil ditambahkan!");
    });
});