import ApiService from "./Api"

const BASE_URL = 'https://hacker-news.firebaseio.com/v0'
const client = new ApiService({ baseURL: BASE_URL })
const JSON_QUERY = '.json?print=pretty'

const PAGE_LIMIT = 20
const hackerNewsAPi = {}

const getPageSlice = (limit, page = 0) => ({
    begin: page * limit,
    end: ( page +1 ) * limit
})
const getPageValues = ({begin, end, items}) => items.slice(begin, end)

hackerNewsAPi.getTopStoryIds = () => client.get(`/topstories${JSON_QUERY}`)
hackerNewsAPi.getStory = id => client.get(`/item/${id}${JSON_QUERY}`)
hackerNewsAPi.getStoriesByPage = (ids, page) => {
    const {begin, end} = getPageSlice(PAGE_LIMIT, page)
    const activeIds = getPageValues({begin, end, items: ids})
    const storyPromises = activeIds.map(id => hackerNewsAPi.get(id))
    return Promise.all(storyPromises)
}

export default hackerNewsAPi