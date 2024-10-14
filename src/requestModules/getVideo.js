const youtubeSearchEndpoint = 'https://www.googleapis.com/youtube/v3/search';

module.exports = async (searchQuery, maxResult, accessToken) => {
    const requestUrl = `${youtubeSearchEndpoint}?part=snippet&q=${encodeURIComponent(searchQuery)}&maxResults=${maxResult}&key=${accessToken}`;

    try {
        const response = await fetch(requestUrl);

        if (!response.ok) 
            throw new Error(`Code ${response.status}`);
        
        const data = await response.json();
        
        console.log(`Video search result for '${searchQuery}':`);
        console.log(data);
        return data;
    } 
    catch (error) {
        console.log(error);
        return error;
    }
}