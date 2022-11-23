
import { Component } from 'react';

// import productsUrl from '../../functions/global';


class HeaderRender extends Component {
  constructor (props) {
    super(props);
    this.state = {
      headerItem: [],
    };
  }
  componentDidMount () {
    fetch("https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js")
    .then(response => response.json())
    .then(data => this.setState({ headerItem: data}));
  }
  render () {
    const HeaderS = this.state.headerItem.title;
    return (
      <div>
      {HeaderS}
      </div>
    );
  }
}


export default HeaderRender;
