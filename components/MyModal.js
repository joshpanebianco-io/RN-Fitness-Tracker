import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { Modal, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import AddExercise from './AddExercise';
import { FlatList, ScrollView } from 'react-native-gesture-handler';



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
              mode='outlined'
              multiline
              numberOfLines={4}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                marginLeft: 15,
                marginRight: 15,
                marginTop: 10,
              }}
            />

            <AddExercise />

            <Button
              icon="cancel"
              buttonColor="#DC143C"
              mode="contained"
              onPress={() => console.log('Pressed')}
              style={{ marginTop: 20, marginLeft: 15, marginRight: 15, borderRadius: 15 }}
            >
              Cancel Workout
            </Button>
          </View>
        </SafeAreaView>
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
});

export default MyModal;