let Input = document.querySelector("#Inputword");
let options = document.querySelector("#options");
// let Paragraph = document.querySelector("#paragraph");
let Content = document.querySelector(".content");
console.log(options)

const getWordsFromLocalStorage = () => {

  let words = JSON.parse(localStorage.getItem("words"));

  return words ? JSON.parse(localStorage.getItem("words")) : [];

}
const getData = async () => {


  const response = await fetch(`./words.json`);

  let data = await response.json();
  return data;
  // console.log(data);

  // let filtred = data.filter((w) => w.word == Input.value);
  // console.log(filtred);

  // buildDom(filtred);
  // data.forEach((words) => {
  //     // console.log("word", words);




  // })



}
// getData().then((data)=>console.log(data))

options.addEventListener("change", () => {

  getData().then((data) => {

    if (!Input.value) return;

    let filtred = data.filter((w) => w.word == Input.value);


    if (options.value === "1") {
      displayAll(filtred);

    }
    if (options.value === "2") {
      displayDefinition(filtred);

    }
    if (options.value === "3") {
      displayExamples(filtred);

    }
    if (options.value === "4") {
      displaySynonyms(filtred);

    }
    if (options.value === "5") {
      displayAntonyms(filtred);

    }


    // console.log(filtred);


  })




})

const displayAll = (word) => {

  console.log(word)

  Content.innerHTML += `
    <div class="definition">
          <p id="paragraph">
            ${word[0].definition}
          </p>
        </div>

        <div class="examples">
        <h3>Examples:</h3>
        <span>${word[0].examples[0]}, </span>
        <span>${word[0].examples[1]} </span>
      </div>
      <div class="synonyms">
        <h3>Synonyms:</h3>
        <span>${word[0].synonyms[0]} </span>
        <span>${word[0].synonyms[1]} ,</span>
        <span>${word[0].synonyms[2]} ,</span>

      </div>
      <div class="antonyms">
        <h3>Antonyms:</h3>
        <span>${word[0].antonyms[0]} ,</span>
        <span>${word[0].antonyms[1]} ,</span>
        <span>${word[0].antonyms[2]} </span>
       
      </div>
      <div class="child">
          <label>Learn</label
          ><input type="checkbox" id="learn" name="learn" value="learn" />
        </div>
      
    
    `

  let Learn = document.querySelector("#learn");

  let words = {

    word: word[0].word,
    definition: word[0].definition,
    examples: [word[0].examples[0], word[0].examples[1]],
    synonyms: [word[0].synonyms[0], word[0].synonyms[1], word[0].synonyms[2]],
    antonyms: [word[0].antonyms[0], word[0].antonyms[1], word[0].antonyms[2]]


  }



  Learn.addEventListener("click", () => {
    // console.log("hi");
    console.log(words);

    let WordList = getWordsFromLocalStorage();


    WordList.push(words);


    localStorage.setItem("words", JSON.stringify(WordList));
    Input.value = "";
    Content.innerHTML = "";
    options.value = "0"
  })

  // if (Learn) {
  //     console.log("yes")
  // } else {
  //     console.log("no")
  // }


}
const displayDefinition = (word) => {

  console.log(word)

  Content.innerHTML = "";
  Content.innerHTML += `
    <div class="definition">
          <p id="paragraph">
            ${word[0].definition}
          </p>
        </div>

        
      

    
    `





}
const displayExamples = (word) => {

  console.log(word)

  Content.innerHTML = "";
  Content.innerHTML += `

  <div class="examples">
  <h3>Examples:</h3>
  <span>${word[0].examples[0]}, </span>
  <span>${word[0].examples[1]} </span>
</div>
  
    
    `





}
const displaySynonyms = (word) => {

  console.log(word)

  Content.innerHTML = "";
  Content.innerHTML += `

  <div class="synonyms">
  <h3>Synonyms:</h3>
  <span>${word[0].synonyms[0]}, </span>
  <span>${word[0].synonyms[1]} ,</span>
  <span>${word[0].synonyms[2]} </span>

</div>
  
    
    `

}
const displayAntonyms = (word) => {

  console.log(word)

  Content.innerHTML = "";
  Content.innerHTML += `

  <div class="antonyms">
  <h3>Antonyms:</h3>
  <span>${word[0].antonyms[0]} ,</span>
  <span>${word[0].antonyms[1]} ,</span>
  <span>${word[0].antonyms[2]} </span>
 
</div>
  
    `
}

