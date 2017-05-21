import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class TaskAssignments extends React.Component {

  constructor(props) {
    super(props);
    this.task = props.task;
  }

  render() {
    return (
        <Card initiallyExpanded={true}>
          <CardHeader
            title={this.task.name}
            actAsExpander={true}
            showExpandableButton={true}
            
          />
          <CardActions/>
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
        </Card>
    );
  }
}