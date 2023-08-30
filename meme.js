const accessKey = "https://meme-api.com/gimme";
const generateButton = document.querySelector("#generate-button");
const memeTitle = document.querySelector("#title");
const memeImage = document.querySelector("#image");

const authorName = document.querySelector(".authors-name");

//fetch the meme api 
const generateMeme = () =>{
    fetch(accessKey).then((response) => response.json().then(data => {
        updateDetails(data.url, data.title, data.author);
    }));
};

//declaring the variable updateDetails
const updateDetails = (url, title, author) => {
memeImage.setAttribute("src", url);
memeTitle.innerHTML = title;
authorName.innerHTML = "Meme By: "+ author;

}

//adding an event listener to the generate meme button
generateButton.addEventListener("click", generateMeme);