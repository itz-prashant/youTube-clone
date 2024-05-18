export const API_KEY = "AIzaSyD5f4hqyTQm4pc84-PnC1qsk9fNIOwXyWo"
const BASE_URL = "GET https://www.googleapis.com/youtube/v3"
export const YOUTUBE_VIDEO_API =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`
export const SEARCH_SUGGESTION_API = `https://youtube.googleapis.com/youtube/v3/search?key=${API_KEY}`