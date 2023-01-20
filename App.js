import React from 'react'
// import { StatusBar } from 'react-native'
import { StyleSheet,Text,View } from 'react-native';
import Task from './components/Task';

const App = () => {
  return (

    <View style={styles.container}>
      {/* todays Task */}

      <View style={styles.tasksWrapper}>

        <Text style={styles.sectionTitle}>Today's Task</Text>

        <View style={styles.items}>

          {/* This is where the task will go !  */}
          <Task text={'Task 1'} />
          <Task text={'Task 2'} />

        </View>

      </View>

    </View>
    
  )
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#E8EAED',
  },

  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },

sectionTitle:{
  fontSize:24,
  fontWeight:'bold',
  color:'#1A1A1A',
  
},
items:{
  marginTop:30,
},

})






export default App