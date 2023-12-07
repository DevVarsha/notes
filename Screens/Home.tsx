import { View, Text, FlatList, StyleSheet, Image, TextInput, SafeAreaView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Note } from '../Note'
import moment from 'moment'

interface HomeProps {
    notes: Note[]
}



export default function Home(props: HomeProps) {
    
    const [monthNames, setMonthNames] = useState<string>("");

props.notes.sort((a, b) => b.createDate.getTime() - a.createDate.getTime());

// Group notes by createDate (assuming each group represents a month in this example)
const groupedNotes: { [key: string]: Note[] } = {};
let key: string;
props.notes.forEach((note) => {
   key = moment(note.createDate).format("MMMM"); // Grouping by year-month
  if (!groupedNotes[key]) {
    groupedNotes[key] = [];
  }
  else{

  groupedNotes[key].push(note);
  console.log("newNote..", groupedNotes[key].push(note))
//   setMonthNames(key)
}
});

// Filter notes based on a specific date (e.g., notes created in October 2023)
// const filterDate = new Date("2023-10-01T00:00:00.000Z");
// const filteredNotes = props.notes.filter((note) => note.createDate >= filterDate);

// Log the results
// console.log("Grouped Notes:", groupedNotes);
// console.log("Filtered Notes (after October 2023):", filteredNotes);

const month_Names = Object.keys(groupedNotes);
//@ts-ignore
// const data = JSON.parse(groupedNotes);



    const renderItem = (item: Note, index: number) => {

        return(
            <View>

            <View style={[styles.listView,{
                borderTopLeftRadius: index === 0 ? 10 :0,
                borderTopRightRadius: index === 0 ? 10 :0,
                borderBottomLeftRadius: index === props.notes?.length -1 ? 10: 0,
                borderBottomRightRadius: index === props.notes?.length -1 ? 10: 0,
            }]}>
                <Text style={styles.title}>title{item.title}</Text>
                <View style={styles.nameTimeRow}>
                <Text style={styles.date}>{moment(item.createDate).format("MMMM")}</Text>
                <Text style={styles.discription}>{item.text}</Text>

                </View>
            </View>
            </View>
        )
    }

    const headerComponent = () => {
        return(
            <View style={styles.searchField}>
            <Image 
            style={styles.search}
            source={require("../assets/search.png")}
            />
            <TextInput
        style={styles.input}
        onChangeText={()=>{}}
        placeholder='Search'
        placeholderTextColor={"#f9f9f9"}
        // value={text}
      />
             <Image 
            style={styles.mic}
            source={require("../assets/mic.png")}
            />
        </View>
        )
    }

    const innerHeader = () => {
        const monthNames = Object.keys(groupedNotes);
        // setMonthNames(monthNames);
                       console.log("newArray",monthNames)
                       

        return(
            // <View>
            //     {
            //         monthNames.map((data: any) => {
            //             console.log("data data", data)
                   
            //             return(
                            <Text style={{color:"#fff"}}>{monthNames}</Text>
            //                 )
            //         })
            //     }
            // </View>
        )
    }

  return (
    <>
    <SafeAreaView />
    <View style={styles.mainView}>
      <Text style={{color:'#fff'}}>hhh{key}</Text>
    {/* <FlatList
        data={Object.values(groupedNotes)}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={()=> headerComponent()}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <FlatList
          ListHeaderComponent={()=> innerHeader()}
            data={item}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => renderItem(item, index)}
          />
          )}
          /> */}
    </View>
</>  )
}

const styles = StyleSheet.create({
    mainView: {
        flex:1,
        paddingHorizontal: 20,
        backgroundColor:"#000"
    },
    searchField: {
        backgroundColor:"#464646",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal: 10,
        borderRadius: 16,
        paddingVertical: 4
    },
    search: {
        width:16,
        height:16
    },
    mic: {
        width:12,
        height:22
    },
    input:{
        paddingVertical: 8,
        width:"82%",
    },
    listView: {
        backgroundColor:"#464646",
        paddingVertical: 10,
        paddingLeft: 20,
        borderBottomColor:"#f9f9f9",
        borderBottomWidth: 0.2
    },
    title: {
        color:"#fff",
        fontWeight:"600",
        fontSize:18
    },
    nameTimeRow: {
        flexDirection:"row",
        alignItems:"center",
        marginTop:10
    },
    date: {
        color:"#fff",
        fontWeight:"500",
        fontSize:14
    },
    discription: {
        color:"gray",
        fontWeight:"400",
        fontSize:14,
        marginLeft: 10
    }
})