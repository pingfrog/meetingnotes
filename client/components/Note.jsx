import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {red500, yellow500} from 'material-ui/styles/colors';

const style = {
  height: '100%',
  width: '100%',
  padding: 0,
  display: 'inline-block',
};

const styles = {
  title: {
    cursor: 'pointer',
  },
  note: {
    padding: 10
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
  },
  deleteButton: {
    marginRight: 10,
  }
};

const buttonstyle = {
  align: 'right'
};
export default class Note extends React.Component {
  render() {
    return (
      <div>
        <br/>
        <Paper style={style} zDepth={1}>
          <Toolbar>
            <ToolbarGroup firstChild={true}>

            </ToolbarGroup>
            <ToolbarGroup>
              <IconButton
                iconStyle={styles.deleteButton}
                style={styles.deleteButton}
                iconClassName="material-icons"
                tooltip="Delete">delete</IconButton>
              <FloatingActionButton>
                <ContentAdd />
              </FloatingActionButton>
            </ToolbarGroup>
            
          </Toolbar>

          <TextField
          floatingLabelText="Notes"
          underlineShow={false}
          multiLine={true}
          fullWidth={true}
          textareaStyle={{
            height: '100%'
          }}
          style={styles.note}
          rows={30}
          rowsMax={20000}/>
          <br/>
        </Paper>
      </div>
    );
  }
}