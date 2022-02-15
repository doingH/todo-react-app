import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: props.item };
    }
    render() {
        function chkOnchange() {
            alert("1");
        }

        return (
            <div className='Todo'>
                <input 
                    type="checkbox" 
                    id={this.state.item.id}
                    name={this.state.item.id}
                    defaultChecked={this.state.item.done}/>

                <label id={this.state.item.id}> {this.state.item.id} </label>
            </div>
        );
    }
}

export default Todo;