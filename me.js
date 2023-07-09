// let container = document.querySelector(".container");

// const getWordsFromLocalStorage = () => {

//     let words = JSON.parse(localStorage.getItem("words"));

//     return words ? JSON.parse(localStorage.getItem("words")) : [];

// }

// let data = getWordsFromLocalStorage();



// let currentIndex = 0
// let end = 10;
// console.log(data);

// const loadData = () => {





//     // data.splice(0, 10).forEach((d) => {


//     //     console.log(d);
//     // })


//     console.log("before", currentIndex);
//     console.log("before", end);


//     data.splice(currentIndex, end).forEach((d) => {
//         console.log(d);


//         const element = document.createElement("div");
//         element.classList.add("word");



//         element.innerHTML += `
//         <h2>${d.word}</h2>
//         <div class="definition">
//         <p id="paragraph">
//         ${d.definition}
//         </p>
//             </div>
//             <div class="examples">
//             <h3>Examples:</h3>
//             <span>${d.examples[0]}, </span>
//             <span>${d.examples[1]} </span>
//             </div>
//             <div class="synonyms">
//             <h3>Synonyms:</h3>
//             <span>${d.synonyms[0]} </span>
//             <span>${d.synonyms[1]} ,</span>
//             <span>${d.synonyms[2]} ,</span>

//         </div>
//         <div class="antonyms">
//         <h3>Antonyms:</h3>
//         <span>${d.antonyms[0]} ,</span>
//         <span>${d.antonyms[1]} ,</span>
//         <span>${d.antonyms[2]} </span>
        
//         `;




//         container.appendChild(element);
//     })

//     // currentIndex = end;
//     // end = end + 10;
//     console.log("curr", currentIndex);
//     console.log("end", end);

//     console.log(data);


// }



// loadData();
// // loadData();

// window.addEventListener('scroll', function () {
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {


//         setTimeout(() => {

//             loadData();
//         }, 2000);

//     }

// });



