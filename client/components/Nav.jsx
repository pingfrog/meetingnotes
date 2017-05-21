import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import TaskAssignments from './TaskAssignments.jsx';
import NoteList from './NoteList.jsx';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
};

export default class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'tasks',
    };
    this.tasks = [{
      name: 'Sinead'
    },
    {
      name: 'Lizzie'
    }]
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Tasks" value="tasks">
          <div>
            {
              this.tasks.map((o, i) => {
                return <div key={o.name}>
                         <br/>
                         <TaskAssignments task={o}/>
                       </div>
              })
            }
          </div>
        </Tab>
        <Tab label="Notes" value="notes">
          <NoteList/>
        </Tab>
      </Tabs>
    );
  }
}