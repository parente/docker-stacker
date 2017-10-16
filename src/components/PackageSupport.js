import React from 'react';
import PropTypes from 'prop-types';
import VirtualizedSelect from 'react-virtualized-select';

import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

const PackageSupport = (props) => (
  <div>
    <VirtualizedSelect
      name={props.name}
      placeholder="Select packages"
      multi={true}
      searchable={true}
      clearable={true}
      options={props.options}
      onChange={(item) => {
        props.onChange({ target: { name: props.name, value: item } })
      }}
      value={props.selected}
    />
  </div>
);

PackageSupport.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.array
};

export default PackageSupport;