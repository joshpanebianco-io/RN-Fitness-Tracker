import * as React from 'react';
import { useState, useEffect } from 'react';
import { Modal, StyleSheet, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList, ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';

import AddExercise from './AddExercise';
import AddToWorkout from './AddToWorkout';

const MyModal = () => {
  const [visible, setVisible] = React.useState(false);
  const [text, setText] = React.useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [timer, setTimer] = useState(0); // State for the timer
  const [startTime, setStartTime] = useState(null); // State for start time

  const show = async () => {
    setVisible(true);
    const newStartTime = new Date().getTime();
    await AsyncStorage.setItem('startTime', newStartTime.toString());
    setStartTime(newStartTime); // Set start time
    startTimer(newStartTime);
  };

  const hide = () => {
    setVisible(false);
    clearInterval(intervalRef.current); // Clear the interval when hiding the modal
    setStartTime(null); // Reset start time
  };

  useEffect(() => {
    AsyncStorage.getItem('startTime').then(storedStartTime => {
      if (storedStartTime) {
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - parseInt(storedStartTime);
        setTimer(Math.floor(elapsedTime / 1000));
        setStartTime(parseInt(storedStartTime));
        startTimer(parseInt(storedStartTime));
      }
    });
  }, []);

  useEffect(() => {
    return () => clearInterval(intervalRef.current); // Cleanup function to clear the interval
  }, []);

  const startTimer = (startTime) => {
    clearInterval(intervalRef.current); // Clear existing interval
    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const elapsedTime = Math.floor((currentTime - startTime) / 1000);
      setTimer(elapsedTime); // Update timer
    }, 1000);
    intervalRef.current = intervalId; // Store the interval reference
  };

  const intervalRef = React.useRef(null); // Ref to store the interval

  const cancelWorkout = () => {
    hide(); // Hide the modal
    setTimer(0); // Reset the timer
  };

  return (
    <SafeAreaView style={styles.fill}>
      
      <Button
        title="Start Workout"
        buttonColor='#2196F3'
        mode="contained"
        onPress={show}
        labelStyle={{ fontSize: 16  }}
        style={{ marginTop: -20, marginHorizontal: 100 }}
      >
        Start Workout
      </Button>

      <Modal visible={visible} animationType='slide'>
      <GestureHandlerRootView>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <SafeAreaView style={[styles.fill, styles.white]}>
            <Button title="Hide" textColor='#2196F3' onPress={hide} style={{ marginTop: 50 }}>
              Close
            </Button>

            <View style={{ flex: 1, justifyContent: 'flex-start' }}>
              <Text style={{ marginTop: 10, textAlign: 'center', fontWeight: 'bold' }} variant="displaySmall">
                Session
              </Text>

              {/* Display the timer */}
              <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 10 }}>
                {Math.floor(timer / 60).toString().padStart(2, '0')}:{(timer % 60).toString().padStart(2, '0')}
              </Text>

              <Text style={{ marginLeft: 15, marginTop: 20, textAlign: 'left' }} variant="titleLarge">
                Notes
              </Text>
              <TextInput 
                theme={{ roundness: 12 }}
                mode='outlined'
                multiline
                numberOfLines={4}
                style={styles.textInput}
              />

              {/* <AddToWorkout /> */}
             
              <AddExercise />
              
              

              <Button
                icon="cancel"
                buttonColor="#DC143C"
                mode="contained"
                onPress={cancelWorkout} // Call cancelWorkout function
                style={{ marginTop: 20, marginBottom: 60, marginLeft: 15, marginRight: 15, borderRadius: 15 }}
              >
                Cancel Workout
              </Button>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
        </ScrollView>
      </GestureHandlerRootView>
      </Modal>
      
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  grey: {
    backgroundColor: '#DDD',
  },
  textInput: {
    backgroundColor: 'white',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
  }
});

export default MyModal;