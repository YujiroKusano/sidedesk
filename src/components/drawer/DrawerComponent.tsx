import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  Drawer,
} from 'react-native-paper';
import DrawerUserInfoSection from './DrawerUserInfoSection';
import DrawerHomeItem from './item/DrawerHomeItem';
import DrawerScheduleItem from './item/DrawerScheduleItem';
import DrawerAcountItem from './item/DrawerAcountItem';
import DrawerSettingItem from './item/DrawerSettingItem';
import DrawerGoogleItem from './item/sns/DrawerGoogleItem';
import DrawerTwitterItem from './item/sns/DrawerTwitterItem';
import DrawerFacebookItem from './item/sns/DrawerFacebookItem';
    type Props = {
        navigation: any
    };
    export function DrawerContent(props: Props) {
      return (
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
            <Drawer.Section>
              <DrawerUserInfoSection />
            </Drawer.Section>
            <Drawer.Section style={styles.drawerSection}>
              <DrawerHomeItem navigation={props.navigation}/>
              <DrawerScheduleItem navigation={props.navigation}/>
              <DrawerAcountItem navigation={props.navigation}/>
              <DrawerSettingItem navigation={props.navigation}/>
            </Drawer.Section>
            <Drawer.Section title="SNS">
              <DrawerGoogleItem navigation={props.navigation} />
              <DrawerTwitterItem navigation={props.navigation} />
              <DrawerFacebookItem navigation={props.navigation} />
            </Drawer.Section>
          </View>
        </DrawerContentScrollView>
      );
    }

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  drawerSection: {
    marginTop: 15,
  },
});