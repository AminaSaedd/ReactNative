
import React ,{useState}from 'react';
import { StatusBar } from 'expo-status-bar';
// import { TouchableOpacity } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { StyleSheet, Text, View,SafeAreaView , Button, KeyboardAvoidingView, Platform, TextInput, Pressable, Keyboard} from 'react-native';
import Task from  './components/Task'
function App() {
  const[task,setTask] =useState<any>();
  const[taskitems, setTaskitems] = useState([useState]);
  const handleAddTask =()=>{
    Keyboard.dismiss();
    console.log(task);
     setTaskitems([...taskitems, task])
     setTask(null)
  }

  //complete 
  const completeTask=(index:any) =>{
    let itemCopy = [...taskitems];
    itemCopy.splice(index, 1);
 setTaskitems(itemCopy);
  }
    return (
   <View style={styles.container}>
     <View style={styles.tasksWrapper}>
   <Text style={styles.sectionTITLE}>
    Todays Tasks</Text>
    <View style={styles.items}>
      
      {/* this is where the task will go.. */}
      {taskitems.map((item, index)=> {
       return (
         <TouchableOpacity 
         key={index} 
         onPress={() => completeTask(index)}>
           <Task text={item}/> 
         </TouchableOpacity>
       )
      })} 
       {/* <Task text={'Task 1'}/>
       <Task text={'Task 2'}/> */}
    </View>
    </View>
    <KeyboardAvoidingView
   behavior ={Platform.OS ==='ios'? 'padding': 'height'}
   style={styles.writeTaskWraper}
   >
<TextInput style={styles.input}   value={task} onChangeText={text => setTask(text)}
placeholder={"Add new Task"}/>
<TouchableOpacity 
 onPress={handleAddTask}
>
  <View style={styles.addWraper}>
    <Text style={styles.addText}>Add</Text>
    </View>
</TouchableOpacity>
   </KeyboardAvoidingView>
   </View>
  
  
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    width:"50%"
  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,

  }, 
  sectionTITLE:{
    fontSize:24,
    fontWeight:'bold'
  },
  items:{
    marginTop:25
  },
  writeTaskWraper:{
    position:"absolute",
    bottom:60,
    width:"100%",
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:"center",
    zIndex: 1,
  },
  input:{
    
    paddingHorizontal:15,
    paddingVertical:15,
    backgroundColor:"#FFF",
    borderRadius:60,
    borderColor:"#C0C0C0",
    borderWidth:1,
    width:250
  },
  addWraper:{
  
    backgroundColor:"#FFF",
    width:60,
    height:60,
    borderRadius:60,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:1,
    borderColor:"#C0C0C0",
  },
  addText:{},
});
export default  App;