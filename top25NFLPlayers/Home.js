import React, { PureComponent } from 'react';

import footBallImage from './football.jpg';

import { View, Text, StyleSheet, Platform, Image } from 'react-native';

class Home extends PureComponent {
    static navigationOptions = {
        drawerLabel: "Home"
    }
    render() {
        console.log("this.props", this.props)
        return (
            <View style={styles.container}>
                <Image source={footBallImage} style={styles.image} />
                <Text style={styles.text}>Home</Text>
                <Text style={styles.text}>The Best 25 NFL Players.</Text>
                <Text style={styles.drawerText} onPress={() => this.props.navigation.navigate("PlayersList")}>Open Drawer</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 23,
        fontWeight: '800',
        fontFamily: Platform.select({
            ios: 'Chalkboard SE',
            android: 'sans-serif-condensed'
        })
    },
    image: {
        height: 150,
        width: 150,
    },
    drawerText: {
        color: '#33FF58',
    }
})

export default Home;