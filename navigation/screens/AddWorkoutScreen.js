import * as React from 'react';
import { View,  } from 'react-native';
import MyModal from '../../components/MyModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';

export default function AddWorkoutScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
           <Text variant="displaySmall"
                style={{marginTop: -20, fontWeight: 'bold'}}
           >Create Workout</Text>

              <MyModal />
              <View style={{flex: 1, alignItems: 'flex-', justifyContent: 'flex-start'}}>
              <Text variant="headlineMedium"
                style={{marginTop: -20, fontWeight: 'bold'}}
           >Templates</Text>
              </View>
              
              
        </SafeAreaView>

        
    );
}