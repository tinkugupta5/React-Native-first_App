import React, {useState} from 'react'
// import { StatusBar } from 'react-native'
import { Keyboard, KeyboardAvoidingView, StyleSheet,Text,TextInput,TouchableOpacity,View} from 'react-native';
import Task from './components/Task';

const App = () => {

  const [task,setTask] = useState();
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  const [taskItems,setTaskItems] = useState([]);
  console.log('task value',task)
  console.log('taskitem value',taskItems);

// add task
  const handleAddTask = () => {
    // console.log(task);
    Keyboard.dismiss();
    setTaskItems([...taskItems,task])
    console.log(...taskItems);
    setTask(null)
  }

  
// delete tast
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);

    setTaskItems(itemsCopy);
  }

  return (

    <View style={styles.container}>
      {/* todays Task */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
        <Text style={styles.sectionSmall}>Date: {date + '-' + month + '-' + year}</Text>
        <View style={styles.items}>
          {/* This is where the task will go !  */}
          {taskItems.map((item,index) => {
            return (
            <TouchableOpacity key={index}  onPress={() => {completeTask(index)} }>              
              <Task text={item}/>
            </TouchableOpacity>
            )
          })}
          
        </View>
      </View>

      {/* Write a task */}

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height" }
      style={styles.writeTaskWrapper}>

        <TextInput style={styles.input} letterSpacing={3} placeholder={'Write a task'} placeholderTextColor="#fff" value={task} onChangeText={text=>setTask(text)} />
      {/* {console.log(text)}   */}
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText} >+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
    
  )
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    // backgroundColor:'#E8EAED',
    backgroundColor:'#2A2A2A',
  },

  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },

sectionTitle:{
  fontSize:24,
  fontWeight:'bold',
  // color:'#1A1A1A',
   color:'#fff',
  
},
items:{
  marginTop:30,
},


// add task css
writeTaskWrapper:{
  position:'absolute',
  bottom:60,
  width:'100%',
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center',

},
input:{
  paddingVertical:15,
  paddingHorizontal:15,
  borderRadius:10,
  backgroundColor:'#262626',
  borderColor:'#c0c0c0',
  color:'#fff',
  borderWidth:1,
  width:250,
},
addWrapper:{
  width:60,
  height:60,
  backgroundColor:'#E7F4FB',
  color:'#fff',
  borderRadius:60,
  justifyContent:'center',
  alignItems:'center',
  borderColor:'#c0c0c0',
  borderWidth:1,
},
addText:{
  color:'#000',
},
sectionSmall:{
  color:'white',
}

})



export default App