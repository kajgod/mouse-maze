import state from "./simple-reactive-state";
import config from "./config";

//#region documentation
/*

1. const map has states:
0 - nothing
1 - wall
2 - cheese
3 - mouse

*/
//#endregion

(() => {
  //#region load stuff & prepare game to start
  const startGameListener = () => {
    document.getElementById("start").addEventListener("click", () => {
      document.getElementById("main").classList.add("started");
      setTimeout(()=>{
        document.getElementById("run").classList.toggle("hidden");
        document.getElementById("grid").classList.toggle("hidden");
      }, 1000);
    });
  };
  const addTiles = map => {
    map.map((val, y) => {
      val.map((val, x) => {
        let tile = document.createElement("div");
        tile.setAttribute("id", `c-${x}-${y}`);
        if(val === 1)tile.classList.add("wall");
        const container = document.getElementById("grid");
        container.appendChild(tile);
      });
    });
  };
  const createTheGrid = () => {
    //#region TODO: make it configurable for each game
    let map = new Array(config.vertical).fill(new Array(config.horizontal));
    //set edges
    map = map.map((val, key) =>
      key === 0 || key == map.length - 1
        ? val.fill(1)
        : val.map((_, key) => (key === 0 || key == val.length - 1 ? 1 : 0))
    );
    addTiles(map);
    //#endregion
  };
  const loadGame = () => {
    startGameListener();
    createTheGrid();
  };
  //#endregion

  loadGame();
})();
