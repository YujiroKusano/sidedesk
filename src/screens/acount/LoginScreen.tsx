import React,{ Component } from "react";
import { View, Text } from "react-native";

type Props = {
    navigation: any
}
interface States {}

export default class LoginScreen extends Component<Props, States> {
    constructor(props: Props) {
        super(props)
    }
    render() {
        return(
            <View>
                <Text> Login </Text>
            </View>
        )
    }
}