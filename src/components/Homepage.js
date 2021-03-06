import React, { useEffect, useState, useCallback, useRef } from 'react'
import Hero from './Hero'
import ContentCard from './ContentCard'
import { formatCurrency } from '../helpers'
import { API_BASE } from '../helpers/constants'
import ContentLoader from './ContentLoader'

const Homepage = () => {
  const PER_PAGE = 12
  const [housesList, setHousesList] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [fetchedHouses, setFetchedHouses] = useState(false)
  const [fetchingFailed, setFetchingFailed] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const loadMoreTarget = useRef(null)

  const fetchHouses = useCallback(async (pageNumber) => {
    setIsFetching(true)
    setFetchingFailed(false)

    fetch(`${API_BASE}?per_page=${PER_PAGE}&page=${pageNumber}`)
      .then((response) => response.json())
      .then((responseBody) => {
        if (!responseBody.ok) {
          throw new Error(responseBody.message)
        } else {
          const { houses } = responseBody
          setHousesList((prevState) => [...prevState, ...houses])

          setIsFetching(false)
          setFetchedHouses(true)
        }
      })
      .catch(() => {
        setFetchingFailed(true)
        setFetchedHouses(false)
      })
      .finally(() => setIsFetching(false))
  }, [])

  const monitorScrollThreshold = useCallback((entries) => {
    const entry = entries[0]
    if (entry.isIntersecting) {
      setCurrentPage((prevState) => prevState + 1)
    }
  }, [])

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(monitorScrollThreshold, options)

    if (loadMoreTarget && loadMoreTarget.current) {
      const target = loadMoreTarget.current
      observer.observe(target)
    }

    return () => {
      if (loadMoreTarget && loadMoreTarget.current) {
        observer.unobserve(loadMoreTarget.current)
      }
    }
  }, [fetchedHouses])

  useEffect(() => {
    fetchHouses(currentPage)
  }, [currentPage])

  const fetchingError = !isFetching && fetchingFailed

  return (
    <>
      <Hero />
      <main className="container">
        <section className="listing">
          {housesList.map(({ id, homeowner, photoURL, address, price }) => (
            <div className="card-wrapper" key={id}>
              <ContentCard
                homeowner={homeowner}
                img={photoURL}
                address={address}
                price={formatCurrency(price)}
              />
            </div>
          ))}
          {isFetching && <ContentLoader size={PER_PAGE} />}
        </section>
        {fetchingError ? (
          <div className="error-message-wrapper">
            <h4 className="error-message">
              An error occured while retrieving the list of houses.
            </h4>
            <button
              className="btn primary refresh-list"
              type="button"
              onClick={() => fetchHouses(currentPage)}
            >
              Refresh list
            </button>
          </div>
        ) : null}
        {fetchedHouses ? <span ref={loadMoreTarget} className="load-more-target" /> : null}
      </main>
    </>
  )
}

export default Homepage
