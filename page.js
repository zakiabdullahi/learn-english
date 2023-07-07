let words = document.querySelector(".words");
const loading = document.querySelector('.loading');
const getWordsFromLocalStorage = () => {

  let words = JSON.parse(localStorage.getItem("words"));

  return words ? JSON.parse(localStorage.getItem("words")) : [];

}

const loadTenWords = () => {



  let data = getWordsFromLocalStorage();


  for (let i = 0; i < data.length; i++) {

    console.log("data", data[i]);
    words.innerHTML += `

                       <div class="word">
                            <h2>${data[i].word}</h2>
                            <div class="definition">
                            <p id="paragraph">
                              ${data[i].definition}
                            </p>
                          </div>
                          <div class="examples">
                          <h3>Examples:</h3>
                          <span>${data[i].examples[0]}, </span>
                          <span>${data[i].examples[1]} </span>
                        </div>
                        <div class="synonyms">
                        <h3>Synonyms:</h3>
                        <span>${data[i].synonyms[0]} </span>
                        <span>${data[i].synonyms[1]} ,</span>
                        <span>${data[i].synonyms[2]} ,</span>
                  
                      </div>
                      <div class="antonyms">
                      <h3>Antonyms:</h3>
                      <span>${data[i].antonyms[0]} ,</span>
                      <span>${data[i].antonyms[1]} ,</span>
                      <span>${data[i].antonyms[2]} </span>
                            
                            
                       </div>
                       
 
                    
                    `
    loading.classList.remove('show');

    if (i == 10) {

      break;

    }
  }

  data.forEach((word) => {

    // words.innerHTML += `

    //       <div class="word">
    //       <h2>${word.word}</h2>
    //       <div class="definition">
    //       <p id="paragraph">
    //         ${word.definition}
    //       </p>
    //     </div>
    //     <div class="examples">
    //     <h3>Examples:</h3>
    //     <span>${word.examples[0]}, </span>
    //     <span>${word.examples[1]} </span>
    //   </div>
    //   <div class="synonyms">
    //   <h3>Synonyms:</h3>
    //   <span>${word.synonyms[0]} </span>
    //   <span>${word.synonyms[1]} ,</span>
    //   <span>${word.synonyms[2]} ,</span>

    // </div>
    // <div class="antonyms">
    // <h3>Antonyms:</h3>
    // <span>${word.antonyms[0]} ,</span>
    // <span>${word.antonyms[1]} ,</span>
    // <span>${word.antonyms[2]} </span>

    // //                 </div>`

    // loading.classList.remove('show');




  });


}
loadTenWords();
const loadTwentyWords = () => {



  let data = getWordsFromLocalStorage();




  for (let i = 11; i < data.length; i++) {

    console.log("data", data[i]);
    words.innerHTML += `

                       <div class="word">
                            <h2>${data[i].word}</h2>
                            <div class="definition">
                            <p id="paragraph">
                              ${data[i].definition}
                            </p>
                          </div>
                          <div class="examples">
                          <h3>Examples:</h3>
                          <span>${data[i].examples[0]}, </span>
                          <span>${data[i].examples[1]} </span>
                        </div>
                        <div class="synonyms">
                        <h3>Synonyms:</h3>
                        <span>${data[i].synonyms[0]} </span>
                        <span>${data[i].synonyms[1]} ,</span>
                        <span>${data[i].synonyms[2]} ,</span>
                  
                      </div>
                      <div class="antonyms">
                      <h3>Antonyms:</h3>
                      <span>${data[i].antonyms[0]} ,</span>
                      <span>${data[i].antonyms[1]} ,</span>
                      <span>${data[i].antonyms[2]} </span>
                            
                            
                       </div>
                       
                       
 
                    
                    `
    loading.classList.remove('show');

    if (i == 19) {

      break;

    }
  }

  data.forEach((word) => {

    // words.innerHTML += `

    //       <div class="word">
    //       <h2>${word.word}</h2>
    //       <div class="definition">
    //       <p id="paragraph">
    //         ${word.definition}
    //       </p>
    //     </div>
    //     <div class="examples">
    //     <h3>Examples:</h3>
    //     <span>${word.examples[0]}, </span>
    //     <span>${word.examples[1]} </span>
    //   </div>
    //   <div class="synonyms">
    //   <h3>Synonyms:</h3>
    //   <span>${word.synonyms[0]} </span>
    //   <span>${word.synonyms[1]} ,</span>
    //   <span>${word.synonyms[2]} ,</span>

    // </div>
    // <div class="antonyms">
    // <h3>Antonyms:</h3>
    // <span>${word.antonyms[0]} ,</span>
    // <span>${word.antonyms[1]} ,</span>
    // <span>${word.antonyms[2]} </span>

    // //                 </div>`

    // loading.classList.remove('show');




  });


}


const showLoading = () => {
  loading.classList.add('show');


}
window.addEventListener('scroll', function () {
  console.log("window.innerHeight " + window.innerHeight + "px");
  console.log("window.scrollY " + window.scrollY + "px");
  console.log("document.body.offsetHeight " + document.body.offsetHeight + "px");

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    showLoading()

    setTimeout(() => {
      loadTwentyWords()

    }, 1000)


  }
});