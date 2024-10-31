// ADD SLIDING ON ICE
// Icy
if(localStorage.biome == 6){
    let iceAmnt = 600;

    for (let index = 0; index < world_size + 1; index++) {
        if (index % world_row === 0)
            world.innerHTML += "\n";

        let whiteShade = Math.floor(Math.random() * (255 - 200 + 1)) + 200;
        world.innerHTML += `<span style="color:rgb(${whiteShade}, ${whiteShade}, ${whiteShade});">s</span>`;
        tiles.push(world.children[index]);
    }
    tiles.pop();
    world.lastChild.remove();

    NewTile("i", "blue", iceAmnt, "s");
}