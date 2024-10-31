let forestExsits = true;

document.body = document.createElement("body");
const world_size = 1600;
const world_row = 64;

let treeAmnt;
let rockAmnt;
let woodAmnt;

// Normal
if(localStorage.biome == 1){
    treeAmnt = 400;
    rockAmnt = 15;
    woodAmnt = 12;
}
// Weathered
if(localStorage.biome == 2){
    treeAmnt = 50;
    rockAmnt = 5;
    woodAmnt = 0;
}
// Foresty
if(localStorage.biome == 3){
    treeAmnt = 900;
    rockAmnt = 25;
    woodAmnt = 300;
}
// Ocean
if(localStorage.biome == 4){
    treeAmnt = 0;
    rockAmnt = 0;
    woodAmnt = 0;
}
// Desert, Icy, Cave
if(localStorage.biome == 5 || localStorage.biome == 6 || localStorage.biome == 7)
    forestExsits = false;
let tiles = [];
let river = [];
const world = document.createElement("p");
document.body.appendChild(world);
if(forestExsits){
    for (let index = 0; index < world_size + 1; index++) {
        if (index % world_row === 0)
            world.innerHTML += "\n";
    
        let greenShade = Math.floor(Math.random() * (252 - 150 + 1)) + 150;
        world.innerHTML += `<span style="color:rgb(0, ${greenShade}, 0);">g</span>`;
        tiles.push(world.children[index]);
    }
    tiles.pop();
    world.lastChild.remove();
    
    NewTile("t", "", treeAmnt, "g");
    NewTile("r", "grey", rockAmnt, "g");
    NewTile("W", "orange", woodAmnt, "g");
    Water();
}

function Water() {
    let startingIndex = Math.floor(Math.random() * (world_size - 1));
    
    let min_s = world_row;
    let max_s = world_row * 7;
    // Ocean
    if(localStorage.biome == 4){
        startingIndex = -1;
        min_s = world_row * 50;
        max_s = world_row * 50;
    }
    let randomSize = Math.floor(Math.random() * (max_s - min_s + 1)) + min_s;

    // Horizontal
    for (let index = 1; index <= randomSize; index++) {
        if(startingIndex + index <= (world_size - 1)){
            tiles[startingIndex + index].style.color = world.children[startingIndex + index].style.color = "cyan";
            tiles[startingIndex + index].innerText = world.children[startingIndex + index].innerText = "w";
            river.push(world.children[startingIndex + index]);
        }
    }
    // Clumps
    let randomAmnt_c = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    for (let index = 0; index < randomAmnt_c; index++) {
        let startingIndex_c = Math.floor(Math.random() * ((world_size - 1) - (world_row - 1)));

        tiles[startingIndex_c].style.color = world.children[startingIndex_c].style.color = "cyan";
        tiles[startingIndex_c].innerText = world.children[startingIndex_c].innerText = "w";
        tiles[startingIndex_c + 1].style.color = world.children[startingIndex_c + 1].style.color = "cyan";
        tiles[startingIndex_c + 1].innerText = world.children[startingIndex_c + 1].innerText = "w";
        //
        tiles[startingIndex_c + (world_row + (startingIndex_c % world_row)) - (startingIndex_c % world_row)].style.color = world.children[startingIndex_c + (world_row + (startingIndex_c % world_row)) - (startingIndex_c % world_row)].style.color = "cyan";
        tiles[startingIndex_c + (world_row + (startingIndex_c % world_row)) - (startingIndex_c % world_row)].innerText = world.children[startingIndex_c + (world_row + (startingIndex_c % world_row)) - (startingIndex_c % world_row)].innerText = "w";
        tiles[(startingIndex_c + (world_row + (startingIndex_c % world_row)) - (startingIndex_c % world_row)) + 1].style.color = world.children[(startingIndex_c + (world_row + (startingIndex_c % world_row)) - (startingIndex_c % world_row)) + 1].style.color = "cyan";
        tiles[(startingIndex_c + (world_row + (startingIndex_c % world_row)) - (startingIndex_c % world_row)) + 1].innerText = world.children[(startingIndex_c + (world_row + (startingIndex_c % world_row)) - (startingIndex_c % world_row)) + 1].innerText = "w";
    }
}

function NewTile(type, clr, amnt, canReplace) {
    for (let index = 0; index < amnt; index++) {
        let rndmIndex = Math.floor(Math.random() * (world_size - 1));
        if (world.children[rndmIndex].innerText == canReplace) {
            if(type == "t"){
                let rndmClr = Math.floor(Math.random() * 100);
                if(rndmClr < 90)
                    tiles[rndmIndex].style.color = world.children[rndmIndex].style.color = "brown";
                else
                    tiles[rndmIndex].style.color = world.children[rndmIndex].style.color = "maroon";
            }
            else
                tiles[rndmIndex].style.color = world.children[rndmIndex].style.color = clr;
            tiles[rndmIndex].innerText = world.children[rndmIndex].innerText = type;
        }
    }
}