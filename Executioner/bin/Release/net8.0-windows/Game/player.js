let pIndex;
window.addEventListener("load", () =>{
    if(localStorage.player_index === "undefined")
        pIndex = Math.floor(Math.random() * world.children.length);
    else    
        pIndex = Number(localStorage.player_index);

    world.children[pIndex].style.color = "white";
    world.children[pIndex].innerText = "p";

    WaterReaction();
    itemAmntVisual.innerText = itemAmnt.toString().replace(/,/g, "");
});
window.addEventListener("keydown", function(e){
    if(e.key == "a"){
        if(pIndex !== 0 && pIndex % world_row !== 0 && tiles[pIndex - 1].innerText !== "t" && tiles[pIndex - 1].innerText !== "W")
           pIndex--;
        else if(pIndex !== 0 && pIndex % world_row !== 0){ // CHOP
            if(inventory.children[currSlot - 1].innerText == "A"){
                // COLLECT
                for (let i = 0; i < inventory.children.length; i++) {
                    if(inventory.children[i].innerText == "0" || inventory.children[i].innerText == "W"){
                        inventory.children[i].innerText = "W";
                        inventory.children[i].style.color = "orange";

                        itemAmnt[i]++;
                        break;
                    }
                }

                world.children[pIndex - 1].innerText = tiles[pIndex - 1].innerText = 'g';
                world.children[pIndex - 1].style.color = tiles[pIndex - 1].style.color = "green";
            }
            if(tiles[pIndex - 1].style.color !== "brown" && tiles[pIndex - 1].innerText == "t"){
                // COLLECT
                for (let i = 0; i < inventory.children.length; i++) {
                    if(inventory.children[i].innerText == "0" || inventory.children[i].innerText == "s"){
                        inventory.children[i].innerText = "s";
                        inventory.children[i].style.color = "lime";

                        itemAmnt[i]++;
                        break;
                    }
                }

                world.children[pIndex - 1].innerText = tiles[pIndex - 1].innerText = 't';
                world.children[pIndex - 1].style.color = tiles[pIndex - 1].style.color = "brown";
            }
        } 
        // Restore Original Tile
        world.children[pIndex + 1].innerText = tiles[pIndex + 1].innerText;
        world.children[pIndex + 1].style.color = tiles[pIndex + 1].style.color;
    }
    if(e.key == "d"){
        if(pIndex !== world_size - 1 && pIndex % world_row !== world_row - 1 && tiles[pIndex + 1].innerText !== "t" && tiles[pIndex + 1].innerText !== "W")
            pIndex++;
        else if(pIndex !== world_size - 1 && pIndex % world_row !== world_row - 1){// CHOP
            if(inventory.children[currSlot - 1].innerText == "A"){
                // COLLECT
                for (let i = 0; i < inventory.children.length; i++) {
                    if(inventory.children[i].innerText == "0" || inventory.children[i].innerText == "W"){
                        inventory.children[i].innerText = "W";
                        inventory.children[i].style.color = "orange";

                        itemAmnt[i]++;
                        break;
                    }
                }

                world.children[pIndex + 1].innerText = tiles[pIndex + 1].innerText = 'g';
                world.children[pIndex + 1].style.color = tiles[pIndex + 1].style.color = "green";
            }
            if(tiles[pIndex + 1].style.color !== "brown" && tiles[pIndex + 1].innerText == "t"){
                 // COLLECT
                 for (let i = 0; i < inventory.children.length; i++) {
                    if(inventory.children[i].innerText == "0" || inventory.children[i].innerText == "s"){
                        inventory.children[i].innerText = "s";
                        inventory.children[i].style.color = "lime";

                        itemAmnt[i]++;
                        break;
                    }
                }

                world.children[pIndex + 1].innerText = tiles[pIndex + 1].innerText = 't';
                world.children[pIndex + 1].style.color = tiles[pIndex + 1].style.color = "brown";
            }
        }
        // Restore Original Tile
        world.children[pIndex - 1].innerText = tiles[pIndex - 1].innerText;
        world.children[pIndex - 1].style.color = tiles[pIndex - 1].style.color;
    }
    if(e.key == "w"){
        if(world.children[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].innerText != "t" && world.children[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].innerText != "W"){
            if(pIndex > world_row - 1)
                pIndex -= (world_row + (pIndex % world_row))  - (pIndex % world_row);
        }else { // CHOP
            if(inventory.children[currSlot - 1].innerText == "A"){
                // COLLECT
                for (let i = 0; i < inventory.children.length; i++) {
                    if(inventory.children[i].innerText == "0" || inventory.children[i].innerText == "W"){
                        inventory.children[i].innerText = "W";
                        inventory.children[i].style.color = "orange";

                        itemAmnt[i]++;
                        break;
                    }
                }

                world.children[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].innerText = tiles[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].innerText = 'g';
                world.children[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].style.color = tiles[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].style.color = "green";
            }
            if(world.children[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].style.color !== "brown" && world.children[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].innerText == "t"){
                 // COLLECT
                for (let i = 0; i < inventory.children.length; i++) {
                    if(inventory.children[i].innerText == "0" || inventory.children[i].innerText == "s"){
                        inventory.children[i].innerText = "s";
                        inventory.children[i].style.color = "lime";

                        itemAmnt[i]++;
                        break;
                    }
                }

                world.children[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].innerText = tiles[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].innerText = 't';
                world.children[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].style.color = tiles[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].style.color = "brown";
            }
        }
        // Restore Original Tile
        world.children[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].innerText = tiles[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].innerText;
        world.children[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].style.color = tiles[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].style.color;

    }
    if(e.key == "s"){
        if(world.children[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].innerText != "t" && world.children[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].innerText != "W"){
            if(pIndex < (world_size - world_row))
                pIndex += (world_row + (pIndex % world_row)) - (pIndex % world_row);
        }else{ // CHOP
            if(inventory.children[currSlot - 1].innerText == "A"){
                // COLLECT
                for (let i = 0; i < inventory.children.length; i++) {
                    if(inventory.children[i].innerText == "0" || inventory.children[i].innerText == "W"){
                        inventory.children[i].innerText = "W";
                        inventory.children[i].style.color = "orange";

                        itemAmnt[i]++;
                        break;
                    }
                }

                world.children[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].innerText = tiles[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].innerText = 'g';
                world.children[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].style.color = tiles[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].style.color = "green";
            }
            if(world.children[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].style.color !== "brown" && world.children[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].innerText == "t"){
                // COLLECT
                for (let i = 0; i < inventory.children.length; i++) {
                    if(inventory.children[i].innerText == "0" || inventory.children[i].innerText == "s"){
                        inventory.children[i].innerText = "s";
                        inventory.children[i].style.color = "lime";

                        itemAmnt[i]++;
                        break;
                    }
                }

                world.children[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].innerText = tiles[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].innerText = 't';
                world.children[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].style.color = tiles[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].style.color = "brown";
            }
        }
        // Restore Original Tile
        world.children[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].innerText = tiles[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].innerText;
        world.children[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].style.color = tiles[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].style.color;
    }
    //
    WaterReaction();
    //
    PlaceDown(e.key);
    PickUp();
    //
    isPlayerInRadius();
    //
    world.children[pIndex].style.color = "white";
    world.children[pIndex].innerText = "p";

    //
    itemAmntVisual.innerText = itemAmnt.toString().replace(/,/g, "");
});

