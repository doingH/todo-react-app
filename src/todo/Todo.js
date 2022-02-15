import React from 'react';
import {
    ListItem,
    ListItemText,
    InputBase,
    Checkbox,
    ListItemSecondaryAction,
    IconButton,
  } from "@material-ui/core";
import { DeleteOutlined } from '@material-ui/icons';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: props.item };
        this.delete = props.delete;
    }

    deleteEventHandler = () => {
        this.delete(this.state.item);
    };

    render() {
        function chkOnchange() {
            alert("1");
        }

        return (
            <ListItem>
                <Checkbox checked={this.state.item.done} />
                <ListItemText>
                    <InputBase
                        inputProps={{"aria-label": "naked"}}
                        type="text"
                        id={this.state.item.id}
                        name={this.state.item.id}
                        value={this.state.item.title}
                        multiline={true}
                        fullWidth={true}
                    >
                    </InputBase>
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton 
                        aria-label="Delete Todo"
                        onClick={this.deleteEventHandler}
                    >
                        <DeleteOutlined />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default Todo;