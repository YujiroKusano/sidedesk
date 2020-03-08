import React, { Component } from "react";
import HomeScreen from './HomeScreen';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import HamburgerMenu from '../../components/HambugerMenu';
import {
    Title
  } from 'react-native-paper';
type Props = {
    // Drawer Navigation
    navigation: any
}
interface States {}
export default class HomeStack extends Component<Props, States>{
    constructor(props: Props) {
        super(props)
    }
    render() {
        const Stack = createStackNavigator();
        return(
            <Stack.Navigator>
                <Stack.Screen name="ホーム" component={HomeScreen} options={{
                    headerTitle: props => <Title>ホーム</Title>,
                    headerLeft: props => <HamburgerMenu navigation={this.props.navigation}/>,
                }}/>
                <Stack.Screen name="サブ" component={HomeScreen} options={{
                    headerTitle: props => <Title>ホーム</Title>,
                    headerLeft: props => <HamburgerMenu navigation={this.props.navigation}/>,
                }}/>
            </Stack.Navigator>
        )
    }
}