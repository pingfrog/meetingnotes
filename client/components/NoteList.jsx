import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionInfo from 'material-ui/svg-icons/action/info';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import {blue500, yellow600} from 'material-ui/styles/colors';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';

export default class NoteList extends React.Component {
  render() {
    return (
      <List>
        <ListItem
        leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
        rightIcon={<ActionInfo />}
        primaryText="Philip Meeting"
        secondaryText="Jan 20, 2014"
      />
      <ListItem
        leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
        rightIcon={<ActionInfo />}
        primaryText="Meeting notes"
        secondaryText="Jan 10, 2014"
      />
      </List>
    );
  }
}