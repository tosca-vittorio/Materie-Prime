function Loaded()
{
    // Funzione che gestisce lo scroll
function SheepScroll() 
{
    // Posizione corrente dello scroll
    let currentScrollPosition = window.scrollY;
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Determina la direzione dello scroll confrontando la posizione corrente con quella precedente
    if (currentScrollPosition > previousScrollPosition) 
    {
        console.log('Lutente ha scrollato verso -');
        header.style.display = 'none';

    } 
    else if (currentScrollPosition < previousScrollPosition) 
    {
        console.log('Lutente ha scrollato verso +');
        header.style.display = '';
        header.style.position = 'fixed';
        header.style.zIndex = '9999';
        header.style.width = '100%';
        header.style.height = '10%';
        //console.log('La Header appare...');

    }
    
    if(scrollTop === 0)
    {
        console.log('Lutente ha scrollato verso 0');
        header.style.position = '';
        header.style.zIndex = '';
        header.style.width = '';
        header.style.height = '';
    }

    // Aggiorna la posizione precedente con quella corrente per il prossimo confronto
    previousScrollPosition = currentScrollPosition;
}

    // SELEZIONO L'ELEMENTO VIDEO MEDIANTE IL SUO ID
    const videoElement = document.getElementById('hero-video-background');
    const url_videos = 
    [
        'http://ristorantematerieprime.it/wp-content/uploads/2024/06/1.mp4',
        'http://ristorantematerieprime.it/wp-content/uploads/2024/06/background.mp4'
    ];

    videoElement.src = url_videos[0];

    // Aggiungi l'event listener che chiama SheepScroll quando avviene lo scroll
    window.addEventListener('scroll', SheepScroll);

    // Riferimento all'elemento header con classe .main-header
    const header = document.querySelector(".main-header");
    console.log(header);
}


function Loader(event)
{
    const loader = document.querySelector('.loader');
    loader.style.opacity = '0';
    setTimeout( ()=> loader.style.display = 'none', 500);
}


/* IMPLEMENTIAMO IL COMPORTAMENTO DURANTE LA FASE DI CARICAMENTO DEGLI ELEMENTI DEL DOM */
document.addEventListener("DOMContentLoaded", Loaded);

/* IMPLEMENTIAMO IL COMPORTAMENTO DELLA FASE DI CARICAMENTO */
window.addEventListener('load', Loader);


let previousScrollPosition = window.scrollY;





