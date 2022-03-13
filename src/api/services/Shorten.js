export async function shortenLink(link) {
  const API_URL = 'https://api.shrtco.de/v2/shorten?url=';

  try {
    const response = await fetch(API_URL + link);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
