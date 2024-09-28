module.exports = async (songTitle) => {
    const url = `https://some-random-api.com/lyrics?title=${songTitle}`;

    try {
        const response = await fetch(url);
        if (!response.ok)
            throw new Error(`HTTP error! Status: ${response.status}`);
        
        const data = await response.json();
        const lyrics = data.lyrics;

        console.log(data);
        if (data.lyrics)
            console.log(`Lyrics: ${data.lyrics}`);
        else
            console.log('No lyrics found.');
    } 
    catch (error) {
        console.log(error);
    }
}