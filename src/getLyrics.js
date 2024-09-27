import axios from 'axios';
import cheerio from 'cheerio-without-node-native';

const getLyrics = async (url) => {
    try {
		let { data } = await axios.get(url);
		const $ = cheerio.load(data);
        console.log($);
		let lyrics = $('div[class="lyrics"]').text().trim();
		if (!lyrics) {
			lyrics = '';
			$('div[class^="Lyrics__Container"]').each((i, elem) => {
				if ($(elem).text().length !== 0) {
					let snippet = $(elem)
						.html()
						.replace(/<br>/g, '\n')
						.replace(/<(?!\s*br\s*\/?)[^>]+>/gi, '');
					lyrics += $('<textarea/>').html(snippet).text().trim() + '\n\n';
				}
			});
		}
		//if (!lyrics) return null;
        console.log(lyrics);
		return lyrics.trim();
	} catch (e) {
        console.log(e);
		throw e;
	}
}

module.exports = { getLyrics };