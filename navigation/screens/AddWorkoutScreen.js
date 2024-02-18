import * as React from 'react';
import { View,  } from 'react-native';
import MyModal from '../../components/MyModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';

export default function AddWorkoutScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1}} >
            <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                <Text variant="displaySmall"
                    style={{marginTop: -20, fontWeight: 'bold', textAlign: 'center'}}
                        >Create Workout
                </Text>

                <MyModal />
                <View style={{flex: 1,  
                                justifyContent: 'flex-start', marginLeft: 0, marginTop: -350}}>
                    <Text variant="headlineMedium"
                            style={{marginTop: -20, textAlign: 'center' ,   fontWeight: 'bold', }}
                        >Templates</Text>
                        <Text style={{fontWeight: 'bold', marginTop: 40, textAlign: 'center'}}>
                            My Templates (0)
                        </Text>

                        <Text style={{fontWeight: 'bold', marginTop: 40, textAlign: 'center'}}>
                            Example Templates (0)
                        </Text>
                </View>
            </View>
           

        </SafeAreaView>
 
    );
}