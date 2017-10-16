import React from 'react';
import PropTypes from 'prop-types';

const TextEditors = (props) => (
  <div>
    <p>Install text editors for use in the terminal</p>
    <div className="form-check">
      <label className="form-check-label">
        <input className="form-check-input"
          type="checkbox"
          name="enableEmacs"
          checked={props.enableEmacs}
          onChange={props.onChange} />
        <span>Emacs</span>
      </label>
    </div>
    <div className="form-check">
      <label className="form-check-label">
        <input className="form-check-input"
          type="checkbox"
          name="enableJed"
          checked={props.enableJed}
          onChange={props.onChange} />
        <span>JED</span>
      </label>
    </div>
    <div className="form-check">
      <label className="form-check-label">
        <input className="form-check-input"
          type="checkbox"
          name="enableVim"
          checked={props.enableVim}
          onChange={props.onChange} />
        <span>Vim</span>
      </label>
    </div>
  </div>
);

TextEditors.propTypes = {
  enableEmacs: PropTypes.bool,
  enableJed: PropTypes.bool,
  enableVim: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default TextEditors;