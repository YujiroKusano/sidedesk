import React,{ Component } from "react";
import { View, Text } from "react-native";

type Props = {}
interface States {}

export default class Tab1 extends Component<Props, States> {
    constructor(props: Props) {
        super(props)
    }
    render() {
        return(
            <View>
                <Text> Tab1 </Text>
            </View>
        )
    }
}