// Menunggu sampai seluruh DOM (HTML) selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
    
    // Mengambil elemen form kontak
    const contactForm = document.getElementById('contactForm');
    const alertPesan = document.getElementById('alertPesan');

    // Jika elemen form ada di halaman (mencegah error di index.html)
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Mencegah halaman reload saat tombol submit ditekan
            event.preventDefault();

            // Menampilkan alert sukses
            alertPesan.classList.remove('d-none');

            // Mereset isi form
            contactForm.reset();

            // Menghilangkan alert setelah 3 detik
            setTimeout(function() {
                alertPesan.classList.add('d-none');
            }, 3000);
        });
    }
});