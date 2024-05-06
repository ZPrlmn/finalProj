import React from 'react'
import { Text, View } from 'react-native'
import Styles from '../Styles'

function Home() {

  const [isLoading, setIsLoading] = useState()

  const fetchData = () => {
    setTimeout(() => {

    })
  }

  return (
    <View style={Styles.container}>
        <Text>Home</Text>
        {}
    </View>
  )
}

export default Home
