
//Select The Start Game Button 
document.querySelector(".control-buttons span").onclick = function () {

    //Prompt Window To Ask Your Name
    let yourName = prompt("Whats Your Name");

    //If The Name Empty
    if (yourName == null || yourName == "") {

        //Set Name To Unknown 
        document.querySelector('.name span').innerHTML = "UnKnown";

        //Name Is Not  Empty
    } else {
        //Set Name To Your Name
        document.querySelector('.name span').innerHTML = yourName;
    }
    //Remove Spash Screen
    document.querySelector(".control-buttons").remove();
};

//Effect Duration
let duration = 1000;

// select Blocks Container
let blocksContainer = document.querySelector(".memory-game-blocks");

//Create Array From Game Blocks
let blocks = Array.from(blocksContainer.children);

//Create Range Of Key
let orderRange = Array.from(Array(blocks.length).keys());

//console.log(orderRange);
Suhffle(orderRange);
//console.log(orderRange);

//Add Order  css Property To Game  Blocks
blocks.forEach((block, index) => {

    block.style.order =  orderRange[index];
});

//Suhffle Function

function Suhffle(array) {
    let current = array.length,
        temp,
        random;
    while (current > 0) {

        //Get Random Number
        random = Math.floor(Math.random() * current);

        //Decrease length By One
        current--;
        // 1 - Save Current Element in Stash
        temp = array[current];

        // 2 - Current Element = Random Element
        array[current] = array[random];

        // 3 - Random Element = Current Element in Stash
        array[random] = temp
    }
    return array;
}