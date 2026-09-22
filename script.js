// FILM VERİTABANI (Yeni filmleri buraya aynı şablonda ekleyebilirsiniz)
const movies = [
    {
        id: 1,
        title: "Inception (Başlangıç)",
        category: "Bilim Kurgu, Aksiyon",
        rating: "8.8",
        poster: "https://unsplash.com", // Örnek görsel, kendi afiş linkinizi koyabilirsiniz
        iframeUrl: "https://youtube.com", // Buraya filmin asıl iframe/player linkini koyun
        description: "Hırsız Dom Cobb, insanların rüyalarından sırları çalan bir uzmandır. Bu kez görevi bir fikri çalmak değil, yerleştirmektir."
    },
    {
        id: 2,
        title: "Interstellar (Yıldızlararası)",
        category: "Bilim Kurgu, Dram",
        rating: "8.7",
        poster: "https://unsplash.com",
        iframeUrl: "https://youtube.com",
        description: "Bir grup astronot, insanlığın hayatta kalmasını sağlamak için solucan deliğinden geçerek yeni bir gezegen arayışına çıkar."
    },
    {
        id: 3,
        title: "The Dark Knight (Kara Şövalye)",
        category: "Aksiyon, Suç",
        rating: "9.0",
        poster: "https://unsplash.com",
        iframeUrl: "https://youtube.com",
        description: "Batman, Gotham şehrini kaosa sürüklemeye çalışan gizemli ve sadist suçlu Joker ile karşı karşıya gelir."
    },
{
    id: 4,
    title: "Yeni Filmin Adı",
    category: "Türler",
    rating: "8.5",
    poster: "Afiş Resim Linki",
    iframeUrl: "Film İframe / Player Linki",
    description: "Film Açıklaması."
}

];

// DOM Elemanları
const movieGrid = document.getElementById('movieGrid');
const playerSection = document.getElementById('playerSection');
const videoPlayer = document.getElementById('videoPlayer');
const playerTitle = document.getElementById('playerTitle');
const playerDesc = document.getElementById('playerDesc');
const closePlayer = document.getElementById('closePlayer');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

// Filmleri Ekrana Basma Fonksiyonu
function displayMovies(moviesList) {
    movieGrid.innerHTML = "";
    
    if(moviesList.length === 0) {
        movieGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:#94a3b8;">Aradığınız kriterde film bulunamadı.</p>`;
        return;
    }

    moviesList.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <div class="poster-wrapper">
                <span class="rating"><i class="fa-solid fa-star"></i> ${movie.rating}</span>
                <img src="${movie.poster}" alt="${movie.title}">
            </div>
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>${movie.category}</p>
            </div>
        `;
        
        // Karta tıklanınca oynatıcıyı aç
        movieCard.addEventListener('click', () => {
            playMovie(movie);
        });

        movieGrid.appendChild(movieCard);
    });
}

// Filmi Oynatma Fonksiyonu
function playMovie(movie) {
    videoPlayer.src = movie.iframeUrl;
    playerTitle.textContent = movie.title;
    playerDesc.textContent = movie.description;
    playerSection.classList.remove('hidden');
    // Sayfayı yukarı, oynatıcıya kaydır
    playerSection.scrollIntoView({ behavior: 'smooth' });
}

// Oynatıcıyı Kapatma
closePlayer.addEventListener('click', () => {
    videoPlayer.src = ""; // Videoyu durdurmak için src'yi temizle
    playerSection.classList.add('hidden');
});

// Arama Fonksiyonu
function filterMovies() {
    const searchTerm = searchInput.value.toLowerCase();
    const filtered = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm) || 
        movie.category.toLowerCase().includes(searchTerm)
    );
    displayMovies(filtered);
}

searchBtn.addEventListener('click', filterMovies);
searchInput.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        filterMovies();
    }
});

// Sayfa yüklendiğinde filmleri getir
document.addEventListener('DOMContentLoaded', () => {
    displayMovies(movies);
});
