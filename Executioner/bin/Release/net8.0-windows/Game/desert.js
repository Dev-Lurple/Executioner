// Desert
if(localStorage.biome == 5){
    let cactusAmnt = 50;

    for (let index = 0; index < world_size + 1; index++) {
        if (index % world_row === 0)
            world.innerHTML += "\n";

        let orangeShade = Math.floor(Math.random() * (252 - 150 + 1)) + 150;
        world.innerHTML += `<span style="color:rgb(250, ${orangeShade}, 0);">s</span>`;
        tiles.push(world.children[index]);
    }
    tiles.pop();
    world.lastChild.remove();

    NewTile("c", "green", cactusAmnt, "s");
}