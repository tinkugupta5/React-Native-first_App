import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                {/* <View style={styles.square}>
                </View> */}
                <Text style={styles.text_one}>{props.text}</Text>
            </View>

            <View style={styles.circular}>
            </View>
        </View>
    )
}


// style

const styles = StyleSheet.create({

    item: {
        backgroundColor: '#E7F4FB',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#fff',
        // opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,

    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },

    text: {
        maxWidth: '80%',
        colors:'#fff',
        backgroundColor:'#fff',
    },

    circular: {
        width: 12,
        height: 12,
        borderColor: '#FF7878',
        borderWidth: 2,
        borderRadius: 5,
    },

    text_one:{
        color:'#000',
    }

})

export default Task