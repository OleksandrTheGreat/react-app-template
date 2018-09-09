import * as React from 'react';

export class Error extends React.Component<{error: any, info: any}> {

  render() {
    
    if (!this.props.error)
      return null;

    return (
      <div className="error">
        <div>Error: {this.props.error.message}</div>
        <div>{this.props.info.componentStack}</div>
      </div>);
  }
}
