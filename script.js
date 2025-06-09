let cont = document.querySelector('.container');
let pics = ['https://media.dodostatic.net/image/r:292x292/019591b642d87304a62d322945990861.avif', 'https://media.dodostatic.net/image/r:292x292/019591c69fac7921a27e4ecd8c99f9df.avif', 'https://media.dodostatic.net/image/r:292x292/019591a2e222794a81731c99f3cc34ec.avif'];
let texts = ['Креветка и Песто', 'Чилл Грилл(скоро)', 'Баварская(скоро)'];

for (let i=0; i<pics.length; ++i) {
    let card = document.createElement('div');
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.className = 'card'
    let img = document.createElement('img');
    img.src = pics[i];
    let text = document.createElement('p');
    text.innerText = texts[i];
    card.appendChild(img);
    card.appendChild(text);
    cont.appendChild(card);
}
