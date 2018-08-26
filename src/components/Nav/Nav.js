import React, { Component } from 'react';
import './Nav.css';
import Button from '../Button/Button.js';
import PropTypes from 'prop-types';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = event => {
    const { value } = event.target;
    if (value === 'PEOPLE') {
      this.props.getPeopleData();
    } else if (value === 'VEHICLES') {
      this.props.getVehicleData();
    } else if (value === 'PLANETS') {
      this.props.getPlanetData();
    }
  };

  render() {
    return (
      <div className="nav-wrapper">
        <div className="header-row">
          <h1 className="title-logo">SWAPI-Box</h1>
          <span className="fav-row">
            <Button onClick={this.props.toggleFavorites} activateButton={this.activateButton} name="FAVORITES" />
            <div className="fav-counter">{this.props.favoriteCount}</div>
          </span>
        </div>
        <div className="button-row">
          <Button onClick={this.handleClick} activateButton={this.activateButton} name="PEOPLE" />
          <Button onClick={this.handleClick} activateButton={this.activateButton} name="VEHICLES" />
          <Button onClick={this.handleClick} activateButton={this.activateButton} name="PLANETS" />
        </div>
      </div>
    );
  }
}

Nav.propTypes = {
  getPeopleData: PropTypes.func,
  getPlanetData: PropTypes.func,
  getVehicleData: PropTypes.func,
  toggleFavorites: PropTypes.func,
  favoriteCount: PropTypes.number
};

export default Nav;