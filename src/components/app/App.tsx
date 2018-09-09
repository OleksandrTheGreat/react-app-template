import * as React from 'react';
import {Error} from './Error';

export class App extends React.Component < {}, {
  error: any,
  info: any
} > {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      info: null
    };
  }

  componentDidCatch(error, info) {
    this.setState({error: error, info: info});
  }

  render() {

    if (this.state.error)
      return <Error error={this.state.error} info={this.state.info}/>;

    return (
      <div className="app">
		    React App template
      </div>
    );
  }
}
