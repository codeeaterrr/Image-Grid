const grid = document.getElementById("grid");
const rows = 3;
const cols = 3;
const tileW = 100; // 300 / 3
const tileH = 250 / 3; // ≈83.33

// Tiles generate karo
for (let y = 0; y < rows; y++) {
  for (let x = 0; x < cols; x++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.style.backgroundPosition = `-${x * tileW}px -${y * tileH}px`;

    // Background toggle event
    tile.addEventListener("click", () => {
      document.body.style.background =
        document.body.style.background === "white" ? "black" : "white";
    });

    grid.appendChild(tile);
  }
}
