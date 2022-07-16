import React from "react"
import searchCards from '../cardAPI'

function Cards() {
  const limit = 10
  let lastSearch = ''

  const [cardData, setCardData] = React.useState([])
  const [searchParam, setSearchParam] = React.useState('')
  const [pageNum, setPageNum] = React.useState(1)

  React.useEffect(() => {
      if (lastSearch !== searchParam) setPageNum(1)
      async function fetchData() {
          try {
              let cards = await searchCards(searchParam)
              cards = await cards.json()
              console.log(cards)
              setCardData(cards.data)
          } catch (error) {
              console.log(error.message)
          }
      }
      fetchData()
  }, [searchParam])

  return (
      <>
          <input type="text" onChange={(event)=> setSearchParam(event.target.value)}></input>
          {cardData && cardData.filter((c, i) => i >= (pageNum -1) *  limit && i <= pageNum * limit - 1)
              .map(card => (
              <>
                <h1>{card.name}</h1>
                <h2>{card.prices.usd}</h2>
                {/* {console.log(card.image_uris)} */}
                {(card.image_uris && <img src={card.image_uris.small}/>) || <h2>No image</h2>}
              </>
          ))}
          <div>
              { pageNum > 1 && <button onClick={() => setPageNum(pageNum - 1)}>Previous</button> }
              Page: {pageNum}
              <button onClick={() => setPageNum(pageNum + 1)}>Next</button>
          </div>
      </>
  )

}

export default Cards