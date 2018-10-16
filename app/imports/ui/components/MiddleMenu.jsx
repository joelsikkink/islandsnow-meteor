import React from 'react';
import { Container, Header, Menu, Icon, Dropdown, Image, Grid, List, Input, Button } from 'semantic-ui-react';

class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu">
          <Grid container centered columns={2}>
            <Dropdown item text="Men" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>Tank Tops</Dropdown.Item>
                <Dropdown.Item>Shirts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="Women" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>Tank Tops</Dropdown.Item>
                <Dropdown.Item>Shirts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="Kids" icon="dropdown">

              <Dropdown.Menu>
                <Dropdown.Item>Tank Tops</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="Brands" icon="dropdown"></Dropdown>
            <Menu.Item>Search</Menu.Item>
          </Grid>
        </Menu>
    );
  }
}