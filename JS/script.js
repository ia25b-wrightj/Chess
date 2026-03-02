const board = document.getElementById("board");

function createBoard() {
    const letters = ["a","b","c","d","e","f","g","h"];

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {

            const square = document.createElement("div");
            square.classList.add("square");

            // ID vergeben (Schach-Notation)
            square.id = letters[j] + (8 - i);


            if ((i + j) % 2 === 0) {
                square.classList.add("light");
            } else {
                square.classList.add("dark");
            }

            // Klick-Event für jedes Feld
            square.addEventListener("click", () => {
                console.log(square.id);
            });

            board.appendChild(square);
        }
    }
}createBoard();

function addPiece(squareId, imagePath) {
    const square = document.getElementById(squareId);
    square.innerHTML = `<img src="${imagePath}" alt="Schachfigur" class="a1">`;


}
addPiece("a8", "img/rook_black.png");
addPiece("b8", "img/knight_black.png");
addPiece("c8", "img/bishop_black.png");
addPiece("d8", "img/king_black.png");
addPiece("e8", "img/queen_black.png");
addPiece("f8", "img/bishop_black.png");
addPiece("g8", "img/knight_black.png");
addPiece("h8", "img/rook_black.png");

addPiece("a7", "img/pawn_black.png");
addPiece("b7", "img/pawn_black.png");
addPiece("c7", "img/pawn_black.png");
addPiece("d7", "img/pawn_black.png");
addPiece("e7", "img/pawn_black.png");
addPiece("f7", "img/pawn_black.png");
addPiece("g7", "img/pawn_black.png");
addPiece("h7", "img/pawn_black.png");


addPiece("a1", "img/rook_white.png");
addPiece("b1", "img/knight_white.png");
addPiece("c1", "img/bishop_white.png");
addPiece("d1", "img/king_white.png");
addPiece("e1", "img/queen_white.png");
addPiece("f1", "img/bishop_white.png");
addPiece("g1", "img/knight_white.png");
addPiece("h1", "img/rook_white.png");

addPiece("a2", "img/pawn_white.png");
addPiece("b2", "img/pawn_white.png");
addPiece("c2", "img/pawn_white.png");
addPiece("d2", "img/pawn_white.png");
addPiece("e2", "img/pawn_white.png");
addPiece("f2", "img/pawn_white.png");
addPiece("g2", "img/pawn_white.png");
addPiece("h2", "img/pawn_white.png");