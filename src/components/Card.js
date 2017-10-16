import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ header, title, children }) => (
  <div className="card">
    <div className="card-header">
      {header}
    </div>
    <div className="card-body">
      <h4 className="card-title">{title}</h4>
      <div className="card-text">
        {children}
      </div>
    </div>
  </div>
);

Card.propTypes = {
  header: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.any
}

export default Card;