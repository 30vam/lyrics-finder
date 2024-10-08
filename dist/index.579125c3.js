// Packages
//import * as cheerio from 'cheerio';
// Elements
const searchForm = document.querySelector("#search-form");
const searchQueryInput = searchForm.querySelector("#search-query-input");
// Functions
/*const checkFileValidation = (fileList) => {
    console.log('Checking file format...');
    const allowedTypes = ['audio/mpeg', 'audio/mp4', 'audio/x-m4a', 'audio/mp4a-latm', 'audio/aac', 'application/x-cdf', 'audio/midi', 'audio/x-midi', 'audio/ogg', 'audio/wav', 'audio/3gpp', 'audio/3gpp2', 'audio/aacp', 'audio/adpcm', 'audio/aiff', 'audio/basic', 'audio/midi'];
    const fileSizeLimit = 512 * 1024; // 500KB
    
    for (const file of fileList) {
        if (!allowedTypes.includes(file.type))
            throw new Error (`'${file.name}' couldn't be uploaded, only audio files are supported.`);

        if (file.size >= fileSizeLimit) 
            throw new Error(`'${file.name}' couldn't be uploaded because it is larger than 500KB: ${ Math.round((file.size/(1024 * 1024)) * 100) / 100 } MB.`);
    }

    console.log('Valid file format.');
    console.log(new FormData(searchForm));
    return;
}


const fileToBase64 = (audioFile) => {
    if (audioFile) {
        const reader = new FileReader();
        
        // Define the onload event to handle the file reading
        reader.onload = function(e) {
            const base64String = e.target.result;
            // You can remove the data URL prefix if only the Base64 part is needed
            const base64Only = base64String.split(',')[1];
            console.log(base64Only); // Output only the Base64 string
        };

        reader.onerror = function(e) {
            console.log('There was an error reading the file');
        }
        
        // Read the file as a Data URL
        reader.readAsDataURL(audioFile);
    }
}

const sendSongDetectionRequest = async (base64) => {
    const axiosConfig = {
        method: 'POST',
        url: 'https://shazam.p.rapidapi.com/songs/detect',
        headers: {
          'x-rapidapi-key': 'e44e1c72e3msh0905c94f0658b24p19be5bjsnc70dafa60c54',
          'x-rapidapi-host': 'shazam.p.rapidapi.com',
          'Content-Type': 'text/plain'
        },
        data: base64
      };

    try {
        const response = await axios.request(axiosConfig);
        console.log('Upload successful');
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}*/ const getLyrics = async (songTitle)=>{
    const url = `https://some-random-api.com/lyrics?title=${songTitle}`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        const lyrics = data.lyrics;
        console.log(data);
        if (data.lyrics) console.log(`Lyrics: ${data.lyrics}`);
        else console.log("No lyrics found.");
    } catch (error) {
        console.log(error);
    }
};
const handleSearchRequest = (event)=>{
    console.log("Handling search query...");
    event.preventDefault();
    getLyrics("The Unforgiven II");
};
// Events
searchForm.addEventListener("submit", (e)=>handleSearchRequest(e));

//# sourceMappingURL=index.579125c3.js.map
