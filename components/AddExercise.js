import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from './ExerciseList';
import { transparent } from 'react-native';
import ExerciseList from './ExerciseList';


const AddExercise = () => {
  const [visible, setVisible] = React.useState(false);
  const [text, setText] = React.useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const transparent = 'rgba(0, 0, 0, 0.3)';

  return (
    <SafeAreaView>
      
      <Button
        title="Start Workout"
        icon='plus'
        buttonColor='#2196F3'
        mode="contained"
        onPress={show}
        labelStyle={{ fontSize: 16 }}
        style={{ marginTop: 30, borderRadius: 15, marginHorizontal: 15 }}
      >
        Add Exercise
      </Button>
      
      <Modal visible={visible} animationType='fade' transparent={true} >
        
        <View style={{
                  flex: 1,
                  alightItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: transparent,
                  }}>
            <View style={{
                    backgroundColor: 'white',
                    borderRadius: 20,
                    marginHorizontal: 30,
                    width: '85%',
                    height: '85%',
                    }}>
              <ExerciseList hide={hide} />
              
            </View>
          </View>
          
      </Modal>
      
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({


  container: {

  },

  
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 130,
    paddingVertical: 340,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    alignItems: '',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'flex-start',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default AddExercise;