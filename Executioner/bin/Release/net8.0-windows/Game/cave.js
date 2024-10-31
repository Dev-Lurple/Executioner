// Cave
if(localStorage.biome == 7){
    let oreAmnt = 50;

    for (let index = 0; index < world_size + 1; index++) {
        if (index % world_row === 0)
            world.innerHTML += "\n";

        let whiteShade = Math.floor(Math.random() * (255 - 200 + 1)) + 200;
        world.innerHTML += `<span style="color:rgb(${28}, ${28}, ${28});">s</span>`;
        tiles.push(world.children[index]);
    }
    tiles.pop();
    world.lastChild.remove();

    NewTile("i", "#827f7f", oreAmnt, "s");
    NewTile("g", "#6b5900", oreAmnt, "s");
    NewTile("c", "#525252", oreAmnt, "s");
}