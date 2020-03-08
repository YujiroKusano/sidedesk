import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingScreen from './SettingScreen';
import HamburgerMenu from '../../components/HambugerMenu';

type Props = {
    // Drawer Navigation
    navigation: any
}
interface States {}
export default class SettingStack extends Component<Props, States>{
    constructor(props: Props) {
        super(props)
    }
    render() {
        const Stack = createStackNavigator();
        return(
            <Stack.Navigator>
                <Stack.Screen name="設定" component={SettingScreen} options={{
                    headerLeft: props => <HamburgerMenu navigation={this.props.navigation}/>,
                }}/>
            </Stack.Navigator>
        )
    }
}