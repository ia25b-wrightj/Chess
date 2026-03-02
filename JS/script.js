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
    square.innerHTML = `<img src="${imagePath}" alt="Schachfigur">`;


}
addPiece("a1", "img/rook_black.png");