import * as React from 'react';
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native';
import { useState } from 'react';
import DatePicker from 'react-native-modern-datepicker';
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HistoryScreen({ navigation }) {

    const [open, setOpen] = useState(false); // Open and close the modal
    const [date, setDate] = useState(false); // Get the date from the calendar

    const today = new Date();
    const startDate = getFormatedDate(today.setDate(today.getDate() + 1), 'YYYY/MM/DD' );

    const handleOnPress = () => {
        setOpen(!open);
    }

    const handleChange = (propDate) => {
        setDate(propDate);
    }

    // *** Remember to put the Calender in its own component ***

    return (
        <SafeAreaView>
                <View >
                    <Pressable onPress={handleOnPress}>
                        <Text 
                            style={{ fontSize: 18, textAlign: 'right', color: '#2196F3' }}
                            marginRight={15}
                            marginTop={-35} 
                        >
                        Calendar
                        </Text>
                    </Pressable>
                    <Modal
                        visible={open}
                        animationType='slide'
                        transparent={true}
                        >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <DatePicker
                                mode='calendar'
                                minimumDate={startDate}
                                selected={date}
                                onDateChanged={handleChange}
                                />
                                <Pressable onPress={handleOnPress}>
                                    <Text  style={{ fontSize: 20, fontWeight: 'bold', color: '#2196F3' }}>Close</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                    <Text
                        onPress={() => navigation.navigate('Home')}
                        style={{ fontSize: 26, fontWeight: 'bold', textAlign: 'center' }}
                        >
                        History Screen
                    </Text>
                </View>
        </SafeAreaView>
        
        
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '90%',
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        


    }



})