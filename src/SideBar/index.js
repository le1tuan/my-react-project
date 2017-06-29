import React from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
class SideBar extends React.Component {
    render(){
        const style = {
            display: 'bloack',
            marginTop: '46px',
        }
        return(
            <div>
           <Sidebar as={Menu} width='thin' visible={true} style={style} icon='labeled' vertical inverted >
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
          </div>
        )
    }
}
export default SideBar;