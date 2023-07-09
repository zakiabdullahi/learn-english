let words = document.querySelector(".words");
const loading = document.querySelector('.loading');


const getWordsFromLocalStorage = () => {

    let words = JSON.parse(localStorage.getItem("words"));

    return words ? JSON.parse(localStorage.getItem("words")) : [];

}



let currentIndex = 0
let end = 10;
let data = getWordsFromLocalStorage();

const loadData = () => {







    console.log("before", currentIndex);
    console.log("before", end);
    data.splice(currentIndex, end).forEach((word) => {

        console.log(data);


        let WordContainer = document.createElement("div");
        WordContainer.classList.add("word");
        WordContainer.innerHTML += `
    
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
            `



        words.appendChild(WordContainer);

    })


    // currentIndex = end;
    // end = end + 10;




    // console.log("after curr", currentIndex);
    // console.log("after end", end);






}



loadData();
// loadData();
// loadData();



// console.log("secnond:")
// loadData();

const showLoading = () => {
    loading.classList.add('show');
}
window.addEventListener('scroll', function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {

        showLoading();



        this.setTimeout(() => {
            loading.classList.remove('show');
            loadData();

        }, 2000)




    }

});
