// script.js
// ini javascript
function displayMessage(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value;

    document.getElementById('result-name').innerText = name;
    document.getElementById('result-dob').innerText = dob;
    document.getElementById('result-gender').innerText = gender;
    document.getElementById('result-message').innerText = message;
}

function validateForm(event) {
    const name = document.getElementById('name').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value.trim();

    if (name === "") {
        alert("Name must be filled out");
        return false;
    }

    if (dob === "") {
        alert("Tanggal Lahir must be filled out");
        return false;
    }

    if (gender === "") {
        alert("Please select a gender");
        return false;
    }

    if (message === "") {
        alert("Pesan must be filled out");
        return false;
    }

    displayMessage(event);
    return true;
}

document.getElementById('messageForm').addEventListener('submit', validateForm);

// JavaScript untuk banner otomatis dan menampilkan pesan
let slideIndex = 0;
const bannerImages = [
    'assets/banner2.jpg',
    'assets/banner11.jpg',
    'assets/banner4.webp'
    // tambahkan path gambar sesuai kebutuhan
];

function autoSlide() {
    const bannerContainer = document.querySelector('.banner-container');
    const homeHeader = document.querySelector('#home header h1'); // Ambil elemen header h1 di dalam #home

    // Pastikan homeHeader tidak null sebelum mengakses innerText
    if (homeHeader) {
        bannerContainer.innerHTML = ''; // Kosongkan konten sebelum mengubahnya
        const headerText = homeHeader.innerText;
        bannerContainer.innerHTML = `
            <div class="banner-text">
                <h1>${headerText}</h1>
                <p>Ini adalah website portofolio saya</p>
            </div>
        `;
    }

    bannerContainer.style.backgroundImage = `url('${bannerImages[slideIndex]}')`;

    slideIndex++;
    if (slideIndex >= bannerImages.length) {
        slideIndex = 0;
    }

    setTimeout(autoSlide, 3000); // Ganti angka 3000 dengan interval waktu (dalam milidetik) antar slide
}

document.addEventListener('DOMContentLoaded', function () {
    autoSlide();
});
