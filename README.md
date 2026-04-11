# client-side-api-assignment4

# Client-Side API Assignment 4

## Project Description
This project is a movie search web app using the OMDb API. Users can search for a movie and view details like title, poster, year, genre, and plot.

## API Used
OMDb API  
https://www.omdbapi.com/

## Idris Zahir Contributions
- Set up GitHub repository and project files
- Created index.html structure and UI layout
- Styled the page using CSS (blue/red theme)\idris zahir
- Retrieved and activated OMDb API key
- Implemented JavaScript fetch() to connect to API
- Built movie search functionality using user input
- Displayed API data (title, poster, year, genre, plot)
- Completed first part of script and split commits
- Made multiple commits to show progress

## Tobi Abdulazeez Contributions
- Extended movie cards to display additional details: director, cast, runtime, MPAA rating, and IMDb score
- Refactored search to use OMDb's `?s=` endpoint for multi-result search, then fetched full details per result using `imdbID`
- Built responsive CSS grid layout to display up to 6 movie results simultaneously
- Added IMDb rating badge overlaid on poster images
- Added Enter key support for search input
- Redesigned UI typography using Bebas Neue and DM Sans fonts
- Added hover animations on cards (lift effect, poster zoom, red border glow)
- Added error and empty-state handling (blank input, no results found)
  
## Tuguldur Natsagdorj Contributions
- Enter Key Support.Users can now press the Enter key to search instead of clicking the button. 
- Improves usability and makes the app more user-friendly.
- A "Loading..." message appears while data is being fetched from the API.
- Gives immediate feedback to the user and improves perceived performance.
- Fetch request updated to include plot=full.
- Shows a more detailed movie description.
- Fade-in animation for results
- Input glow effect when focused
- Button click animation
- Improved overall user experience and interactivity

Client-side JS API project
