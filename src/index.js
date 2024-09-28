// Imports
import getLyrics from './requestModules/getLyrics';
import searchSongs from './requestModules/searchSongs';

// Elements
const searchForm = document.querySelector('#search-form');
const searchQueryInput = searchForm.querySelector('#search-query-input');

// Variables
const accessToken = 'NgGLPuC2u63a8o4y1WDu4UNimeMEhPa8oRAl-ekIX37slfle5AUKzEV0oK0ZZo7F';

// Functions
const handleSearchRequest = async (event) => {
    console.log('Handling search query...');
    event.preventDefault();

    // We need to use await here, otherwise it will return the async FUNCTION instead of data, async functions ALWAYS return promise without waiting, so we need to use await
    const searchResults = await searchSongs('nirvana', accessToken);
    console.log(searchResults);
    //getLyrics('The Unforgive II');
}

// Events
searchForm.addEventListener('submit', e => handleSearchRequest(e));