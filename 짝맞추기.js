var 가로 = 4;
var 세로 = 3;

function 카드세팅(가로, 세로) {
    for (var i = 0; i < 가로 * 세로; i++) {
        var card = document.createElement('div');
        card.classList.add('card'); //클래스가 하나라면 card.className = 'card' 해도 됨
        var cardInner = document.createElement('div');
        cardInner.className = 'card-inner';
        var cardFront = document.createElement('div');
        cardFront.className = 'card-front';
        var cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        (function (c) {
            card.addEventListener('click', function () {
                card.classList.toggle('flipped'); // on, off 스위치 역할
                //  flipped 클래스가 없으면 넣고 있으면 뺀다.
            });
        })(card);
        document.body.appendChild(card);
    }
}

카드세팅(가로, 세로);
