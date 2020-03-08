import React, { Component } from "react";
import ScheduleScreen from './ScheduleScreen';
import { createStackNavigator } from '@react-navigation/stack';
import HamburgerMenu from '../../components/HambugerMenu';

type Props = {
    // Drawer Navigation
    navigation: any
}
interface States {}
export default class ScheduleStack extends Component<Props, States>{
    constructor(props: Props) {
        super(props)
    }
    render() {
        const Stack = createStackNavigator();
        return(
            <Stack.Navigator>
                <Stack.Screen name="スケジュール" component={ScheduleScreen} options={{
                    headerLeft: props => <HamburgerMenu navigation={this.props.navigation}/>,
                }}/>
            </Stack.Navigator>
        )
    }
}