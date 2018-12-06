//import React from 'react';
//import Button from '@material-ui/core/Button';
// the "app" component

// Components let you split the UI into independent,
// reusable pieces, and think about each piece in isolation.
// Conceptually, components are like JavaScript functions.
// They accept arbitrary inputs (called “props”) and return
// React elements describing what should appear on the screen.
class TodoApp extends React.Component {
    constructor(props) {
        super(props);

        // similar to $scope in angular
        this.state = {
            items: [],
            newTodo: ""
        };

        // bind "this" to the callback function when the object is created
        this.handleTextChange = this.handleTextChange.bind(this);
    }


    handleTextChange(event){
        //this.state.newTodo = event.target.value;
        this.setState({
            newTodo: event.target.value
        });
    }

    handleAddItem = (event) => {
        event.preventDefault();

        // create new todo
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
                    <div className="row">
                        <div className="col-md-3">
                        <TodoList items={this.state.items} onItemCompleted={this.markItemCompleted}/>
                    </div>
                </div>

                <form>
                    <div>
                        <input type="text" className="form-control" onChange={this.handleTextChange} value={this.state.newTodo} />
                    </div>
                    <div>
                        <button variant="contained" color="primary" onClick={this.handleAddItem}>Add</button>
                    </div>
                </form>
            </div>
        );
    }
}