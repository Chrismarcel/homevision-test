import 'regenerator-runtime/runtime'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Hero from './components/Hero'
import './assets/styles/style.css'
import HouseCard from './components/HouseCard'
import { formatCurrency } from './helpers'

const API_URL = 'http://app-homevision-staging.herokuapp.com/api_project/houses?per_page=12'

const App = () => {
  const [listOfHouses, setListOfHouses] = useState([])
  const [fetching, setFetching] = useState(false)
  const [failedRequest, setFailedRequest] = useState(false)

  useEffect(() => {
    try {
      const fetchHouses = async () => {
        const response = await fetch(API_URL)
        const responseBody = await response.json()

        if (!responseBody.ok) {
          setFailedRequest(true)
          setFetching(false)
          throw new Error(responseBody.message)
        }

        setFetching(false)
        setFailedRequest(false)

        const { houses } = responseBody
        setListOfHouses([...listOfHouses, ...houses])
      }

      fetchHouses()
    } catch (error) {
      setFailedRequest(true)
      setFetching(false)
    }
  }, [fetching])

  return (
    <>
      <Hero />
      <main>
        {!failedRequest ? (
          <section className="listing">
            {listOfHouses.map(({ id, homeowner, photoURL, address, price }) => (
              <div className="card-wrapper" key={id}>
                <HouseCard
                  homeowner={homeowner}
                  img={photoURL}
                  address={address}
                  price={formatCurrency(price)}
                />
              </div>
            ))}
          </section>
        ) : (
          <div className="error-message-wrapper">
            <h4 className="error-message">
              An error occured while retrieving the list of houses.
            </h4>
            <button className="refresh-list" type="button" onClick={() => setFetching(true)}>
              Refresh list
            </button>
          </div>
        )}
      </main>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
