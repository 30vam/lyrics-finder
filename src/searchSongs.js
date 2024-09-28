const searchEndpoint = 'https://api.genius.com/search?q=';

module.exports = async (searchQuery, requestConfig) => {
    const searchUrl = `${searchEndpoint}${encodeURIComponent(searchQuery)}`;
    console.log(requestConfig);
    try {
        const response = await fetch(searchUrl, requestConfig);

        if (!response.ok) {
            throw new Error(`Search API Error:\n Status code: ${response.status}`);
        }
            
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error trying to fetch from Genius Search API:', error);
    }
}