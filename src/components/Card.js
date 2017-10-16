import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ header, title, children }) => (
  <div className="card">
    <div className="card-header text-muted">
      {header}
    </div>
    <div className="card-body">
      <h4 className="card-title">{title}</h4>
      {children}
    </div>
  </div>
);

Card.propTypes = {
  header: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.object
}

export default Card;