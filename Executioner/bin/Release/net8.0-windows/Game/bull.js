let bullsExist = true;
// Ocean, Desert, Icy, Cave
if(localStorage.biome == 4 || localStorage.biome == 5 || localStorage.biome == 6 || localStorage.biome == 7){
    bullsExist = false;
}
if(bullsExist){
    let bullPosition = Math.floor(Math.random() * (world_size - 1));
    world.children[bullPosition].innerText == "B";
    
    const attack_radius = 5;
    const attack_radius_v = 64;
    
    let chaseDir = "";
    
    function isPlayerInRadius(){
        // RIGHT
        if(pIndex - bullPosition < attack_radius 
            && pIndex - bullPosition > 0){
            chaseDir = "r";
        }
        // LEFT
        if(pIndex - bullPosition < 0 
            && pIndex - bullPosition > -attack_radius){
            chaseDir = "l"
        }
        // DOWN
        if(pIndex - bullPosition == attack_radius_v || pIndex - bullPosition == attack_radius_v * 2
           || pIndex - bullPosition == attack_radius_v * 3 || pIndex - bullPosition == attack_radius_v * 4
           || pIndex - bullPosition == attack_radius_v * 5){
            chaseDir = "d"
        }
        // UP
        if(pIndex - bullPosition == -attack_radius_v || pIndex - bullPosition == -attack_radius_v * 2
           || pIndex - bullPosition == -attack_radius_v * 3 || pIndex - bullPosition == -attack_radius_v * 4
           || pIndex - bullPosition == -attack_radius_v * 5){
            chaseDir = "u"
        }
    }
    setInterval(Chase, 100);
    function Chase(){
        if(chaseDir == 'r' /* && bullPosition !== 0 && bullPosition % world_row !== 0  && */ && world.children[bullPosition + 1].innerText !== "t"  && world.children[bullPosition + 1].innerText !== "W"){
            bullPosition++;
            world.children[bullPosition - 1].innerText = tiles[bullPosition - 1].innerText;
            world.children[bullPosition - 1].style.color = tiles[bullPosition - 1].style.color;
        }
        if(chaseDir == 'l' /* && bullPosition !== world_size - 1 && bullPosition % world_row !== world_row - 1 */ && world.children[bullPosition - 1].innerText !== "t"  && world.children[bullPosition - 1].innerText !== "W"){
            bullPosition--;
            world.children[bullPosition + 1].innerText = tiles[bullPosition + 1].innerText;
            world.children[bullPosition + 1].style.color = tiles[bullPosition + 1].style.color;
        }  
        if(chaseDir == 'd' && bullPosition < (world_size - world_row) && world.children[bullPosition + world_row + (bullPosition % world_row) - (bullPosition % world_row)].innerText !== "t"  && world.children[bullPosition + world_row + (bullPosition % world_row) - (bullPosition % world_row)].innerText !== "W"){
            bullPosition += (world_row + (bullPosition % world_row)) - (bullPosition % world_row);
            world.children[bullPosition - world_row + (bullPosition % world_row) - (bullPosition % world_row)].innerText = tiles[bullPosition - world_row + (bullPosition % world_row) - (bullPosition % world_row)].innerText;
            world.children[bullPosition - world_row + (bullPosition % world_row) - (bullPosition % world_row)].style.color = tiles[bullPosition - world_row + (bullPosition % world_row) - (bullPosition % world_row)].style.color;
        } 
        if(chaseDir == "u" && bullPosition > world_row - 1 && world.children[bullPosition - world_row + (bullPosition % world_row) - (bullPosition % world_row)].innerText != "t" && world.children[bullPosition - world_row + (bullPosition % world_row) - (bullPosition % world_row)].innerText != "W"){
            bullPosition -= (world_row + (bullPosition % world_row))  - (bullPosition % world_row);
            world.children[bullPosition + world_row + (bullPosition % world_row) - (bullPosition % world_row)].innerText = tiles[bullPosition - world_row + (bullPosition % world_row) - (bullPosition % world_row)].innerText;
            world.children[bullPosition + world_row + (bullPosition % world_row) - (bullPosition % world_row)].style.color = tiles[bullPosition - world_row + (bullPosition % world_row) - (bullPosition % world_row)].style.color;
        }
        //
        world.children[bullPosition].innerText = "B";
        world.children[bullPosition].style.color = "#636262";
    }
}