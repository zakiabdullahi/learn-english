
let words = document.querySelector(".words");
const getWordsFromLocalStorage = () => {

    let words = JSON.parse(localStorage.getItem("words"));

    return words ? JSON.parse(localStorage.getItem("words")) : [];

}


// const loadData = () => {


//     let data = getWordsFromLocalStorage();
//     data.forEach((word) => {
//         console.log(word)

//         words.innerHTML += `

//                     <div class="word">
//                     <h2>${word.word}</h2>
//                     <div class="definition">
//                     <p id="paragraph">
//                       ${word.definition}
//                     </p>
//                   </div>
//                   <div class="examples">
//                   <h3>Examples:</h3>
//                   <span>${word.examples[0]}, </span>
//                   <span>${word.examples[1]} </span>
//                 </div>
//                 <div class="synonyms">
//                 <h3>Synonyms:</h3>
//                 <span>${word.synonyms[0]} </span>
//                 <span>${word.synonyms[1]} ,</span>
//                 <span>${word.synonyms[2]} ,</span>

//               </div>
//               <div class="antonyms">
//               <h3>Antonyms:</h3>
//               <span>${word.antonyms[0]} ,</span>
//               <span>${word.antonyms[1]} ,</span>
//               <span>${word.antonyms[2]} </span>

//             </div>`


//     });
// }

var loadData = function () {



    let data = getWordsFromLocalStorage();



    data.forEach((word) => {

        words.innerHTML += `
        
                            <div class="word">
                            <h2>${word.word}</h2>
                            <div class="definition">
                            <p id="paragraph">
                              ${word.definition}
                            </p>
                          </div>
                          <div class="examples">
                          <h3>Examples:</h3>
                          <span>${word.examples[0]}, </span>
                          <span>${word.examples[1]} </span>
                        </div>
                        <div class="synonyms">
                        <h3>Synonyms:</h3>
                        <span>${word.synonyms[0]} </span>
                        <span>${word.synonyms[1]} ,</span>
                        <span>${word.synonyms[2]} ,</span>
        
                      </div>
                      <div class="antonyms">
                      <h3>Antonyms:</h3>
                      <span>${word.antonyms[0]} ,</span>
                      <span>${word.antonyms[1]} ,</span>
                      <span>${word.antonyms[2]} </span>
        
                    </div>`




    });


}
loadData();

// return data;


// }

// loadData();



window.addEventListener('scroll', function () {
    console.log("window.innerHeight " + window.innerHeight + "px");
    console.log("window.scrollY " + window.scrollY + "px");
    console.log("document.body.offsetHeight " + document.body.offsetHeight + "px");

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {


        loadData();
    }
});