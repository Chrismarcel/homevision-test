import React from 'react'
import PropTypes from 'prop-types'

const ContentLoader = ({ size }) => {
  const loaderCards = Array(size).fill(null)
  return (
    <>
      {loaderCards.map((_, index) => {
        const computedKey = index + 1
        return (
          <div key={computedKey} className="card content-loader">
            <div className="image-wrapper">
              <div className="image-placeholder" />
            </div>
            <div className="home-details">
              <span className="homeowner" />
              <span className="address" />
              <span className="price" />
            </div>
          </div>
        )
      })}
    </>
  )
}

ContentLoader.propTypes = {
  size: PropTypes.number,
}

export default ContentLoader
