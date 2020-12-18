import React, { Component } from 'react';

class Flat extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.selected !== nextProps.selected;
  }

  handleClick = () => {
    const { selectFlat, flat } = this.props;

    selectFlat(flat);
  }

  render() {
    const { flat, selected } = this.props;

    return (
      <div className={ selected ? "card active" : "card"} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${flat.imageUrl}')` }} onClick={this.handleClick}>
        <div className="card-category">
          {`${flat.price} ${flat.priceCurrency}`}
        </div>
        <div className="card-description">
          <h2>{flat.name}</h2>
        </div>
      </div>
    );
  }
}

export default Flat;
