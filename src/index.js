// Imports
import getLyrics from './requestModules/getLyrics';
import searchSongs from './requestModules/searchSongs';

// Elements
const searchForm = document.querySelector('#search-form');
const searchQueryInput = searchForm.querySelector('#search-query-input');
const infoWrapper = document.querySelector('#info-wrapper');

// Variables
const accessToken = 'NgGLPuC2u63a8o4y1WDu4UNimeMEhPa8oRAl-ekIX37slfle5AUKzEV0oK0ZZo7F';

// Functions
const displaySearchResults = (searchResults) => {
    const hits = searchResults.response.hits;
    console.log(searchResults.response.hits);

    for (const hit of hits) {
        const id = hit.result.id
        const type = hit.type;
        const title = hit.result.title;
        const artistName = hit.result.artist_names;
        const songImageThumbnailUrl = hit.result.header_image_thumbnail_url;
        const songImageUrl = hit.result.header_image_url;
        const artistHeaderImageUrl = hit.result.primary_artist.header_image_url;
        const artistImageUrl = hit.result.primary_artist.header_image_url;
        const releaseDate = hit.result.release_date_for_display;
        
        const newItem = document.createElement('div');
        newItem.classList.add('rounded-2xl', 'absolute', 'bg-opacity-30', 'backdrop-blur-xl', 'hover:bg-opacity-60', 'overflow-clip', 'transition-all', 'w-1/3');
        const itemThumbnail = document.createElement('img');
        itemThumbnail.classList.add('w-full', 'hover:scale-125', 'transition-all');
        itemThumbnail.setAttribute('src', songImageThumbnailUrl);
        const songInfo = document.createElement('div');
        songInfo.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg','hover:text-orange-500', 'transition-all', 'w-full', 'h-[96px]', 'text-center', 'relative', 'top-[50%]');
        songInfo.innerText = `${title}\n${artistName} - ${releaseDate}`;

        infoWrapper.append(newItem);
        newItem.append(itemThumbnail);
        newItem.append(songInfo);
    }
}

const handleSearchRequest = async (event) => {
    console.log('Handling search query...');
    event.preventDefault();

    // We need to use await here, otherwise it will return the async FUNCTION instead of data, async functions ALWAYS return promise without waiting, so we need to use await
    const searchResults = await searchSongs('metallica', accessToken);
    displaySearchResults(searchResults);

    //getLyrics('The Unforgive II');
}

// Events
searchForm.addEventListener('submit', e => handleSearchRequest(e));