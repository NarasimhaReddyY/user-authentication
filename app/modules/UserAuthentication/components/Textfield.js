import React from 'react';

const Textfield = () => (
  <div>
    <input
      type="text"
      value={this.props.getValue()}
      onChange={(e) => this.props.setValue(e.target.value)}
    />
  </div>
);

export default Textfield;
