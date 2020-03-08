import React,{ Component } from "react";
import { View, Text } from "react-native";

type Props = {}
interface States {}

export default class Tab2 extends Component<Props, States> {
    constructor(props: Props) {
        super(props)
    }
    render() {
        return(
            <View>
                <Text> Tab2 </Text>
            </View>
        )
    }
}