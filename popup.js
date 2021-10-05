document.getElementById("searchbtn").addEventListener("click",findWord);

function findWord() {
    let word       = document.getElementById("word").value;
    let word1      = document.getElementById("word1");
    let definition = document.getElementById("definition");
    let example    = document.getElementById("example");
    let syn1       = document.getElementById("syn1");
    let syn2       = document.getElementById("syn2");
    let syn3       = document.getElementById("syn3");
    let syn4       = document.getElementById("syn4");

    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            document.querySelector(".container_body").style.display = "block";
            word1.innerHTML       = data[0]["word"];
            definition.innerHTML  = data[0]["meanings"][0]["definitions"][0]["definition"];
            example.innerHTML     = data[0]["meanings"][0]["definitions"][0]["example"];
            syn1.innerHTML        = data[0]["meanings"][0]["definitions"][0]["synonyms"][0];
            syn2.innerHTML        = data[0]["meanings"][0]["definitions"][0]["synonyms"][1];
            syn3.innerHTML        = data[0]["meanings"][0]["definitions"][0]["synonyms"][2];
            syn4.innerHTML        = data[0]["meanings"][0]["definitions"][0]["synonyms"][3];
        });
}

