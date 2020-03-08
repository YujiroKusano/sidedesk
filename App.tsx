import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './src/screens/home/HomeStack';
import ScheduleStack from './src/screens/schedule/ScheduleStack';
import AcountStack from './src/screens/acount/AcountStack';
import SettingStack from './src/screens/setting/SettingStack';
import { DrawerContent } from './src/components/drawer/DrawerComponent';

type Props = {}
interface Status {}
export default class App extends Component<Props, Status>{
  constructor(props:Props) {
    super(props)
  }
  
  render() {
    const Drawer = createDrawerNavigator()
    return(
      <NavigationContainer>
      <Drawer.Navigator initialRouteName="ホーム" drawerContent={props => DrawerContent(props)}>
        <Drawer.Screen name="ホーム" component={HomeStack}/>
        <Drawer.Screen name="スケジュール" component={ScheduleStack} />
        <Drawer.Screen name="ログイン" component={AcountStack} />
        <Drawer.Screen name="設定" component={SettingStack} />
      </Drawer.Navigator>
      </NavigationContainer>
    );
  }  
};