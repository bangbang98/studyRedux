import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';

class Product extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            status: '',
            weight: 0,
            // products: [
            //     {
            //         id: 1,
            //         image: 'https://honghot.net/wp-content/uploads/tong-hop-icon-mat-cuoi-chat-nhat-13.png',
            //         name: 'dog',
            //         weight: 10,
            //         status: true
            //     },
            //     {
            //         id: 2,
            //         image: 'https://honghot.net/wp-content/uploads/tong-hop-icon-mat-cuoi-chat-nhat-13.png',
            //         name: 'cat',
            //         weight: 3,
            //         status: true
            //     },
            //     {
            //         id: 3,
            //         image: 'https://honghot.net/wp-content/uploads/tong-hop-icon-mat-cuoi-chat-nhat-13.png',
            //         name: 'duck',
            //         weight: 3.5,
            //         status: true
            //     },
            //     {
            //         id: 4,
            //         image: 'https://honghot.net/wp-content/uploads/tong-hop-icon-mat-cuoi-chat-nhat-13.png',
            //         name: 'chicken',
            //         weight: 2.5,
            //         status: false
            //     },
            // ],
            isActive: true
        }
    }

    onTF = () => {
        if (this.state.isActive === true) {
            this.setState({
                isActive: false
            })
        } else {
            this.setState({
                isActive: true
            })
        }
        // this.setState({
        //     isActive: !this.state.isActive
        // })
    }
    handleClick = () => {
        alert('hello')
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleChangeStatus = (e) => {
        this.setState({
            status: e.target.value
        })
    }
    handleChangeWeight = (e) => {
        this.setState({
            weight: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(this.state);

        this.props.onAddTask(this.state);
        this.props.onAddTask();
    }

    render() {

        console.log(this.props.todos);
        const { todos } = this.props;
        let element = todos.map((item, index) => {
            return <tr key={index}>
                <th>{item.id}</th>
                <td>{item.name}</td>
                <td>{item.weight}</td>
            </tr>
        })
        // let pr = this.state.products;
        // let element = todos.map((item, index) => {
        //     let result = null;
        //     if (item.status) {
        //         result = <tr key={index}>
        //             <th scope="row">{item.id}</th>
        //             <td><img src={item.image} alt={item.name} style={{ width: 70, height: 50 }} /></td>
        //             <td>{item.name}</td>
        //             <td>{item.weight}</td>
        //         </tr>
        //     }
        //     return result;
        // });

        return (
            <div className="container"> <hr />
                <table className="table" style={{ margin: 'auto' }}>
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Name</th>
                            <th scope="col">Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        {element}
                    </tbody>
                </table>
                <button className="btn btn-sm btn-primary" onClick={this.onTF} > isActive: {this.state.isActive === true ? 'true' : 'false'}</button> &nbsp;
                <button className="btn btn-sm btn-success" onClick={this.handleClick}>Click Me !</button><hr />


                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.name} onChange={this.handleChange} /> &nbsp;
                    <input type="text" value={this.state.status} onChange={this.handleChangeStatus} /> &nbsp;
                    <input type="number" value={this.state.weight} onChange={this.handleChangeWeight} /> &nbsp;
                    <button type="submit" className="btn btn-sm btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStatetToProps = (state) => {
    return {
        todos: state.tasks
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddTask: (item) => {
            dispatch(actions.addTask(item));
        }
    }
}

export default connect(mapStatetToProps, mapDispatchToProps)(Product);
