import React, { useEffect, useState } from 'react'
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert, Image, Modal, StatusBar } from 'react-native';
import Styles from '../Styles/Styles'
import styles from '../Styles/FourPicsStyles';
import { StackActions, useNavigation } from '@react-navigation/native';
import picsData from '../Data/picsData';


const FourPics = () => {
  const navigation = useNavigation();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [isWrongAnswer, setIsWrongAnswer] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [userAnswers, setUserAnswers] = useState(Array(picsData.length).fill(''));
  const [totalScore, setTotalScore] = useState(0);
  const [modalVisible, setModalVisible] = useState(false)
  const [timeoutId, setTimeoutId] = useState(null)
  const [intervalId, setIntervalId] = useState(null)
  const [count, setCount] = useState(20);
  const [ modalSettings, setModalSettings ] = useState(false)

  function btnHome(){
    navigation.navigate("Home")
    setModalSettings(false)
    clearInterval(intervalId)
    clearTimeout(timeoutId)
    setModalVisible(false)

    setUserAnswer('');
    setIsCorrectAnswer(false);
    setCorrectAnswer('');
    setIsWrongAnswer(false);
  }

  
  const timer = () => {
    setCount(20)
    const count = setTimeout(() => {
      setModalVisible(true)
    }, 18000); 
    setTimeoutId(count)

    const countDown = setInterval(() => {
      setCount(prevTimer => {
        if (prevTimer <= 1) {
          clearInterval(countDown);
        }
        return prevTimer - 1;
      });
    }, 1000);
    setIntervalId(countDown)
  }

  useEffect(() => {
   timer()
  }, []);

  const handleNextQuestion = () => {
    clearInterval(intervalId)
    setCount(20)
    clearTimeout(timeoutId)
    setModalVisible(false)
    timer()
    setCurrentQuestionIndex(currentQuestionIndex + 1);

    setUserAnswer('');
    setIsCorrectAnswer(false);
    setCorrectAnswer('');
    setIsWrongAnswer(false);
  };

  const handlePrevQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    setUserAnswer('');
    setIsCorrectAnswer(false);
    setCorrectAnswer('');
    setIsWrongAnswer(false);
  };

  const checkAnswer = () => {
    clearInterval(intervalId)
    clearTimeout(timeoutId)
    const correctAnswerText = picsData[currentQuestionIndex].answer;
    const userEnteredAnswer = userAnswer.trim().toLowerCase();

    if (userEnteredAnswer === correctAnswerText.toLowerCase()) {
        setIsCorrectAnswer(true);
        setTotalScore(totalScore + 1);
    } else {
        setIsCorrectAnswer(false);
        setIsWrongAnswer(true);
    }

    setUserAnswers(prevState => {
        const updatedAnswers = [...prevState];
        updatedAnswers[currentQuestionIndex] = userEnteredAnswer;
        return updatedAnswers;
    });
  };

  const handlePracticeCompleted = () => {
    clearInterval(intervalId)
    clearTimeout(timeoutId)
    setModalVisible(false)
    
    navigation.navigate('4PicsAns', {
        picsData,
        userAnswers,
        totalScore,
        correctAnswer
    });
  };

  



  return (
    
    <View style={Styles.container}>
    <StatusBar translucent={true} backgroundColor={'transparent'} />
    <ImageBackground style={styles.backgroundImage} source={require('../assets/bg4Pics.png')}>
      {currentQuestionIndex < picsData.length ? (
        <View style={styles.card}>
          <View style={styles.timerContainer}>
            <Text style={styles.timer}>{count}</Text>
          </View>
          <View style={styles.levelContainer}>
            <Text style={styles.level}>{picsData[currentQuestionIndex].id}</Text>
          </View>
          <View style={styles.imageContainer}>
            <View style={styles.imageRow}>
              <Image source={picsData[currentQuestionIndex].img1} style={styles.image}/>
              <Image source={picsData[currentQuestionIndex].img2} style={styles.image}/>
            </View>
            <View style={styles.imageRow}>
              <Image source={picsData[currentQuestionIndex].img3} style={styles.image}/>
              <Image source={picsData[currentQuestionIndex].img4} style={styles.image}/>
            </View>
          </View>
          <TextInput
            style={Styles.textInput}
            onChangeText={text => setUserAnswer(text)}
            value={userAnswer}
            placeholder="Type your answer here..."
            placeholderTextColor="#999"
          />
            <View style={styles.buttonContainer}>
              {/*currentQuestionIndex !== 0 && (
                <TouchableOpacity style={styles.button1}  onPress={handlePrevQuestion}>
                    <Image style={styles.btnImage} source={require('../assets/back.png')}/>
                </TouchableOpacity>
              )*/}
              <TouchableOpacity  style={[styles.btnCheck, !userAnswer && styles.disabledButton]} onPress={checkAnswer} disabled={!userAnswer}>
                <Text style={styles.buttonText}>Check Answer</Text>
              </TouchableOpacity>
              {currentQuestionIndex < picsData.length - 1 && (
                <TouchableOpacity style={styles.button1} onPress={handleNextQuestion}>
                <Image style={styles.btnImage} source={require('../assets/next.png')}/>
                </TouchableOpacity>
              )}
            </View>
            <TouchableOpacity style={styles.btnFinish} onPress={handlePracticeCompleted}>
              <Text style={styles.buttonText}>Finish Practice</Text>
            </TouchableOpacity>
            
              {isCorrectAnswer ? (
                <View style={[styles.checkAnswer, styles.correctAnswer]}>
                  <Text style={[styles.resultText]}>Correct Answer!</Text>
                </View>
                ) : isWrongAnswer ? (
                  <View style={[styles.checkAnswer, styles.wrongAnswer]}>
                  <Text style={[styles.resultText]}>
                      Incorrect Answer! The correct answer is: {picsData[currentQuestionIndex].answer}
                  </Text>
                  </View>
                ) : null}
            
          
        </View>
      ) : null}
    </ImageBackground>

      <Modal transparent visible={modalVisible}>
        <View style={styles.modalContainer}>
        
          <View style={styles.modalBody}>
          
            <Text style={styles.modalText}>Time Runout!!!</Text>
            <View style={styles.modalButtonContainer}>
              {currentQuestionIndex === picsData.length - 1 && (
                <TouchableOpacity onPress={handlePracticeCompleted} style={styles.buttonModal}>                  
                    <Text style={styles.buttonModalText}>Finish Practice</Text>
                </TouchableOpacity>
              )}
              {currentQuestionIndex < picsData.length - 1 && (
                <TouchableOpacity style={styles.buttonModal} onPress={handleNextQuestion}>                  
                    <Text style={styles.buttonModalText}>Next</Text>
                </TouchableOpacity>
              )}  
              <TouchableOpacity onPress={btnHome} style={styles.buttonModalHome}>                
                  <Text style={styles.buttonModalText}>Home</Text>
              </TouchableOpacity>
            </View>
          
          </View>
        
        </View>
      </Modal>


    </View>
    
    
  )
}

export default FourPics