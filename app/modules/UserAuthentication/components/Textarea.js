import React from 'react';

const Textarea = () => (
  <div>
    <textarea
      value={this.props.getValue()}
      onChange={(e) => this.props.setValue(e.target.value)}
    />
  </div>
);

export default Textarea;
