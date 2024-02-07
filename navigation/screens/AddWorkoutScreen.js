import * as React from 'react';
import { View,  } from 'react-native';
import MyModal from '../../components/MyModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';

export default function AddWorkoutScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
           <Text variant="displaySmall"
                style={{marginTop: -20}}
           >Create Workout</Text>

              <MyModal />
        </SafeAreaView>

        
    );
}