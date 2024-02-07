import { React } from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { SafeAreaView, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native';
import { FlatList } from 'react-native';




const ExerciseList = () => {
    // Add in a category property *
    const exercises = [
        {name: 'Bench Press', id: '1'},
        {name: 'Squat', id: '2'},
        {name: 'Deadlift', id: '3'},
        {name: 'Pull Up', id: '4'},
        {name: 'Dumbbell Curl', id: '5'},
        {name: 'Shoulder Press', id: '6'},
        {name: 'Leg Press', id: '7'},
        {name: 'Calf Raise', id: '8'},
        {name: 'Tricep Extension', id: '9'},
        {name: 'Lat Pulldown', id: '10'},
    ];
    const sortedExercises = exercises.sort((a, b) => a.name.localeCompare(b.name));

    const [userInput, setUserInput] = useState('');

    const handleUserInput = (text) => {
        setUserInput(text);
    }


    const filterData = (item) => {
        //if the input is empty, return all the data
        if (userInput === "") {
            return (
                <View style={styles.itemContainer}>
                    <Text style={{color: 'white'}}>{item.name}</Text>
                </View>
            );
        }
        //if the input is not empty, return the data that includes the input
        if (item.name.toLowerCase().includes(userInput)) {
            return (
                <View style={styles.itemContainer}>
                    <Text style={{color: 'white'}}>{item.name}</Text>
                </View>
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
        backgroundColor: '#2196F3',
        paddingHorizontal: 36,
        paddingVertical: 16,
        borderRadius: 6,
    }
})

export default ExerciseList;