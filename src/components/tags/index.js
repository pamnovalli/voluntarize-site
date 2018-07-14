import React from 'react';
import { Badge } from 'reactstrap';

export default class Tags extends React.Component {
  render() {
    return (
      <div className="Interesses">
        {this.props.tags.map(tag =>(<Badge color="primary" pill>{tag}</Badge>))}
      </div>
    );
  }
}