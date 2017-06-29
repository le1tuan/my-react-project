import React from 'react'
import { Input, Menu } from 'semantic-ui-react'
import style from './index.css';
class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          activeItem: 'home',
        }
        this.handleItemClick = this.handleItemClick.bind(this);
    };

    handleItemClick(e, { name }) {
        this.setState({ activeItem: name })
    };

    render(){
        const { activeItem } = this.state;
        const s = {
            display: 'flex',
            flexDirection: 'row',
        }
        return(
            <header>
               <Menu fixed="top" style={s}>
                <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
                <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
                <Menu.Menu position='right'>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>
                <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
                </Menu.Menu>
            </Menu>            
            </header>
        )
    }
}
export default Header;