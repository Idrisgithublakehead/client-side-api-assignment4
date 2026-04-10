// this is the actual api key from the site
const apiKey = "14e3814b";

// get elements
const searchBtn = document.getElementById("searchBtn");
const input = document.getElementById("searchInput");
const output = document.getElementById("output");

// allow pressing Enter to search
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") searchBtn.click();
});

// runs when the button is clicked
searchBtn.addEventListener("click", () => {

    const movie = input.value.trim();

    if (!movie) {
        output.innerHTML = "<p class='error'>Please enter a movie title.</p>";
        return;
    }

    output.innerHTML = "<p class='loading'>Searching...</p>";

    // Step 1: Search for multiple results using the "s" parameter
    fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(movie)}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {

            if (data.Response === "False") {
                output.innerHTML = "<p class='error'>No movies found. Try a different title.</p>";
                return;
            }

            // Step 2: For each result, fetch full details using the imdbID
            const results = data.Search.slice(0, 6); // limit to 6 results
            const detailPromises = results.map(item =>
                fetch(`https://www.omdbapi.com/?i=${item.imdbID}&apikey=${apiKey}`)
                    .then(r => r.json())
            );

            return Promise.all(detailPromises);
        })
        .then(movies => {
            if (!movies) return;

            output.innerHTML = `
                <p class="result-count">${movies.length} result${movies.length !== 1 ? "s" : ""} found</p>
                <div class="results-grid">
                    ${movies.map(data => `
                        <div class="movie-card">
                            <div class="poster-wrap">
                                <img 
                                    src="${data.Poster !== "N/A" ? data.Poster : "https://via.placeholder.com/200x300?text=No+Poster"}" 
                                    alt="${data.Title} poster"
                                >
                                <div class="rating-badge">${data.imdbRating !== "N/A" ? "⭐ " + data.imdbRating : "N/A"}</div>
                            </div>
                            <div class="card-body">
                                <h2>${data.Title}</h2>
                                <p class="meta">${data.Year} &bull; ${data.Rated !== "N/A" ? data.Rated : ""} &bull; ${data.Runtime !== "N/A" ? data.Runtime : ""}</p>
                                <p class="genre">${data.Genre}</p>
                                <div class="detail-row">
                                    <span class="label">Director</span>
                                    <span>${data.Director !== "N/A" ? data.Director : "Unknown"}</span>
                                </div>
                                <div class="detail-row">
                                    <span class="label">Cast</span>
                                    <span>${data.Actors !== "N/A" ? data.Actors : "Unknown"}</span>
                                </div>
                                <p class="plot">${data.Plot !== "N/A" ? data.Plot : ""}</p>
                            </div>
                        </div>
                    `).join("")}
                </div>
            `;
        })
        .catch(error => {
            output.innerHTML = "<p class='error'>Error fetching data. Please try again.</p>";
        });
});