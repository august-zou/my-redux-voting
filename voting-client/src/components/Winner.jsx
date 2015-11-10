import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  minxins: [PureRenderMixin],

  render: function () {
    return <div ref="winner">
      Winner is {this.props.winner}!
    </div>; 
  }
});
