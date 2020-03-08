import React, { Component } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabScreen from './Tab2';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

type Props = {}
interface States {}
export default class HomeScreen extends Component<Props, States> {
    
    constructor(props: Props) {
        super(props)
    }
    render() {
        const Tab = createBottomTabNavigator();
        return(
            <Tab.Navigator>
                <Tab.Screen name="TAB1" component={Tab1} />
                <Tab.Screen name="TAB2" component={Tab2} />
            </Tab.Navigator>
        )
    }
}