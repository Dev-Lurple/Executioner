const slotAmnt = 8;
let itemAmnt;
itemAmnt = [1, 0, 0, 0, 0, 0, 0, 0];

itemAmnt[0] = localStorage.inv_1;
itemAmnt[1] = localStorage.inv_2;
itemAmnt[2] = localStorage.inv_3;
itemAmnt[3] = localStorage.inv_4;
itemAmnt[4] = localStorage.inv_5;
itemAmnt[5] = localStorage.inv_6;
itemAmnt[6] = localStorage.inv_7;
itemAmnt[7] = localStorage.inv_8;

const inventory = document.createElement("div");
inventory.id = "inv";
const itemAmntVisual = document.createElement("div");
world.appendChild(inventory);
world.appendChild(itemAmntVisual);
for (let index = 0; index < slotAmnt - 1; index++) {
    if(!index)
        inventory.innerHTML = '<span style="color:red; text-decoration:line-through;">A</span>';
    inventory.innerHTML += '<span>0</span>';
}

let currSlot = 1;
window.addEventListener("keydown",(e)=>{
    if(!isNaN(parseInt(e.key))){
        currSlot = parseInt(e.key);
        if(currSlot > 0 &&  
        currSlot < inventory.children.length + 1){
            for (let index = 0; index < inventory.children.length; index++) {
                if(index == currSlot - 1)
                    inventory.children[currSlot - 1].style.textDecoration = "line-through";
                else
                    inventory.children[index].style.textDecoration = "none";
            }
        }
    }
});

if(localStorage.inventory !== "undefined"){
    for (let i = 0; i < localStorage.inventory.length; i++) {
        inventory.children[i].innerText = localStorage.inventory[i];
    }
}