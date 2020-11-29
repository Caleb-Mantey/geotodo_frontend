import React, {useState} from 'react';
import {
    ListGroupItem,
    ListGroupItemHeading,
    UncontrolledCollapse,
    Button,
    CardBody,
    Card,
    InputGroup,
    InputGroupAddon,
    Input
  } from "reactstrap";

const TodoListItem = (props) => {
    const { id,title, date} = props.item;
    const [text, setText] = useState("");

    const update = () => {
        props.onUpdate(id,text);
        setText("");
    }
    let dateObj = new Date(date)
    return ( 
    <ListGroupItem>
        <ListGroupItemHeading>
          {title} {"  "} {dateObj.toString().substr(0, dateObj.toString().indexOf("G") - 4)} {"   "}
          <Button
            color="primary"
            size="sm"
            id={`toggler${id}`}
            style={{ marginBottom: ".3rem" }}
          >
            Update
          </Button>{" "}
          <Button
            color="danger"
            size="sm"
            style={{ marginBottom: ".3rem" }}
            onClick={() => {props.onDelete(id)}}
          >
            Delete
          </Button>{" "}
        </ListGroupItemHeading>
        <UncontrolledCollapse toggler={`#toggler${id}`}>
          <Card>
            <CardBody>
              <InputGroup>
                <Input onChange={(e) => { setText(e.target.value)}} value={text}/>
                <InputGroupAddon addonType="prepend">
                  <Button onClick={() => {update()}}>Update</Button>
                </InputGroupAddon>
              </InputGroup>
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </ListGroupItem> );
}
 
export default TodoListItem;