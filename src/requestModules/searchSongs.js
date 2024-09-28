const searchEndpoint = 'https://api.genius.com/search?q=';

module.exports = async (searchQuery, accessToken) => {
    const searchUrl = `${searchEndpoint}${encodeURIComponent(searchQuery)}&access_token=${accessToken}`;
    console.log('Requesting search URL:', searchUrl);

    try {
        const response = await fetch(searchUrl);

        if (!response.ok) 
            throw new Error(`Search API Error:\n Status code: ${response.status}`);
        
        const data = await response.json();
        console.log(data);
        
        return data;
    } catch (error) {
        console.log('Error trying to fetch from Genius Search API:', error);
    }
}