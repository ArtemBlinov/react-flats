import React, { Component } from 'react';

class flat extends Component {
  handleClick = () => {
      this.props.selectFlat(this.props.index);
  }

  render() {
    return (
      <div class="card" style="background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg';);">
        <div class="card-category">150 EUR</div>
        <div class="card-description">
          <h2>Super 60m2 in trendy neighborhood!</h2>
        </div>
        <a class="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
