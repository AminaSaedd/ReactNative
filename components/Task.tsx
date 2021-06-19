import React from 'react'
import{View, Text, StyleSheet, TouchableOpacity} from 'react-native';
const Task = (props:any) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>

                <Text style={styles.itemText}>{props.text}</Text>
            </View>
              <View style={styles.circular}></View>
        </View>
    )
}


const styles = StyleSheet.create({
item:{
    backgroundColor:"#FFF",
    padding:15,
    borderRadius:20,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:20,
    borderColor:"#ffe6e6",
    borderWidth:1,
    width:'100%',
     

    
},
itemLeft:{
    flexDirection:'row',
    alignItems:"center",
    flexWrap:"wrap"
},
square:{

    width:24,
    height:24,
    backgroundColor:"skyblue",
    opacity:0.4,
    borderRadius:5,
    marginRight:15
},
itemText:{

    maxWidth:"80%"
},
circular:{
width:12,
height:12,
borderRadius:5,
borderWidth:2,
borderColor:"#00bfff"


},


});
export  default Task;