// Imports
import searchSongs from './requestModules/searchSongs';
import getSongData from './requestModules/getSongData';
import getLyrics from './requestModules/getLyrics';

// Elements
const searchForm = document.querySelector('#search-form');
const searchQueryInput = searchForm.querySelector('#search-query-input');
const infoWrapper = document.querySelector('#info-wrapper');

// Variables
const accessToken = 'NgGLPuC2u63a8o4y1WDu4UNimeMEhPa8oRAl-ekIX37slfle5AUKzEV0oK0ZZo7F';

// Functions
const clearDiv = (divToClear) => {
    divToClear.replaceChildren();
}

const correctSongName = (songName) => {
    const parts = songName.split(/[\[\(]/); // Split at `[` or `(`
    return parts[0]; // Return the part before the split
}

const displaySongInfo = async (hitData) => {
    const songNameForLyricsApi = `${hitData.artistName}-${correctSongName(hitData.title)}`;

    clearDiv(infoWrapper);
    const songData = await getSongData(hitData.id, accessToken);
    const lyrics = await getLyrics(songNameForLyricsApi);

    // Change grid properties when showing song info
    //infoWrapper.classList.add("sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4");

    const songAndLyricsWrapper = document.createElement('div');
    songAndLyricsWrapper.classList.add('w-full', 'h-full', 'flex', 'flex-col', 'md:flex-row', 'text-center');
    const songInfoAndImageWrapper = document.createElement('div');
    songInfoAndImageWrapper.classList.add('w-full', 'h-fit', 'rounded-lg');
    const lyricsWrapper = document.createElement('div');
    lyricsWrapper.classList.add('text-center', 'md:text-left');
    lyricsWrapper.innerText = lyrics;
    const songImg = document.createElement('img');
    songImg.classList.add('w-full');
    songImg.classList.add('rounded-lg');
    songImg.setAttribute('src', hitData.songImageUrl);
    const songInfo = document.createElement('ul');
    songInfo.classList.add('text-center', 'flex', 'flex-col', 'gap-3', 'mt-2');
    const songTitle = document.createElement('li');
    songTitle.classList.add('font-bold');
    songTitle.innerText = `${ hitData.title }`;
    const artistName = document.createElement('li');
    artistName.innerText = `${ hitData.artistName }`;
    const releaseDate = document.createElement('li');
    releaseDate.innerText = `${ hitData.releaseDate }`;
    const songAlbum = document.createElement('li');
    songAlbum.innerText = `${ songData.response.song.album.name }`;

    songInfo.append(songTitle, artistName, releaseDate, songAlbum);
    songInfoAndImageWrapper.append(songImg);
    songInfoAndImageWrapper.append(songInfo);
    songAndLyricsWrapper.append(songInfoAndImageWrapper);
    infoWrapper.append(songAndLyricsWrapper, lyricsWrapper);
}

const returnHitData = (hit) => {
    const hitData = {
        id: hit.result.id,
        type: hit.type,
        title: hit.result.title,
        artistName: hit.result.artist_names,
        songImageThumbnailUrl: hit.result.header_image_thumbnail_url,
        songImageUrl: hit.result.header_image_url,
        artistHeaderImageUrl: hit.result.primary_artist.header_image_url,
        artistImageUrl: hit.result.primary_artist.header_image_url,
        releaseDate: hit.result.release_date_with_abbreviated_month_for_display
    }
        
    return hitData;
} 

const createNewSearchResult = (hitData) => {
    const newItem = document.createElement('div');
    newItem.classList.add('rounded-2xl', 'relative', 'bg-opacity-30', 'backdrop-blur-xl', 'hover:bg-opacity-60', 'overflow-clip', 'transition-all', 'min-w-[256px]', 'h-[256px]');
    const itemThumbnail = document.createElement('img');
    itemThumbnail.classList.add('w-full', 'hover:scale-125', 'transition-all');
    itemThumbnail.setAttribute('src', hitData.songImageUrl);
    const songInfo = document.createElement('div');
    songInfo.classList.add('backdrop-blur-[2px]', 'bg-black','bg-opacity-20', 'hover:bg-opacity-40','shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]','hover:text-orange-500', 'hover:cursor-pointer', 'transition-all', 'w-full', 'h-fit', 'py-2','text-center', 'absolute', 'bottom-0');
    songInfo.innerText = `${hitData.artistName} - ${hitData.releaseDate}`;
    const songTitle = document.createElement('div');
    songTitle.classList.add('font-bold', 'text-base', 'mb-2');
    songTitle.innerText = hitData.title;

    // Event Listeners
    songInfo.addEventListener('click', () => displaySongInfo(hitData));

    // Append elements to wrappers
    songInfo.prepend(songTitle);
    newItem.append(itemThumbnail);
    newItem.append(songInfo);

    return newItem;
}

const displaySearchResults = (searchResults) => {
    const hits = searchResults.response.hits;
    console.log(searchResults.response.hits);

    infoWrapper.classList.add('search-result-grid');

    for (const hit of hits) {
        const hitData = returnHitData(hit);
        const newSearchResult = createNewSearchResult(hitData);

        infoWrapper.append(newSearchResult);
    }
}

const handleSearchRequest = async (event) => {
    console.log('Handling search query...');
    event.preventDefault();

    const searchQuery = searchQueryInput.value;
    clearDiv(infoWrapper);
    // We need to use await here, otherwise it will return the async FUNCTION instead of data, async functions ALWAYS return promise without waiting, so we need to use await
    const searchResults = await searchSongs(searchQuery, accessToken);
    displaySearchResults(searchResults);

    //getLyrics('The Unforgive II');
}

// Events
searchForm.addEventListener('submit', e => handleSearchRequest(e));
