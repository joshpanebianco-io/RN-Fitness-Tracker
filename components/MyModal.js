import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { Modal, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import AddExercise from './AddExercise';
import { FlatList, ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import AddToWorkout from './AddToWorkout';



const MyModal = () => {
  const [visible, setVisible] = React.useState(false);
  const [text, setText] = React.useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <SafeAreaView style={styles.fill}>
      
      <Button
        title="Start Workout"
        buttonColor='#2196F3'
        mode="contained"
        onPress={show}
        labelStyle={{ fontSize: 16 }}
        style={{ marginTop: -20 }}
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
              <Text style={{ marginTop: 10, textAlign: 'center', fontWeight: 'bold' }} variant="displayMedium">
                Session
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
                onPress={hide}
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