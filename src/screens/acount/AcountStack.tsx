import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import HamburgerMenu from '../../components/HambugerMenu';

type Props = {
    // Drawer Navigation
    navigation: any
}
interface States {}
export default class AcountStack extends Component<Props, States>{
    constructor(props: Props) {
        super(props)
    }
    render() {
        const Stack = createStackNavigator();
        return(
            <Stack.Navigator>
                <Stack.Screen name="ログイン" component={LoginScreen} options={{
                    headerLeft: props => <HamburgerMenu navigation={this.props.navigation}/>,
                }}/>
            </Stack.Navigator>
        )
    }
}