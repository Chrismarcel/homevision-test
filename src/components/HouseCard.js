import React from 'react'
import PropTypes from 'prop-types'

const HouseCard = ({ homeowner, address, price, img }) => (
  <div className="card">
    <div className="image-wrapper">
      <img
        className="image"
        src={img}
        alt={`House owned by ${homeowner}, at ${address} priced at ${price}`}
      />
    </div>
    <div className="home-details">
      <h2 className="homeowner">{homeowner}</h2>
      <p className="address">{address}</p>
      <p className="price">{price}</p>
    </div>
  </div>
)

HouseCard.propTypes = {
  homeowner: PropTypes.string,
  address: PropTypes.string,
  price: PropTypes.string,
  img: PropTypes.string,
}

export default HouseCard
