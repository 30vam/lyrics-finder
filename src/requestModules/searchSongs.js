const searchEndpoint = 'https://api.genius.com/search?q=';

module.exports = async (searchQuery, accessToken) => {
    const requestUrl = `${searchEndpoint}${encodeURIComponent(searchQuery)}&access_token=${accessToken}`;

    try {
        const response = await fetch(requestUrl);
        if (!response.ok) 
            throw new Error(`Search API Error:\n Status code: ${response.status}`);
        
        const data = await response.json();

        console.log(`Search results for '${searchQuery}':`);
        console.log(data);
        return data;
    } 
    catch (error) {
        console.log('Error trying to fetch from Search API:', error);
        return error;
    }
}