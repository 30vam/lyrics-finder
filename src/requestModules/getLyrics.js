module.exports = async (songTitle) => {
    const url = `https://some-random-api.com/lyrics?title=${songTitle}`;

    try {
        let result;
        const response = await fetch(url);

        if (!response.ok)
            throw new Error(`HTTP error! Status: ${response.status}`);
        
        const data = await response.json();
        const lyrics = data.lyrics;

        if (data.lyrics)
            result = `${data.lyrics}`;
        else
            result = 'Sorry, no lyrics available for this song.';

        console.log(result);
        return result;
    } 
    catch (error) {
        console.log(error);
        return `Sorry, no lyrics available for this song...`;
    }
}