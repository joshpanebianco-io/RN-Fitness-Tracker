import { React } from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, Pressable, TouchableOpacity } from 'react-native';
import { SafeAreaView, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native';
import { FlatList } from 'react-native';



const ExerciseList = () => {
    // Add in a category property *
    const exercises = [
        {name: 'Bench Press', category: 'Chest', id: '1'},
        {name: 'Squat', category: 'Quads', id: '2'},
        {name: 'Deadlift', category: 'Erectors', id: '3'},
        {name: 'Pull Up', category: 'Lats', id: '4'},
        {name: 'Dumbbell Curl', category: 'Biceps', id: '5'},
        {name: 'Shoulder Press', category: 'Shoulders', id: '6'},
        {name: 'Leg Press', category: 'Quads', id: '7'},
        {name: 'Calf Raise', category: 'Calves', id: '8'},
        {name: 'Tricep Extension', category: 'Triceps', id: '9'},
        {name: 'Lat Pulldown', category: 'Lats', id: '10'},
    ];
    const sortedExercises = exercises.sort((a, b) => a.name.localeCompare(b.name));

    const [userInput, setUserInput] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);
    
    const handleUserInput = (text) => {
        setUserInput(text);
    }

    const handleItemPress = (itemId) => {
        // Toggle the highlighted state of the item
        if (selectedItems.includes(itemId)) {
          // If the item is already highlighted, remove it from the highlightedItems array
          setSelectedItems(selectedItems.filter(id => id !== itemId));
        } else {
          // If the item is not highlighted, add it to the highlightedItems array
          setSelectedItems([...selectedItems, itemId]);
        }
      };


    const filterData = (item) => {
        //if the input is empty, return all the data
        if (userInput === "") {
            return (
                <TouchableOpacity 
                    activeOpacity={0.6} 
                    onPress={() => handleItemPress(item.id)}
                    
                    >
                    <View style={[
                        styles.itemContainer,
                        { backgroundColor: selectedItems.includes(item.id) 
                        ? styles.itemContainerSelected.backgroundColor 
                        : styles.itemContainer.backgroundColor }
                    ]}>
                        <View margin={-10} >
                            <Text style={{color: 'white', fontWeight: 'bold', justifyContent: 'flex-start'}}>{item.name}</Text>
                            <Text style={{color: 'white'}}>{item.category}  </Text>
                        </View>
                        
                        
                    </View>
                </TouchableOpacity>
            );
        }
        //if the input is not empty, return the data that includes the input
        if (item.name.toLowerCase().includes(userInput) || item.category.toLowerCase().includes(userInput)) {
            return (
                <TouchableOpacity 
                    activeOpacity={0.6} 
                    onPress={() => handleItemPress(item.id)}
                    
                    >
                    <View style={[
                        styles.itemContainer,
                        { backgroundColor: selectedItems.includes(item.id) 
                        ? styles.itemContainerSelected.backgroundColor  
                        : styles.itemContainer.backgroundColor }
                    ]}>
                        
                        <View margin={-10} >
                            <Text style={{color: 'white', fontWeight: 'bold', justifyContent: 'flex-start'}}>{item.name}</Text>
                            <Text style={{color: 'white'}}>{item.category}  </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }
    }

    return (
        <SafeAreaView style={{flex: 1, marginHorizontal: 20}}>
            <TextInput 
                style={styles.searchBar}
                placeholder='Search' 
                clearButtonMode='always'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={(text) => handleUserInput(text)}
                />
                <FlatList
                    data={sortedExercises}
                    renderItem = {({item, index}) => filterData(item) }
                        
                />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({

    searchBar: {
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 18,
    },

    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        marginHorizontal: 16,
        backgroundColor: 'rgba(33, 150, 243, 1)',
        paddingHorizontal: 36,
        paddingVertical: 16,
        borderRadius: 6,
    },

    itemContainerSelected: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        marginHorizontal: 16,
        backgroundColor: 'rgba(33, 150, 243, 0.3)',
        paddingHorizontal: 36,
        paddingVertical: 16,
        borderRadius: 6,
        
    }


})

export default ExerciseList;