
// import React from 'react';
import PropTypes from 'prop-types';

function Card({ priceCardData }) {
  return priceCardData.map((val, index) => (
    <div key={index} className="card h-100 shadow-lg">
      <div className="card-body">
        <small className="plan text-muted">{val.plan}</small>
        <h2 className="card-title">${val.price}/month</h2>
        <hr />
        <p className="card-text">
          <Included />
          <span>{val.user} User</span>
          <br />
          <Included />
          <span>50GB Storage</span>
          <br />
          <Included />
          <span>Unlimited Public Projects</span>
          <br />
          <Included />
          <span>Community Access</span>
          <br />
          {index == 0 ? (
            <>
              <Excluded />
              <span className="excluded">Unlimited Private Projects</span>
            </>
          ) : (
            <>
              <Included />
              <span className="included">Unlimited Private Projects</span>
            </>
          )}
          <br />
          {index == 0 ? (

