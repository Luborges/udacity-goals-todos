import React from 'react';
import { connect } from 'react-redux';
import {
    handleAddGoal,
    handleDeleteGoal,
    toggleGoal
} from '../actions/goals';
import List from './List';

class Goals extends React.Component {
    addItem = (e) => {
        e.preventDefault();
        this.props.dispatch(handleAddGoal(
            this.input.value,
            () => this.input.value = '',
        ));
    }

    removeItem = (goal) => {
        this.props.dispatch(handleDeleteGoal(goal));
    }

    toggleItem = (id) => {
        this.props.dispatch(toggleGoal(id));
        /*return API.saveGoalToggle(id)
            .catch(() => {
                this.props.store.dispatch(toggleGoal(id));
                alert('An error occurred. Try again!')
            });*/
    }

    render () {
        return(
            <div>
                <h1>GOALS</h1>
                <input type='text' placeholder='Add Goal'
                    ref={(input) => this.input = input} />
                <button onClick={this.addItem}>Add Goal</button>
                <List items={this.props.goals} remove={this.removeItem}
                    toggle={this.toggleItem} />
            </div>
        );
    }
}

export default connect((state) => ({
    goals: state.goals,
}))(Goals);