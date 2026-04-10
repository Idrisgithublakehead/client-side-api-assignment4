// this is the actual api key from the site
const apiKey = "14e3814b";

//then we can do the get elements document 
const searchBtn = document.getElementById("searchBtn");
const input = document.getElementById("searchInput");
const output = document.getElementById("output");

// this below runs when the button is actually clicked
searchBtn.addEventListener("click", () => {

    // then we can get the suersinput of what they subvmitted
    const movie = input.value;

    // call the OMDb API
    fetch(`https://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`)
        .then(response => response.json()) // convert response to JSON

                .then(data => {

            // then if  thje movie movie not found
            if (data.Response === "False") {
                output.innerHTML = "Movie not found";
                return;
            }

            
            output.innerHTML = `
                <h2>${data.Title}</h2>
                <img src="${data.Poster}" alt="${data.Title}">
                <p><strong>Year:</strong> ${data.Year}</p>
                <p><strong>Genre:</strong> ${data.Genre}</p>
                <p><strong>Plot:</strong> ${data.Plot}</p>
            `;
        })
        .catch(error => {
            // this code below actually  handle errors
            output.innerHTML = "Error fetching data";
        });
});