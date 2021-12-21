// config Modal

let modal = document.querySelector('.modal');
let close = document.querySelector('.modal .elements .content div i');

close.addEventListener('click', e => {
    closeOpenModal(false);
});

// select imagem
let selectImage = document.querySelector('.modal .elements img');
let card = document.querySelectorAll('.template .grid .card img');

for(let i = 0; i < card.length; i++) {
    let cards = card[i];
    cards.addEventListener('click', e => {
        let target = e.target;
        let nameTarget = target.parentNode.childNodes[3];
        selectImage.src = target.src;
        selectImage.alt = nameTarget.innerText;
        closeOpenModal();
    });
};

function closeOpenModal(show = true){
    modal.style.display = (show) ? 'flex' : 'none';
};