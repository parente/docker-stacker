import React from 'react';
import PropTypes from 'prop-types';

const PDFSupport = ({ enablePdf, onChange }) => {
  return (
    <div className="card-text">
      <label className="form-check-label">
        <input className="form-check-input"
          type="checkbox"
          name="enablePdf"
          checked={enablePdf}
          onChange={onChange} />
        <span>Install Pandoc and texlive to support conversion of notebooks to LaTeX and PDF files</span>
      </label>
    </div>
  );
};

PDFSupport.propTypes = {
  enablePdf: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default PDFSupport;