function WaterReaction(){
    if(tiles[pIndex].innerText === "w"){
        let randomDirection = Math.floor(Math.random() * 4);
        switch(randomDirection){
            case 0:
                // LEFT
                if(pIndex !== 0 && pIndex % world_row !== 0)
                    pIndex--;  

                world.children[pIndex + 1].innerText = tiles[pIndex + 1].innerText;
                world.children[pIndex + 1].style.color = tiles[pIndex + 1].style.color;
                setTimeout(() =>{
                    WaterReaction();
                },250)
                break;
            case 1:    
                // RIGHT
                if(pIndex !== world_size - 1 && pIndex % world_row !== world_row - 1)
                    pIndex++;

                world.children[pIndex - 1].innerText = tiles[pIndex - 1].innerText;
                world.children[pIndex - 1].style.color = tiles[pIndex - 1].style.color;
                setTimeout(() =>{
                    WaterReaction();
                },250)
                break;
            case 2:     
                // UP
                if(pIndex > world_row - 1)
                    pIndex -= (world_row + (pIndex % world_row)) - (pIndex % world_row);

                world.children[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].innerText = tiles[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].innerText;
                world.children[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].style.color = tiles[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].style.color;
                setTimeout(() =>{
                    WaterReaction();
                },250)
                break;
            case 3:
                // DOWN
                if(pIndex < (world_size - world_row))
                    pIndex += (world_row + (pIndex % world_row)) - (pIndex % world_row);

                world.children[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].innerText = tiles[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].innerText;
                world.children[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].style.color = tiles[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].style.color;
                setTimeout(() =>{
                    WaterReaction();
                },250)
                break;
        }
        world.children[pIndex].style.color = "white";
        world.children[pIndex].innerText = "p";
    }
}
function PickUp(){
    if(tiles[pIndex].innerText == "r"){
        for (let i = 0; i < inventory.children.length; i++) {
            if(inventory.children[i].innerText == "0" || inventory.children[i].innerText == "r"){
                inventory.children[i].innerText = "r";
                inventory.children[i].style.color = "grey";

                itemAmnt[i]++;
                break; 
            }
        }
        
        tiles[pIndex].style.color = world.children[pIndex].style.color = "green";
        tiles[pIndex].innerText = world.children[pIndex].innerText = "g";
    }   
}
function PlaceDown(direction){
    // LEFT
    if(direction == "a"){
        if(pIndex !== world_size - 1 && pIndex % world_row !== world_row - 1){
            // WOOD
            if(inventory.children[currSlot - 1].innerText == "W"){
                pIndex++;
                world.children[pIndex - 1].innerText = tiles[pIndex - 1].innerText = 'W';
                world.children[pIndex - 1].style.color = tiles[pIndex - 1].style.color = "orange";
                if(itemAmnt[currSlot - 1] == 1){
                    inventory.children[currSlot - 1].innerText = "0";
                    inventory.children[currSlot - 1].style.color = "white";
                }
                itemAmnt[currSlot - 1]--;
            }
            // ROCK
            if(inventory.children[currSlot - 1].innerText == "r"){
                pIndex++;
                world.children[pIndex - 1].innerText = tiles[pIndex - 1].innerText = 'r';
                world.children[pIndex - 1].style.color = tiles[pIndex - 1].style.color = "grey";
                if(itemAmnt[currSlot - 1] == 1){
                    inventory.children[currSlot - 1].innerText = "0";
                    inventory.children[currSlot - 1].style.color = "white";
                }
                itemAmnt[currSlot - 1]--;
            }
            // SEED
            if(inventory.children[currSlot - 1].innerText == "s"){
                pIndex++;
                let placeTile = pIndex - 1;
                world.children[placeTile].innerText = tiles[placeTile].innerText = 's';
                world.children[placeTile].style.color = tiles[placeTile].style.color = "lime";
                if(itemAmnt[currSlot - 1] == 1){
                    inventory.children[currSlot - 1].innerText = "0";
                    inventory.children[currSlot - 1].style.color = "white";
                }
                itemAmnt[currSlot - 1]--;
                // BECOME TREE
                setTimeout(() => {
                    world.children[placeTile].innerText = tiles[placeTile].innerText = 't';
                    world.children[placeTile].style.color = tiles[placeTile].style.color = "brown";
                }, 10000);
            }
        }
    }
    // RIGHT
    if(direction == "d"){
        if(pIndex !== 0 && pIndex % world_row !== 0){
            // WOOD
            if(inventory.children[currSlot - 1].innerText == "W"){
                pIndex--;
                world.children[pIndex + 1].innerText = tiles[pIndex + 1].innerText = 'W';
                world.children[pIndex + 1].style.color = tiles[pIndex + 1].style.color = "orange";
                if(itemAmnt[currSlot - 1] == 1){
                    inventory.children[currSlot - 1].innerText = "0";
                    inventory.children[currSlot - 1].style.color = "white";
                }
                itemAmnt[currSlot - 1]--;
            }
            // ROCK
            if(inventory.children[currSlot - 1].innerText == "r"){
                pIndex--;
                world.children[pIndex + 1].innerText = tiles[pIndex + 1].innerText = 'r';
                world.children[pIndex + 1].style.color = tiles[pIndex + 1].style.color = "grey";
                if(itemAmnt[currSlot - 1] == 1){
                    inventory.children[currSlot - 1].innerText = "0";
                    inventory.children[currSlot - 1].style.color = "white";
                }
                itemAmnt[currSlot - 1]--;
            }
            // SEED
            if(inventory.children[currSlot - 1].innerText == "s"){
                pIndex--;
                let placeTile = pIndex + 1; 
                world.children[placeTile].innerText = tiles[placeTile].innerText = 's';
                world.children[placeTile].style.color = tiles[placeTile].style.color = "lime";
                if(itemAmnt[currSlot - 1] == 1){
                    inventory.children[currSlot - 1].innerText = "0";
                    inventory.children[currSlot - 1].style.color = "white";
                }
                itemAmnt[currSlot - 1]--;
                // BECOME TREE
                setTimeout(() => {
                    world.children[placeTile].innerText = tiles[placeTile].innerText = 't';
                    world.children[placeTile].style.color = tiles[placeTile].style.color = "brown";
                }, 10000);
            }
        }
    }
    // UP
    if(direction == "w"){
        if(pIndex < (world_size - world_row)){
            // WOOD
            if(inventory.children[currSlot - 1].innerText == "W"){
                pIndex += (world_row + (pIndex % world_row)) - (pIndex % world_row);
                world.children[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].innerText = tiles[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].innerText = 'W';
                world.children[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].style.color = tiles[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].style.color = "orange";
                if(itemAmnt[currSlot - 1] == 1){
                    inventory.children[currSlot - 1].innerText = "0";
                    inventory.children[currSlot - 1].style.color = "white";
                }
                itemAmnt[currSlot - 1]--;
            }
            // ROCK
            if(inventory.children[currSlot - 1].innerText == "r"){
                pIndex += (world_row + (pIndex % world_row)) - (pIndex % world_row);
                world.children[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].innerText = tiles[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].innerText = 'r';
                world.children[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].style.color = tiles[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].style.color = "grey";
                if(itemAmnt[currSlot - 1] == 1){
                    inventory.children[currSlot - 1].innerText = "0";
                    inventory.children[currSlot - 1].style.color = "white";
                }
                itemAmnt[currSlot - 1]--;
            }
            // SEED
            if(inventory.children[currSlot - 1].innerText == "s"){
                pIndex += (world_row + (pIndex % world_row)) - (pIndex % world_row);
                let placeTile = pIndex - world_row + (pIndex % world_row) - (pIndex % world_row);
                world.children[placeTile].innerText = tiles[placeTile].innerText = 's';
                world.children[placeTile].style.color = tiles[placeTile].style.color = "lime";
                if(itemAmnt[currSlot - 1] == 1){
                    inventory.children[currSlot - 1].innerText = "0";
                    inventory.children[currSlot - 1].style.color = "white";
                }
                itemAmnt[currSlot - 1]--;
                // BECOME TREE
                setTimeout(() => {
                    world.children[placeTile].innerText = tiles[placeTile].innerText = 't';
                    world.children[placeTile].style.color = tiles[placeTile].style.color = "brown";
                }, 10000);
            }
        }
    }
    // DOWN
    if(direction == "s"){
        if(pIndex > world_row - 1){
            //WOOD
            if(inventory.children[currSlot - 1].innerText == "W"){
                pIndex -= (world_row + (pIndex % world_row)) - (pIndex % world_row);
                world.children[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].innerText = tiles[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].innerText = 'W';
                world.children[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].style.color = tiles[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].style.color = "orange";
                if(itemAmnt[currSlot - 1] == 1){
                    inventory.children[currSlot - 1].innerText = "0";
                    inventory.children[currSlot - 1].style.color = "white";
                }
                itemAmnt[currSlot - 1]--;
            }
            //ROCK
            if(inventory.children[currSlot - 1].innerText == "r"){
                pIndex -= (world_row + (pIndex % world_row)) - (pIndex % world_row);
                world.children[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].innerText = tiles[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].innerText = 'r';
                world.children[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].style.color = tiles[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].style.color = "grey";
                if(itemAmnt[currSlot - 1] == 1){
                    inventory.children[currSlot - 1].innerText = "0";
                    inventory.children[currSlot - 1].style.color = "white";
                }
                itemAmnt[currSlot - 1]--;
            }
            // SEED
            if(inventory.children[currSlot - 1].innerText == "s"){
                pIndex -= (world_row + (pIndex % world_row)) - (pIndex % world_row);
                let placeTile = pIndex + world_row + (pIndex % world_row) - (pIndex % world_row); 
                world.children[placeTile].innerText = tiles[placeTile].innerText = 's';
                world.children[placeTile].style.color = tiles[placeTile].style.color = "lime";
                if(itemAmnt[currSlot - 1] == 1){
                    inventory.children[currSlot - 1].innerText = "0";
                    inventory.children[currSlot - 1].style.color = "white";
                }
                itemAmnt[currSlot - 1]--;
                setTimeout(() => {
                    world.children[placeTile].innerText = tiles[placeTile].innerText = 't';
                    world.children[placeTile].style.color = tiles[placeTile].style.color = "brown";
                }, 10000);
            }
        }
    }
}