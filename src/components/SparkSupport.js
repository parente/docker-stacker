import React from 'react';
import PropTypes from 'prop-types';

const SparkSupport = ({ enableSpark, onChange }) => {
  return (
    <div>
      <label className="form-check-label">
        <input className="form-check-input"
          type="checkbox"
          name="enableSpark"
          checked={enableSpark}
          onChange={onChange} />
        <span>Install Apache Spark 2.2.0 for Hadoop 2.7 or higher</span>
      </label>
    </div>
  );
};

SparkSupport.propTypes = {
  enableSpark: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default SparkSupport;