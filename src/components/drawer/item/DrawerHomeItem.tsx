import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerItem } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerActions, StackActions } from '@react-navigation/native';
type Props ={
    navigation: any
}
export default class DrawerHomeItem extends Component<Props> {
    constructor(props: Props) {
        super(props)
    }
    render(){
        return(
            // <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.jumpTo('ホーム', {}))}>
            <TouchableOpacity　onPress={() => this.props.navigation.dispatch(StackActions.push('サブ'))}>
                  <DrawerItem
                  icon={({ color, size }) => (
                  <MaterialCommunityIcons
                      name="home"
                      color={color}
                      size={size}
                  />
                  )}
                  label="ホーム"
                  onPress={() => {}}
                  />
              </TouchableOpacity>
        )
    }
}