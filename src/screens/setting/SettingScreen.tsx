import React,{ Component } from "react";
import { View, Text } from "react-native";

type Props = {
    navigation: any
}
interface States {}

export default class SettingScreen extends Component<Props, States> {
    constructor(props: Props) {
        super(props)
    }
    render() {
        return(
            <View>
                <Text> Settings </Text>
            </View>
        )
    }
}