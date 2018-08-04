import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

export default class Header extends Component {
  render() {
    return (
      <Menu size="large" borderless>
        <Menu.Menu position="right">
          <Menu.Item>
            <Icon name="twitter" />
          </Menu.Item>
          <Menu.Item>
            <Icon name="instagram" />
          </Menu.Item>
          <Menu.Item>
            <Icon name="github" />
          </Menu.Item>
          <Menu.Item>
            <Icon name="facebook" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
// <Icon link name="github" />
