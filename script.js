let list_wisdom = ["Do or do not. There is no try.",
    "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.",
    "You must unlearn what you have learned.",
    "The greatest teacher, failure is.",
    "Once you start down the dark path, forever will it dominate your destiny. Consume you, it will.",
    "Always pass on what you have learned.",
    "Patience you must have my young Padawan.",
    "In a dark place we find ourselves, and a little more knowledge lights our way.",
    "Train yourself to let go of everything you fear to lose.",
    "Great warrior. Wars not make one great.",
    "You will find only what you bring in.",
    "Control, control, you must learn control!",
    "Difficult to see. Always in motion is the future.",
    "Named must your fear be before banish it you can.",
    "Many of the truths that we cling to depend on our point of view.",
    "Your path you must decide."
]

let text = document.getElementById("yoda_wisdom");
let yoda = document.getElementById("yoda");
let textContainer = document.querySelector(".speech");
const yoda_onclick = function () {
    console.log("Yoda clicked");
    let index = Math.floor(Math.random()*list_wisdom.length);
    console.log(index);
    text.innerHTML = list_wisdom[index];
    // for (let i=0; i<list_wisdom[index].length; i++) {
    //     setTimeout(() => {
    //         text.innerHTML += list_wisdom[index].charAt(i);
    //         console.log(list_wisdom[index].charAt(i));
    //     }, 1000);
    textContainer.style.animation = "none";
    setTimeout(() => {
        textContainer.style.animation = ''; // Restart
      }, 1);

}