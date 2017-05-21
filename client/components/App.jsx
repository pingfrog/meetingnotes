import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Note from './Note.jsx';
import Nav from './Nav.jsx';
import { Grid, Row, Col } from 'react-flexbox-grid';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="Zoe's App" />
          <Grid fluid>
            <Row>
              <Col lg={7} md={7} sm={8} xs={12}> 
                <Note/>
              </Col>
              <Col lg={5} md={5} sm={4} xs={0}> 
              <br/>
                <Nav/>
              </Col>
            </Row>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}