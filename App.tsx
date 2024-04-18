import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { HomeScreen } from './src/containers/HomeScreen/HomeScreen';

export default function App() {
  return (
    <SafeAreaView style={{
      backgroundColor: '#5A45FE',
    }}>
      <HomeScreen />
      <StatusBar style="light" />

    </SafeAreaView>
  );
}
