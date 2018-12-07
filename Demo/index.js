import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            newTodo: ""
        };

        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(event){
        this.setState ({
            newTodo: event.target.value
        });
    }

    handleAddItem = (event) => {
        event.preventDefault();

        var newItem = {
            id: Date.now(),
            text: this.state.newTodo,
            done: false
        }

        this.setState((prevState) => ({
            items: prevState.items.concat(newItem), // add to array
            newTodo: '' // clear the form
        }));
    }

    markItemCompleted = (itemId) => {
        var updatedItems = this.state.items.map(item => {
            if(itemId === item.id){
                item.done = !item.done;
            }

            return item;
        });

        this.setState({
            items: updatedItems
        });
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <TodoList items={this.state.items} onItemCompleted={this.markItemCompleted} />
                <form>
                    <input type="text" className="form-control" onChange={this.handleTextChange}
                        value={this.state.newTodo} />
                    <button onClick={this.handleAddItem}>Add</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));