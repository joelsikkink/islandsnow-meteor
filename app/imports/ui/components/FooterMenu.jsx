import React from 'react';
import { Container, Header, Menu, Icon, Dropdown, Image, Grid, List, Input, Button } from 'semantic-ui-react';

class FooterMenu extends React.Component {
  render() {
    return (
        <div class="footer-background">
          <Grid container columns={3}>
            <Grid.Column>
              Navigation
              <hr/>
              <List>
                <List.Item>About us</List.Item>
                <List.Item>Videos</List.Item>
                <List.Item>Store Locations</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              Main Menu
              <hr/>
              <List>
                <List.Item>Men</List.Item>
                <List.Item>Women</List.Item>
                <List.Item>Kids</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              Connect
              <hr/>
              <List>
                <List.Item>Sign up for the latest updates</List.Item>
                <List.Item><Input placeholder="Enter email address" label={<Button color="black">Join</Button>} labelPosition="right"/></List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}