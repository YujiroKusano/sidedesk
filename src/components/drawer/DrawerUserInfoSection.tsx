import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Avatar,
    Title,
    Drawer,
  } from 'react-native-paper';
type Props ={}
export default class DrawerUserInfoSection extends Component<Props>{
    render() {
        const styles = StyleSheet.create({
            drawerContent: {
              flex: 1,
            },
            userInfoSection: {
              paddingLeft: 20,
              paddingTop: 20
            },
            title: {
              marginTop: 20,
              fontWeight: 'bold',
            },
        });
        return(
            <View style={styles.userInfoSection}>
              <Avatar.Image
                source={{
                  uri:
                    'https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/58741823_781027778960041_1565226287574810624_n.jpg?_nc_cat=100&_nc_ohc=S_uPg_Xm2iAAX9o9CdJ&_nc_ht=scontent-nrt1-1.xx&oh=a09f8859e5300146000481d3557e9814&oe=5EB65CF7',
                }}
                size={50}
              />
              <Title style={styles.title}>Kusano Yujiro</Title>
            </View>
        );
        
    }
}