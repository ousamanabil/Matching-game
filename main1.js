//-----------Select The Start Game Button-------- 
document.querySelector(".control-buttons span").onclick = function () {
 //-----------Prompt Window To Ask Your Name-----
    let yourName = prompt("Whats Your Name");
 //-----------If The Name Empty------------------
    if (yourName == null || yourName == "") {
 //-----------Set Name To Unknown ---------------
        document.querySelector(".name span").innerHTML = "Unknown";
//-----------Name Is Not  Empty-----------------
    } else { 
//-----------Set Name To Your Name--------------
        document.querySelector(".name span").innerHTML = yourName;

    }
//-----------Remove Spash Screen----------------
    document.querySelector(".control-buttons").remove();

};
//--------------Var----------------------------
let duration = 1000;

let blocksContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blocksContainer.children);

//let orderRange = [...Array(blocks.length).keys()];

let orderRange = Array.from(Array(blocks.length).keys());

//console.log(orderRange);
Suhffle(orderRange);
//console.log(orderRange);

blocks.forEach((block, index) => {
    block.style.order = orderRange[index];
//-----------Add click event-----------------------
    block.addEventListener("click", function () {

//----------- Trigger The Block Function-------------
        flipBlock(block);

    });

});

//-----------Filp Block Function------------------------

function flipBlock(selectedBlock) {

    selectedBlock.classList.add('is-flipped');

 //-----------collect All fipped Card-------------------

    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

//-----------If There Two Selected Block----------------

    if (allFlippedBlocks.length === 2) {
        //console.log('theres flipped block  Selected');
        // Stop Clicking Function
        stopClicking();
        //Ckeck Matching  Block Function
        checkMatchedBlock(allFlippedBlocks[0], allFlippedBlocks[1]);
    }
}
//----------Stop Clicking Function------------------------
function stopClicking() {

//-----------No Class No Clicking on Main Container-------
    blocksContainer.classList.add("no-clicking");

    setTimeout(() => {

//-----------Remove Class  No Clicking After The Duration---
        blocksContainer.classList.remove("no-clicking");
    }, duration);
}

//-----------Ckeck Matching Function------------------------

function checkMatchedBlock(firstBlock, secondBlock) {
    let triesElement = document.querySelector(".tries span");

    if (firstBlock.dataset.technology === secondBlock.dataset.technology) {
        
        firstBlock.classList.remove("is-flipped");
        secondBlock.classList.remove("is-flipped");

        firstBlock.classList.add("has-match");
        secondBlock.classList.add("has-match");
        document.getElementById("success").play();

    } else {
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
        setTimeout(() => {

            firstBlock.classList.remove("is-flipped");
            secondBlock.classList.remove("is-flipped");
        }, duration);
        document.getElementById("fail").play();
    }
}
//-----------------Suhffle----------------------------------
function Suhffle(array) {
    let current = array.length,
        temp,
        random;
    while (current > 0) {
        random = Math.floor(Math.random() * current);
        current--;
        temp = array[current];
        array[current] = array[random];
        array[random] = temp;
    }
    return array;
}
