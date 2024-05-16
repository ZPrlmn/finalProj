import React, { useEffect, useState } from 'react'
import { Text, View, Button, TouchableOpacity, StatusBar } from 'react-native'
import Styles from '../Styles/Styles'
import LoadingScreen from '../LoadingScreen'


function Home({navigation}) {
  const [isLoading, setIsLoading] = useState(true)

  const handleLogout = () => {
    navigation.navigate('Login')
  }

  const trivia = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      navigation.navigate('Trivia');
    }, 2000);
  }
 
  const fourPics = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      navigation.navigate('FourPics');
    }, 2000);
  }


  const fetchData = () => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <View style={Styles.container}>        
        {isLoading ? <LoadingScreen /> :        
        <>
          <TouchableOpacity style={[{position: 'absolute', top: 30, right:20, backgroundColor: 'red', padding: 10, borderRadius: 10}]} onPress={handleLogout}>
            <Text style={{color:'white'}}>Log out</Text>
          </TouchableOpacity>
          <View style={Styles.card}>
            <View style={Styles.header}>
              <Text style={Styles.headerTitle}>Home</Text>
            </View>
            <View style={Styles.cardBody}>
              <TouchableOpacity style={Styles.button} onPress={trivia}>
                <Text style={Styles.buttonText}>Trivia Game</Text>
              </TouchableOpacity>  
              <TouchableOpacity style={Styles.button} onPress={fourPics}>
                <Text style={Styles.buttonText}>4 Pics 1 Word</Text>
              </TouchableOpacity>  
            </View>
          </View>
        </>        
        }
        <StatusBar />
    </View>
  )
}

export default Home
