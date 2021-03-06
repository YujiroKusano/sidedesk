import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerItem } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
type Props ={
    navigation: any
}
export default class DrawerGoogleItem extends Component<Props> {
    constructor(props: Props) {
        super(props)
    }
    render(){
        return(
            <TouchableOpacity　onPress={() => { alert("この機能はまだ開発中です") }}>
              <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="google"
                  color={color}
                  size={size}
                />
              )}
              label="Google"
              onPress={() => {}}
              />
              </TouchableOpacity>
        )
    }
}