import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectFood } from './../actions/index';

class FoodList extends Component {

    createFoodListItems() {
        let listItems = this.props.foods.map((eachFood) => {
            return (
                <li key={eachFood.id} style={{ listStyleType: 'none' }}
                    onClick={() => { this.props.selectFood(eachFood) }}
                >
                    <button style={{ border: 'none', backgroundColor: 'white' }}>
                        Food name: <b>{eachFood.name}</b>
                    </button>
                </li>
            )
        });
        return listItems;
    }

    createUserItems() {
        let listUsers = this.props.users.map((item) => {
            return (
                <li key={item.id}>
                    {item.firstName}
                    {item.lastName}
                </li>
            )
        })
        return listUsers;
    }
    render() {
        return (
            <div>
                {this.createFoodListItems()}
                {this.createUserItems()}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        foods: state.foods,
        users: state.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectFood: selectFood }, dispatch);
}

let FoodContainer = connect(mapStateToProps, mapDispatchToProps)(FoodList);

export default FoodContainer;
