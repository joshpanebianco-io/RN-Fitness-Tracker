import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';

const AddSet = ({ setNumber }) => {

    return (
        
        <View style={styles.container}>
                <TextInput 
                  theme={{ roundness: 12 }}
                  mode='outlined'
                  disabled
                  style={styles.textInputSet}
                />
                <TextInput 
                  theme={{ roundness: 12 }}
                  mode='outlined'
                  style={styles.textInputWeight}
                />
                <TextInput 
                  theme={{ roundness: 12 }}
                  mode='outlined'
                  style={styles.textInputReps}
                />
                <TextInput 
                  theme={{ roundness: 12 }}
                  mode='outlined'
                  style={styles.textInputRest}
                />
                </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // Align items horizontally
        justifyContent: 'flex-start', // Align items in the center horizontally
        alignItems: 'center', // Align items in the center vertically
    },
    textInputSet: {
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 18,
        marginTop: 10,
        width: 35,
        height: 22.5,
        backgroundColor: 'rgba(211, 211, 211, 0.3)',
        
      },
      textInputWeight: {
        backgroundColor: 'white',
        marginLeft: 30,
        marginRight: 15,
        marginTop: 10,
        width: 65,
        height: 22.5,
        backgroundColor: 'rgba(211, 211, 211, 0.3)',
      },
      textInputReps: {
        backgroundColor: 'white',
        marginLeft: 27,
        marginRight: 15,
        marginTop: 10,
        width: 65,
        height: 22.5,
        backgroundColor: 'rgba(211, 211, 211, 0.3)',
      },
      textInputRest: {
        backgroundColor: 'white',
        marginLeft: 23,
        marginRight: 15,
        marginTop: 10,
        width: 65,
        height: 22.5,
        backgroundColor: 'rgba(211, 211, 211, 0.3)',
      },




      
      
})

export default AddSet;