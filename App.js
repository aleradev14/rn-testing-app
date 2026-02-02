import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { registerRootComponent } from 'expo';
import CategoryDetailsScreen from './screens/CategoryDetailsScreen';
import MainScreen from './screens/MainScreen';
import QuizScreen from './screens/QuizScreen';
import ResultScreen from './screens/ResultScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CategoryDetails"
          component={CategoryDetailsScreen}
          options={{ headerTitle: 'Details' }}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
