import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerItem } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
type Props ={
    navigation: any
}
export default class DrawerAcountItem extends Component<Props> {
    constructor(props: Props) {
        super(props)
    }
    render(){
        return(
            <TouchableOpacity　onPress={() => this.props.navigation.dispatch(DrawerActions.jumpTo('ログイン', {}))}>
              <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="login"
                  color={color}
                  size={size}
                />
              )}
              label="ログイン"
              onPress={() => {}}
              />
              </TouchableOpacity>
        )
    }
}