import React from 'react';
import Default from './default';
import Landing from './landing';
import SinglePageApplication from './spa';

export default class Index extends React.Component {

  render() {

    return (
      <Default>
        <SinglePageApplication user={this.props.user}  />
      </Default>
    )
  }

}
