import React, { Component } from 'react';
import { Calendar } from 'react-native-calendars';
type Props = {}
export default class CustomCalendar extends Component {
    constructor(props: Props) {
        super(props)
    }
    render() {
        return(
            <Calendar />
        )
    }
}
