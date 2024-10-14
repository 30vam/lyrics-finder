// Imports
import searchSongs from './requestModules/searchSongs';
import getSongData from './requestModules/getSongData';
import getLyrics from './requestModules/getLyrics';
import getVideo from './requestModules/getVideo';
import spinnerImgPath from './img/Double Ring@1x-1.0s-200px-200px.svg'

// Elements
const searchForm = document.querySelector('#search-form');
const searchQueryInput = searchForm.querySelector('#search-query-input');
const infoWrapper = document.querySelector('#info-wrapper');

// Variables
const geniusAccessToken = 'NgGLPuC2u63a8o4y1WDu4UNimeMEhPa8oRAl-ekIX37slfle5AUKzEV0oK0ZZo7F';
const youtubeAccessToken = 'AIzaSyAY0C1HEvG3MwyIXMpGnws236APRKF4UAg';
const customShadow = 'shadow-[0_2px_15px_rgba(0,0,0,0.5)]'

// Functions
const showSpinner = () => {
    // Empty the wrapper first
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

const createSongInfoDiv = (wrapper, hitData, songData) => {
    const songImg = document.createElement('img');
    songImg.classList.add('rounded-lg', 'max-h-[256px]', 'm-auto', customShadow);
    songImg.setAttribute('src', hitData.songImageUrl);

    const songInfo = document.createElement('ul');
    songInfo.classList.add('text-center', 'flex', 'w-full', 'flex-col', 'justify-evenly','gap-3', 'mt-2', 'bg-black', 'bg-opacity-35', customShadow, 'rounded-xl', 'p-4', 'mt-4', 'backdrop-blur-sm', 'md:flex-grow');
    const songTitle = document.createElement('li');

    songTitle.classList.add('font-bold', 'md:text-3xl', 'text-2xl');
    songTitle.innerText = `${ correctifySongName(hitData.title) }`;

    const artistName = document.createElement('li');
    artistName.classList.add('md:text-2xl', 'md:font-bold', 'font-semibold', 'text-xl');
    artistName.innerText = `${ hitData.artistName }`;

    const releaseDate = document.createElement('li');
    releaseDate.innerText = `${ hitData.releaseDate }`;

    // Show album name only if it exists
    let songAlbum = document.createElement('li');
    if (songData.response.song.album)
        songAlbum.innerText = `${ songData.response.song.album.name }`;
    else
        songAlbum.innerText = 'No album.';

    songInfo.append(songTitle, artistName, releaseDate, songAlbum);
    wrapper.append(songImg);
    wrapper.append(songInfo);
}

const createSongLyricsAndVideo = (wrapper, lyrics, songVideoData) => {
    // Only load the video if it exists
    const videoWrapper = document.createElement('div');
    videoWrapper.classList.add('w-full', 'mb-4', 'rounded-t-lg', 'aspect-video', 'flex', 'justify-center', 'items-center');
   
    if (songVideoData.items) {
        const videoId = songVideoData.items[0].id.videoId;
        const video = document.createElement('iframe');
        video.setAttribute('src', `https://www.youtube.com/embed/${videoId}`)
        video.setAttribute('allowfullscreen', true);
        video.classList.add('w-full');
        videoWrapper.append(video);
    }
    else {
        const videoPlaceHolder = document.createElement('div');
        videoPlaceHolder.classList.add('px-3');
        videoPlaceHolder.innerText = `Video currently not available - ${songVideoData}`;
        videoWrapper.append(videoPlaceHolder);
    }

    const lyricsWrapper = document.createElement('p');
    lyricsWrapper.classList.add('text-center', 'p-2');
    lyricsWrapper.innerText = lyrics;

    wrapper.append(videoWrapper, lyricsWrapper);
    
}

const displaySongWrapper = async (hitData) => {
    // Send the needed get requests first
    const songNameForLyricsApi = `${ hitData.artistName } - ${ correctifySongName(hitData.title) }`;
    showSpinner();
    const songData = await getSongData(hitData.id, geniusAccessToken);
    const songVideoData = await getVideo(`${ hitData.artistName } - ${ hitData.title } with lyrics`, 1, youtubeAccessToken);
    const lyrics = await getLyrics(songNameForLyricsApi);
    removeSpinner();

    // Create the necessary divs for displaying and fill them with the recieved data
    const songInfoAndImageWrapper = document.createElement('div');
    songInfoAndImageWrapper.classList.add('md:h-full', 'md:w-[256px]','rounded-xl', 'text-lg', 'flex', 'flex-col', 'items-center', 'md-semibold');
    const lyricsWrapper = document.createElement('div');
    lyricsWrapper.classList.add('md:text-left', 'md:overflow-y-auto', 'text-sm', 'md:text-lg', 'w-full', 'lg:w-1/2', 'hidden-scrollbar', 'bg-black', 'bg-opacity-35', customShadow, 'rounded-xl', 'backdrop-blur-sm');
    createSongInfoDiv(songInfoAndImageWrapper, hitData, songData);
    createSongLyricsAndVideo(lyricsWrapper, lyrics, songVideoData)
    
    // Change grid properties when showing song info
    infoWrapper.classList.remove('search-result-grid');
    infoWrapper.classList.add('song-info-flexbox');
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
    newItem.classList.add('rounded-2xl', 'relative', customShadow, 'overflow-clip', 'min-w-[256px]', 'h-[256px]');

    const itemThumbnail = document.createElement('img');
    itemThumbnail.classList.add('w-full', 'hover:scale-125', 'transition-all');
    itemThumbnail.setAttribute('src', hitData.songImageUrl);

    const songInfo = document.createElement('div');
    songInfo.classList.add('backdrop-blur-[2px]', 'hardware-accelerated-blur', 'text-base', 'bg-black', 'bg-opacity-20','hover:bg-opacity-40','shadow-[0px_4px_16px_rgba(17,17,26,0.5),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]','hover:text-orange-500', 'hover:cursor-pointer', 'transition-all', 'w-full', 'h-fit', 'p-2', 'text-center', 'absolute', 'bottom-0');
    songInfo.innerText = `${hitData.artistName} - ${hitData.releaseDate}`;

    const songTitle = document.createElement('div');
    songTitle.classList.add('font-bold', 'text-xl', 'mb-2');
    songTitle.innerText = hitData.title;

    // Event Listeners
    songInfo.addEventListener('click', () => displaySongWrapper(hitData));

    // Append elements to wrappers
    songInfo.prepend(songTitle);
    newItem.append(itemThumbnail);
    newItem.append(songInfo);

    return newItem;
}

const displaySearchResults = (searchResults) => {
    const hits = searchResults.response.hits;
    
    // Change grid properties when showing song info (different layout)
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

    showSpinner();
    const searchQuery = searchQueryInput.value;
    const searchResults = await searchSongs(searchQuery, geniusAccessToken); // We need to use await here, otherwise it will return the async FUNCTION instead of data, async functions ALWAYS return promise without waiting, so we need to use await

    // Show a text if results were empty
    if (searchResults.response.hits.length === 0) {
        const errorText = document.createElement('div');
        errorText.classList.add('text-lg', 'md:text-2xl', 'self-center', 'px-4', 'text-center', 'col-span-full');
        errorText.innerText = `No results were found for '${searchQuery}'.`;
        infoWrapper.innerText = '';  // Removes the spinner
        infoWrapper.append(errorText);
    }
        
    else
        removeSpinner();
    
    displaySearchResults(searchResults);
}

// Events
searchForm.addEventListener('submit', e => handleSearchRequest(e));
