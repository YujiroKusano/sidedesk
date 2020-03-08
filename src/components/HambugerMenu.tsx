import Hamburger from 'react-native-animated-hamburger';
import React, { Component } from 'react';

type Props = {
    // Drawer Navigation
    navigation: any
}
interface Status {
    isActive: boolean
}
export default class HamburgerMenu extends Component<Props, Status> {
    constructor(props) {
        super(props)
        this.state = {
            isActive: false
        }
        this.onClickHamburger = this.onClickHamburger.bind(this)
    }
    onClickHamburger() {
        this.props.navigation.openDrawer();
    }
    render() {
        return(
            <Hamburger active={this.state.isActive} onPress={ this.onClickHamburger }/>
        );
    }
}