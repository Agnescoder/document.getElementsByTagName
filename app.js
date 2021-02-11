const btn = document.querySelector("button");
const liItems = document.querySelectorAll("li");

// const liItems = [...document.getElementsByTagName("li")];
// zamienione na tablice aby działało operator 'rest'

let fontSize = 10;

// Pętla
// btn.addEventListener("click", () => {
//     console.log("działa");

//     fontSize++
//     for (let i = 0; i < liItems.length; i++){
//     //     if(!liItems[i].style.display){
//     //         console.log("dodałam block");
//     //     liItems[i].style.display = "block";
//     // }

//     liItems[i].style.display = "block"
//     liItems[i].style.fontSize = `${fontSize}px`;
//     }

// })

// ForEach
btn.addEventListener("click", () => {
    liItems.forEach((liItems)=> {
        liItems.style.display = "block";
        liItems.style.fontSize = fontSize + "px";
    })
    fontSize++;
})

// SAMURAJ UDEMY  Projekt 3: Trening pętli for i metody forEach
// zadanie 1 - rozwiązanie
