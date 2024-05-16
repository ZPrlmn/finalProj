import React, { useEffect, useState } from 'react'
import { Text, View, Image, ScrollView, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native' // Import useRoute
import Styles from '../Styles/Styles'
import LoadingScreen from '../LoadingScreen'

const FourPicsAnswerScreen = () => {
    const [isLoading, setIsLoading] = useState(true)
    const route = useRoute() // Use useRoute to access route object
    const { picsData, userAnswers, totalScore } = route.params
    const navigation = useNavigation()

    const fetchData = () => {
        setTimeout(() => {
          setIsLoading(false)
        }, 2000)
      }
      useEffect(() => {
        fetchData()
      }, [])
    
    const handleNavigateHome = () => {
        navigation.navigate('Home')
    }

    return (
        <View style={Styles.container}>
        {isLoading ? <LoadingScreen /> :   
        <View>
            <Text style={{fontSize: 40}}>Your Answers</Text>
            <ScrollView>
                {picsData.map((item, index) => (
                    <View key={index}>
                        <View style={{flexDirection: 'row'}}>
                            <Image style={{width: 40, height: 40}} source={item.img1} />
                            <Image style={{width: 40, height: 40}} source={item.img2} />
                            <Image style={{width: 40, height: 40}} source={item.img3} />
                            <Image style={{width: 40, height: 40}} source={item.img4} />
                        </View>
                        <View>

                        </View>
                    </View>
                ))}
            </ScrollView>
            <Text>{totalScore}</Text>
            <Button title='Home' onPress={handleNavigateHome}/>
        </View>
        }
        </View>
    )
}

export default FourPicsAnswerScreen
