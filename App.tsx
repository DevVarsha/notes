import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Note} from "./Note"

const Stack = createNativeStackNavigator();

const notes:Note[] = [
  {
    text:"Hello",
    title:"First",
    createDate: new Date("2023-10-24T11:27:04.084Z"),
    updateDate: new Date()
  },
  {
    text:"Hello2",
    title:"Second",
    createDate: new Date("2023-09-24T11:27:04.084Z"),
    updateDate: new Date()
  },
  {
    text:"Hello",
    title:"First",
    createDate: new Date("2023-08-24T11:27:04.084Z"),
    updateDate: new Date()
  },
  {
    text:"Hello2",
    title:"Second",
    createDate: new Date("2023-07-24T11:27:04.084Z"),
    updateDate: new Date()
  },
  {
    text:"Hello",
    title:"First",
    createDate: new Date("2023-06-24T11:27:04.084Z"),
    updateDate: new Date()
  },
  {
    text:"Hello2",
    title:"Second",
    createDate: new Date("2023-06-24T11:27:04.084Z"),
    updateDate: new Date()
  },
  {
    text:"Hello",
    title:"First",
    createDate: new Date("2023-04-24T11:27:04.084Z"),
    updateDate: new Date()
  },
  {
    text:"Hello2",
    title:"Second",
    createDate: new Date("2023-03-24T11:27:04.084Z"),
    updateDate: new Date()
  },
  {
    text:"Hello2",
    title:"Second",
    createDate: new Date("2023-02-24T11:27:04.084Z"),
    updateDate: new Date()
  },
  {
    text:"Hello",
    title:"First",
    createDate: new Date("2023-07-24T11:27:04.084Z"),
    updateDate: new Date()
  },
  {
    text:"Hello2",
    title:"Second",
    createDate: new Date("2023-07-24T11:27:04.084Z"),
    updateDate: new Date()
  }
]

export default function App() {

  const HomeComponent = () => (
    <Home notes={notes} />
)

  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Notes" component={HomeComponent}
        options={{
          title: 'Notes',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          //   fontSize: 38
          // },
          headerLargeTitle: true
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}