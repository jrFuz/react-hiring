import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TabBar } from 'antd-mobile';
import {withRouter} from 'react-router';
import { connect } from 'react-redux';


import './index.css'

@withRouter
@connect(
    state => state.chat,
    {}
)
class NavLinkBar extends Component {
    static propTypes = {
        data: PropTypes.array
    }
    state = {  }
    render() {
        const navList = this.props.data.filter(v => !v.hide)
        const {pathname} = this.props.location
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={this.state.hidden}
            >
                {navList.map(v => (
                    <TabBar.Item
                        badge={v.path === '/msg'? this.props.unread : ''}
                        title={v.text}
                        key={v.path}
                        icon={{uri: require(`./img/${v.icon}.png`)}}
                        selectedIcon={{ uri: require(`./img/${v.icon}-active.png`) }}
                        selected={pathname === v.path}
                        onPress={() => {
                            this.props.history.push(v.path)
                        }}
                    >
                    </TabBar.Item>
                ))}
            </TabBar>
        );
    }
}

export default NavLinkBar;