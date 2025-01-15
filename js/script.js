// Navbar
// Pilih semua link di navbar
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    // Tambahkan event listener untuk setiap tombol
    link.addEventListener('click', () => {
        // Periksa apakah tombol sudah aktif
        if (link.classList.contains('active')) {
            // Jika sudah aktif, hapus kelas 'active'
            link.classList.remove('active');
        } else {
            // Hapus 'active' dari semua link lainnya
            navLinks.forEach(l => l.classList.remove('active'));
            // Tambahkan kelas 'active' pada tombol yang diklik
            link.classList.add('active');
        }
    });
});


//popup
window.onload = () => {
    const popupOverlay = document.getElementById('popup-overlay');
    const body = document.body;

    // Tampilkan pop-up dan tambahkan efek blur
    popupOverlay.classList.add('show');
    body.classList.add('blur');
};

function submitName() {
    const userInput = document.getElementById('username-input').value.trim();
    const userGreeting = document.getElementById('user-greeting');
    const popupOverlay = document.getElementById('popup-overlay');
    const body = document.body;

    // Perbarui nama pengguna
    userGreeting.textContent = userInput ? userInput : 'Guest';

    // Tutup pop-up dan hapus efek blur
    popupOverlay.classList.remove('show');
    body.classList.remove('blur');
}






// Handle form submission
document.getElementById("messageForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get form values
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const message = document.getElementById("message").value;

    // Validate the form (optional)
    if (!name || !dob || !gender || !message) {
        alert("Semua field harus diisi!");
        return;
    }

    // Display values in the output container
    document.getElementById("outputName").innerText = name;
    document.getElementById("outputDob").innerText = dob;
    document.getElementById("outputGender").innerText = gender;
    document.getElementById("outputMessage").innerText = message;

    // Show the output container
    document.getElementById("outputContainer").classList.remove("hidden");
});



// Script untuk menambahkan kelas 'show' pada elemen saat berada di viewport
document.addEventListener('DOMContentLoaded', function() {
    const elementsToShow = document.querySelectorAll('.additional-text, .portfolio-background');

    const checkVisibility = () => {
        elementsToShow.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                // Jika elemen terlihat, tambahkan kelas 'show'
                element.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Panggil sekali saat halaman dimuat
});
