import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Button } from "react-native-paper";
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';

import AddSet from "./AddSet";

const AddToWorkout = () => {
  const [addSetComponent, setAddSetComponent] = useState([]);

  const handleAddSetButtonClick = () => {
    setAddSetComponent(prevComponents => [...prevComponents, <AddSet key={prevComponents.length} />]);
  };

  const renderRightActions = (progress, dragX, index) => {
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
      <TouchableOpacity onPress={() => deleteSet(index)}>
        <View style={styles.deleteButton}>
          <Animated.Text style={{ transform: [{ scale }], color: 'white' }}>Delete</Animated.Text>
        </View>
      </TouchableOpacity>
    );
  };

  const deleteSet = (index) => {
    setAddSetComponent(prevComponents => prevComponents.filter((_, i) => i !== index));
  };

  return (
    <SafeAreaView>
      <View>
        {/* <Text style={styles.heading}>Bench Press (Barbell)</Text>
        <View style={styles.container}>
          <Text style={styles.text}>Set</Text>
          <Text style={styles.text}>Weight</Text>
          <Text style={styles.text}>Reps</Text>
          <Text style={styles.text}>Rest</Text>
        </View> */}

        
        {/* <View style={styles.container}>
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
        </View> */}

        <GestureHandlerRootView>
        {addSetComponent.map((_, index) => (
          <Swipeable
            key={index}
            renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, index)}
          >
            <AddSet />
          </Swipeable>
        ))}
        </GestureHandlerRootView>

        {/* <Button
          title="Start Workout"
          icon='plus'
          buttonColor='rgba(211, 211, 211, 0.3)'
          mode="contained"
          onPress={handleAddSetButtonClick}
          rippleColor='rgba(211, 211, 211, 0.4)'
          labelStyle={{ fontSize: 16, color: 'black', marginVertical: 5 }}
          style={{ marginTop: 17.5, marginBottom: 10, borderRadius: 15, marginHorizontal: 15, height: 30 }}
        >
          Add Set
        </Button> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

  textInputSet: {
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 15,
    marginTop: 10,
    width: 35,
    height: 30,
    backgroundColor: 'rgba(211, 211, 211, 0.3)',

  },
  textInputWeight: {
    backgroundColor: 'white',
    marginLeft: 30,
    marginRight: 15,
    marginTop: 10,
    width: 65,
    height: 30,
    backgroundColor: 'rgba(211, 211, 211, 0.3)',
  },
  textInputReps: {
    backgroundColor: 'white',
    marginLeft: 27,
    marginRight: 15,
    marginTop: 10,
    width: 55,
    height: 30,
    backgroundColor: 'rgba(211, 211, 211, 0.3)',
  },
  textInputRest: {
    backgroundColor: 'white',
    marginLeft: 23,
    marginRight: 15,
    marginTop: 10,
    width: 55,
    height: 30,
    backgroundColor: 'rgba(211, 211, 211, 0.3)',
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 30,
    borderRadius: 15,
    marginTop: 9,
    marginRight: 5,
    color: 'white',
    
   
  },
});

export default AddToWorkout;
