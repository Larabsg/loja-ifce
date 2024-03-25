import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Card from '../../../shared/components/Card';

export default function Atividade() {

  const [text, onChangeText] = React.useState("Texto inicial")
  const [count, setCount] = useState(0)
  const [alert, setAlert] = useState("")
  const [ndata, setData] = useState([])

  const onPress = () => setCount(count + 1)

  // const onSubmit = () => {
  //   setData([...ndata, {id: Math.random(), value: text}])
  
  // }



  useEffect(() => {
    if(count > 10) {
      setCount(0)
      setAlert("Atingiu 10! Reiniciando contagem...")
    } else if(count == 2) {
      setAlert("")
    }
  })

  const data = [
    {
      id: 1,
      name: 'João'
    },
    {
      id: 2,
      name: 'Maria'
    },
    {
      id: 3,
      name: 'José'
    },
    {
      id: 4,
      name: 'Ana'
    },
    {
      id: 5,
      name: 'Pedro'
    },
  ]

  const lorem = [
    {
      title: 'Lorem 1',
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend a massa ac luctus. Vivamus sed urna ultricies, consectetur augue.'
    },
    {
      title: 'Lorem 2',
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum augue ac lorem auctor, quis lacinia dolor vulputate. Vivamus elementum. '
    },
    {
      title: 'Lorem 3',
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu rhoncus tellus. Mauris tristique euismod risus quis condimentum. Sed at. '
    },
    {
      title: 'Lorem 4',
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper enim elit, nec condimentum lectus vulputate in. Vivamus vel odio. '
    },
    {
      title: 'Lorem 5',
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus dapibus nisi, sed porttitor nibh accumsan porttitor. Suspendisse consectetur, elit. '
    },
    {
      title: 'Lorem 6',
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, elit at elementum dapibus, libero massa ultricies metus, nec. '
    },
    
  ]

  return (

    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.viewText}>
      <Text style={styles.text}>{text}</Text>
      <StatusBar style="auto" />

      <Text>{alert}</Text>

      <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      placeholder='Digite o texto aqui'
      />

      <TextInput
      value={count.toString()}
      />

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.textButton}>Mude o valor</Text>
      </TouchableOpacity>

      </View>

      <View style={styles.test}>
        <FlatList
          data={lorem}
          renderItem={({item}) => (
            <Card title={item.title} content={item.lorem} />
          )}
          numColumns={2}
        />
      </View>

      <View style={styles.viewList}>
      <FlatList
        horizontal
        data={data}
        renderItem={({item}) => (
          <View style={styles.flatList}>
            <Text style={styles.textList}>{item.name}</Text>
          </View>
        )}
      />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },

  viewText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  viewList: {
    flex: 1,
    marginBottom: 40
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#e98c9c',
    padding: 10,
    marginTop: 10,
    marginBottom: 10
  },

  textButton: {
    color: '#fff',
    fontWeight: 'bold',
  },

  flatList: {
    backgroundColor: '#d3465e',
    margin: 10,
    height: 100,
    // alignItems: 'center',
    padding: 10,
    // textAlign: 'center',
    // marginTop: 40
  },

  textList: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 45
  },

  test: {
    width: '75%',
    alignSelf: 'center',
    flex: 2
  }
});
