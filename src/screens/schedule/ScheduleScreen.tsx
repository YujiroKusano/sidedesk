import React, { Component } from "react";
import { View, Text } from "react-native";
import CustomCalendar from "../../components/CustomCalendar";

type Props = {
    navigation: any
}
interface States {}

export default class ScheduleScreen extends Component<Props, States> {
    constructor(props: Props) {
        super(props)
    }
    render() {
        return(
            <View>
                <Text> Schedule </Text>
                <CustomCalendar />
            </View>
        )
    }
}