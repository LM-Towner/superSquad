import React, { Component } from "react";
import { connect } from "react-redux";


class HeroList extends Component {
    render(){
        return <div>
            <h4 className="heading" >Your Hero Squad</h4>
            <ul className="list-group">
              {this.props.heroes.map(hero => {
                return (
                    <li key={hero.id} className="list-group-item">
                    <div className="list-item">{hero.name}</div>
                  </li>
                  );
              })}
            </ul>
          </div>;
    }
}

function mapStateToProps(state){
    console.log("this is state",state.heroes)
    return{
        heroes: state.heroes
    }
}

export default connect(mapStateToProps, null)(HeroList);