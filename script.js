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
    title: "zübük",
    category: "komedi",
    rating: "8.5",
    poster: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjG1-q8U_4uprmganbYZKAvaYyp-ToHZdv1dWA2ciMItIoxGRFZywH2vc1k3Q_yQFwkh1F5h8VLCYlqlIMsK2FCTp5CWplLQ6H7Cx4OZ6QZDCrMV6ir08qd1RqIt1s8ghFaEd7ts8eHj4zIbwsmn6caheWoUAfDElwvMTtb8TNWmnbnmQqfnRlyjdNYq6Q/s1610/z%C3%BCb%C3%BCk%20poster.jpg",
    iframeUrl: "https://dn790001.ca.archive.org/0/items/zubuk_1980/Z%C3%BCb%C3%BCk.mp4",
    description: "Aziz Nesin'in ünlü eserinden uyarlanan Zübük, çıkarları için her yolu mubah sayan, sözünde durmayan ve halkı kandırarak yükselen çıkarcı bir siyasetçi olan İbrahim Zübükzade'nin (İbraam) komik ama düşündürücü hikayesini anlatır. Kendi menfaati için herkesi aldatan bu karakter, siyasette hızla tırmanırken toplumun zaaflarını gözler önüne serer."
},
      {
         id: 3,
        title: "kaşmir baskını",
        category: "Aksiyon, Suç",
        rating: "9.0",
        poster: "https://turkcealtyazi.org/film/200/0248185.jpg",
        iframeUrl: "https://dn711303.ca.archive.org/0/items/mission-kashmir-2000-dv-drip-charme-leon-silver-rg/Mission%20Kashmir%202000%20DvDRip%20CharmeLeon%20Silver%20RG.mp4",
        description: "Yıllardır kanayan bir yara olan Kashmir bölgesinde Müslüman polis teşkilatında çalışan Sanjay, peşine düştüğü azılı bir teröristle savaşırken kazara, gene Müslüman olan bir ailenin, Altaaf adlı bir bebek hariç, tümünün ölmesine neden olur.Kısa bir süre önce kendi bebeğini de kaybetmiş olan Sanjay, karısının ısrarları üzerine bu bebeği evlatlık edinir. Ailesini öldüren maskeli kişiyi kabuslarında gören Altaaf, o maskeli kişinin kendisini evlatlık edinen Sanjay olduğunu öğrenince, intikam yemini ederek oradan kaçar.Yıllar sonra tam bir savaş makinesi haline gelmiş acımasız bir savaşçı olarak geri dönen Altaaf, nasıl bir intikam alacağını planlamaya başlar.
    },
    {
        id: 5, // Bir önceki filmin ID'sinden bir sonraki sayı olmalı
        title: "Dune: Çöl Gezegeni", // Filmin adı
        category: "Bilim Kurgu, Macera", // Kategoriler (Aralarında virgül olmalı)
        rating: "8.0", // IMDb veya site puanınız
        poster: "https://unsplash.com", // Afiş resim linki
        iframeUrl: "https://youtube.com", // İframe / Fragman Gömme Linki (Aşağıyı okuyun)
        description: "Uzak bir gelecekte geçen Dune, ailesi galaksinin en tehlikeli gezegeninin yönetimini kabul eden asil bir ailenin hikayesini anlatıyor." // Özet
    } // <-- Eğer peşine başka film ekleyecekseniz buraya virgül koyun
];



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
