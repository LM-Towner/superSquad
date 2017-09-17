import React, { Component } from "react";
import { connect } from "react-redux";

class Stats extends Component {
  strength() {
    let strength = 0;
    this.props.heroes.forEach(hero => (strength += hero.strength));
    return strength;
  }

  intelligence() {
    let intelligence = 0;
    let strength = 0;
    this.props.heroes.forEach(hero => (intelligence += hero.intelligence));
    return intelligence;
  }

  speed() {
    let speed = 0;
    this.props.heroes.forEach(hero => (speed += hero.speed));
    return speed;
  }
  render() {
    return (
      <div>
        <h4 className="heading" />
        <ul className="list-group">
          <li className="list-group-item">
            <div>
              <b>Overall Strength:</b> {this.strength()}
            </div>

            <div>
              <b>Overall Intelligence:</b> {this.intelligence()}
            </div>
            <div>
              <b>Overall Speed:</b> {this.speed()}
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes
  };
}

export default connect(mapStateToProps, null)(Stats);
