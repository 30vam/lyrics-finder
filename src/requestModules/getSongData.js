const songEndpoint =  'https://api.genius.com/songs/';

module.exports = async (songId, accessToken) => {
    const requestUrl = `${songEndpoint}${songId}?access_token=${accessToken}`;

    try {
        const response = await fetch(requestUrl);
        console.log(response);
        if (!response.ok)
            throw new Error(`Error trying to get song data - status code : ${response.status}`);

        const data = await response.json();
        console.log(data);
        return data;
    } 
    catch (error) {
        console.log('Error trying to fetch song data API:', error);
    }
}