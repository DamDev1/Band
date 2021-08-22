const typewriterArray = [
    "A Web Developer",
    "A Developer",
    "I Love Design",
    "A Programmer",
    "A Youtuber"
];

let count = 0;
let index = 0;
let letter = "";
let currentText = "";

(function typewriter(){
    if(count === typewriterArray.length){
        count = 0; 
    }
    currentText = typewriterArray[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.writer').textContent = letter;

    if(letter.length === currentText.length){
        count++;
        index = 0
    }

    setTimeout(typewriter,200)
}())