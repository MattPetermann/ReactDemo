// the "list item" or individual todo item component
class TodoItem extends React.Component {
    markCompleted = (event) => {
        this.props.onItemCompleted(this.props.id);
    }

    render() {
        var itemClass = this.props.completed ? "done" : "";
        return (
            <li className={itemClass}>
                <label>
                    <input type="checkbox" onChange={this.markCompleted} />
                    {this.props.text}
                </label>
            </li>
        );
    }
}


