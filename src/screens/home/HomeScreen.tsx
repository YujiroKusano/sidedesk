import { View, Text } from "react-native";
import React, { Component } from "react";

type Props = {
    // Stack Navigation
    navigation: any
}
interface States {}
export default class HomeScreen extends Component<Props, States> {
    
    constructor(props: Props) {
        super(props)
    }
    render() {
        return(
            <View>
                <Text>Home</Text>
            </View>
        )
    }
}