import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerItem } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
type Props ={
    navigation: any
}
export default class DrawerSettingItem extends Component<Props> {
    constructor(props: Props) {
        super(props)
    }
    render(){
        return(
          <TouchableOpacity　onPress={() => this.props.navigation.dispatch(DrawerActions.jumpTo('設定', {}))}>
          <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="settings"
              color={color}
              size={size}
            />
          )}
          label="設定"
          onPress={() => {}}
          />
          </TouchableOpacity>
        )
    }
}