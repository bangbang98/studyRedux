import React, { Component } from 'react';
import { connect } from 'react-redux';

class FoodDetail extends Component {
    render() {
        if (!this.props.activeFood) {
            return (
                <span>Select a food</span>
            )
        }
        return (
            <div className="row">
                <div className="col-8">
                    <img src={this.props.activeFood.image} alt={this.props.activeFood.name}
                        height={this.props.activeFood.image ? 100 : 0}
                        width={this.props.activeFood.image ? 100 : 0}
                    />
                </div>
                <div className="col-4">
                    <p>Food name: <b>{this.props.activeFood.name}</b></p>
                    <p>Food price: <b>{this.props.activeFood.price}</b> usd</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        activeFood: state.activeFood
    }
}

let FoodDetailContainer = connect(mapStateToProps)(FoodDetail);

export default FoodDetailContainer;
