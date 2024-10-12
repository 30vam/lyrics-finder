// Imports
import searchSongs from './requestModules/searchSongs';
import getSongData from './requestModules/getSongData';
import getLyrics from './requestModules/getLyrics';
import spinnerImgPath from './img/Double Ring@1x-1.0s-200px-200px.svg'

// Elements
const searchForm = document.querySelector('#search-form');
const searchQueryInput = searchForm.querySelector('#search-query-input');
const infoWrapper = document.querySelector('#info-wrapper');

// Variables
const accessToken = 'NgGLPuC2u63a8o4y1WDu4UNimeMEhPa8oRAl-ekIX37slfle5AUKzEV0oK0ZZo7F';
const customShadow = 'shadow-[0_2px_15px_rgba(0,0,0,0.5)]'

// Functions
const showSpinner = () => {
    infoWrapper.replaceChildren();

    // Add spinner and center it
    const spinner = document.createElement('img');
    spinner.setAttribute('src', spinnerImgPath);
    spinner.setAttribute('alt', 'Loading info...');
    spinner.id = 'loading-spinner';
    spinner.classList.add('absolute', 'w-24' , 'h-24', 'top-1/2', 'left-1/2', 'translate-x-[-50%]');

    infoWrapper.classList.add('bg-black', customShadow);
    infoWrapper.append(spinner);
}

const removeSpinner = () => {
    // Remove spinner
    const spinner = infoWrapper.querySelector('#loading-spinner');
    infoWrapper.classList.remove('bg-black', customShadow);
    spinner.remove();
}

const correctifySongName = (songName) => {
    const parts = songName.split(/[\[\(]/); // Split at `[` or `(`
    return parts[0]; // Return the part before the split
}

const displaySongInfo = async (hitData) => {

    showSpinner();
    const songNameForLyricsApi = `${ hitData.artistName }-${ correctifySongName(hitData.title) }`;
    const songData = await getSongData(hitData.id, accessToken);
    const lyrics = await getLyrics(songNameForLyricsApi);
    removeSpinner();

    // Change grid properties when showing song info
    infoWrapper.classList.remove('search-result-grid');
    infoWrapper.classList.add('song-info-flexbox');

    const songInfoAndImageWrapper = document.createElement('div');
    songInfoAndImageWrapper.classList.add('md:h-fit', 'md:w-[256px]','rounded-lg', 'overflow-clip');
    const lyricsWrapper = document.createElement('div');
    lyricsWrapper.classList.add('text-center', 'md:text-left', 'md:overflow-y-auto', 'hidden-scrollbar','flex-1');
    lyricsWrapper.innerText = lyrics;
    const songImg = document.createElement('img');
    songImg.classList.add('rounded-lg', 'max-h-[256px]', 'm-auto');
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

    // Show album name if it exists
    let songAlbum = document.createElement('li');
    if (songData.response.song.album)
        songAlbum.innerText = `${ songData.response.song.album.name }`;
    else
        songAlbum.innerText = 'No album.';
    
    songInfo.append(songTitle, artistName, releaseDate, songAlbum);
    songInfoAndImageWrapper.append(songImg);
    songInfoAndImageWrapper.append(songInfo);
    infoWrapper.append(songInfoAndImageWrapper, lyricsWrapper);
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
    newItem.classList.add('rounded-2xl', 'relative', 'bg-opacity-30', customShadow, 'backdrop-blur-xl', 'hover:bg-opacity-60', 'overflow-clip', 'transition-all', 'min-w-[256px]', 'h-[256px]');
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
    
    // Change grid properties when showing song info
    infoWrapper.classList.remove('song-info-flexbox');
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

    showSpinner();
    const searchResults = await searchSongs(searchQuery, accessToken); // We need to use await here, otherwise it will return the async FUNCTION instead of data, async functions ALWAYS return promise without waiting, so we need to use await
    removeSpinner();
    displaySearchResults(searchResults);
}

// Events
searchForm.addEventListener('submit', e => handleSearchRequest(e));
