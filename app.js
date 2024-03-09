let header = document.querySelector('#header');
let hadith = document.querySelector('#hadith-text');
let book = document.querySelector('#book');
let button = document.querySelector('button');


function loadHadith() {
    let hadithText = JSON.parse(request.responseText);

    let randomHadith = Math.floor(Math.random() * hadithText.ahadith.length);
    header.innerHTML = hadithText.ahadith[randomHadith].header;
    hadith.innerHTML = hadithText.ahadith[randomHadith].hadith_english;
    book.innerHTML = hadithText.ahadith[randomHadith].book;
}


let request = new XMLHttpRequest();
request.open('GET', 'ahadith.json');

request.addEventListener('load', loadHadith);

request.send();


function loadHadithOnButtonClick() {
    loadHadith();
}

function loadHadithOnSpacebarPress(e) {
    if (e.keyCode === 32) {
        loadHadith();
    }
}
document.getElementById('shareButton').addEventListener('click', function() {
    const hadithToShare = encodeURIComponent(hadith.innerText);
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(document.location.href)}&quote=${hadithToShare}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
});


button.addEventListener('click', loadHadithOnButtonClick);
window.addEventListener('keyup', loadHadithOnSpacebarPress);