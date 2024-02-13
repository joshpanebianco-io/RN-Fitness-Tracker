import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, Animated} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from './ExerciseList';
import { transparent, TouchableOpacity } from 'react-native';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';
import ExerciseList from './ExerciseList';
import AddSet from './AddSet';


const AddExercise = (  ) => {
  const [visible, setVisible] = React.useState(false);
  const [text, setText] = React.useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const [selectedExercises, setSelectedExercises] = useState([]);

  const [addSetComponent, setAddSetComponent] = useState([]);

  const handleAddSetButtonClick = (exerciseIndex) => {
    setSelectedExercises(prevExercises => {
      const updatedExercises = [...prevExercises];
      updatedExercises[exerciseIndex].sets.push({}); // Add an empty set
      return updatedExercises;
      
    });
  };

  // Function to add selected exercises to the workout
  const addToWorkout = (exercisesToAdd) => {
    const exercisesWithSets = exercisesToAdd.map(exercise => ({ ...exercise, sets: [{}] }));
    setSelectedExercises(prevExercises => [...prevExercises, ...exercisesWithSets]);
  };

  const deleteSet = (exerciseIndex, setIndex) => {
    setSelectedExercises(prevExercises => {
      const updatedExercises = [...prevExercises];
      updatedExercises[exerciseIndex].sets.splice(setIndex, 1); // Remove set at setIndex
      return updatedExercises;
    });
  };

  const renderRightActions = (progress, dragX, exerciseIndex, setIndex) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
  
    const translateX = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [0, -100], // Adjust this value to determine how far you can drag the delete button
      extrapolate: 'clamp',
    });

    return (
      <TouchableOpacity onPress={() => deleteSet(exerciseIndex, setIndex)}>
        <View style={styles.deleteButton}>
          <Animated.Text style={{ transform: [{ scale }], color: 'white' }}>Delete</Animated.Text>
        </View>
      </TouchableOpacity>
    );
  };


  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const transparent = 'rgba(0, 0, 0, 0.3)';

  return (
    <SafeAreaView>
      
      {selectedExercises.map((exercise, exerciseIndex) => (
        <View key={exerciseIndex}>
          <Text style={styles.heading}>{exercise.name}</Text>
          <View style={styles.container}>
            <Text style={styles.labelSet}>Set</Text>
            <Text style={styles.labelWeight}>Weight</Text>
            <Text style={styles.labelReps}>Reps</Text>
            <Text style={styles.labelRest}>Rest</Text>
          </View>
          

          <GestureHandlerRootView>
          {exercise.sets.map((_, setIndex) => (
            <Swipeable
              key={setIndex}
              renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, exerciseIndex, setIndex)}
            >
              <AddSet />
            </Swipeable>
          ))}
        </GestureHandlerRootView>

          <Button
            title="Start Workout"
            icon='plus'
            buttonColor='rgba(211, 211, 211, 0.3)'
            mode="contained"
            onPress={() => handleAddSetButtonClick(exerciseIndex)}
            rippleColor='rgba(211, 211, 211, 0.4)'
            labelStyle={{ fontSize: 16, color: 'black', marginVertical: 5 }}
            style={{ marginTop: 15, marginBottom: 5, borderRadius: 15, marginHorizontal: 15, height: 30 }}
          >
            Add Set
          </Button>
        </View>
      ))}


        

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
              <ExerciseList hide={hide} addToWorkout={addToWorkout} />
              
            </View>
          </View>
          
      </Modal>
      
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({


  // container: {
  //   flexDirection: 'row', // Align items horizontally
  //   justifyContent: 'flex-start', // Align items in the center horizontally
  //   alignItems: 'center', // Align items in the center vertically
  // },

  
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




  container: {
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'flex-start', // Align items in the center horizontally
    alignItems: 'center', // Align items in the center vertically
  },

  heading: {
    marginTop: 30,
    marginBottom: 17.5,
    marginLeft: 17,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2196F3',
  },

  text: {
    marginLeft: 21,
    marginRight: 35,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },


  labelSet: {
    marginLeft: 19,
    marginRight: 35,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },

  labelWeight: {
    marginLeft: 22,
    marginRight: 35,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },

  labelReps: {
    marginLeft: 25,
    marginRight: 35,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },

  labelRest: {
    marginLeft: 31,
    marginRight: 35,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },


  
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 25,
    borderRadius: 15,
    marginTop: 9,
    marginRight: 5,
    color: 'white',
    
   
  },


  // textInputSet: {
  //   backgroundColor: 'white',
  //   marginLeft: 20,
  //   marginRight: 15,
  //   marginTop: 10,
  //   width: 35,
  //   height: 30,
  //   backgroundColor: 'rgba(211, 211, 211, 0.3)',

  // },
  // textInputWeight: {
  //   backgroundColor: 'white',
  //   marginLeft: 30,
  //   marginRight: 15,
  //   marginTop: 10,
  //   width: 65,
  //   height: 30,
  //   backgroundColor: 'rgba(211, 211, 211, 0.3)',
  // },
  // textInputReps: {
  //   backgroundColor: 'white',
  //   marginLeft: 27,
  //   marginRight: 15,
  //   marginTop: 10,
  //   width: 65,
  //   height: 30,
  //   backgroundColor: 'rgba(211, 211, 211, 0.3)',
  // },
  // textInputRest: {
  //   backgroundColor: 'white',
  //   marginLeft: 23,
  //   marginRight: 15,
  //   marginTop: 10,
  //   width: 65,
  //   height: 30,
  //   backgroundColor: 'rgba(211, 211, 211, 0.3)',
  // },




});

export default AddExercise;