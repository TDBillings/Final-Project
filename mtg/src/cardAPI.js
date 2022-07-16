const apiHost = "http://api.scryfall.com/"

const defaults = {
  q:'legal:standard',
  order:'usd'
}


function getSearchURL (query = '', options = {}) {
  let q = query || 'legal:standard'
  let url = new URL('/cards/search', apiHost)
  options.q = q

  Object.keys(options).forEach(key => {
    url.searchParams.append(key, options[key])
  })
  return url
}

let searchCards = (query, options) => {
  let url = getSearchURL(query, options)
  console.log(url)
  return fetch(url.href)
}

export default searchCards


