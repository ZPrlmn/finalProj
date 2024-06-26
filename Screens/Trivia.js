import React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import questionsData from '../Data/questionsData';
import styles from '../Styles/TriviaStyles'

const Trivia= () => {
    const navigation = useNavigation();

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
    const [isWrongAnswer, setIsWrongAnswer] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [userAnswers, setUserAnswers] = useState(Array(questionsData.length).fill(''));
    const [totalScore, setTotalScore] = useState(0);

    const handleNextQuestion = () => {
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
        const correctAnswerText = questionsData[currentQuestionIndex].questionAnswer;
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
        // Navigate to AnswerScreen and pass necessary data
        const data = questionsData
        navigation.navigate('AnswerScreen', {
            data,
            userAnswers,
            totalScore,
            correctAnswer
        });
    };

    return (
        <ImageBackground
        source={require('../assets/bg.png')}
        style={styles.backgroundImage} >
        <View style={styles.container}>
            {currentQuestionIndex < questionsData.length ? (
                <View style={styles.card}>
                    <Text style={styles.questionText}>{questionsData[currentQuestionIndex].question}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setUserAnswer(text)}
                        value={userAnswer}
                        placeholder="Type your answer here..."
                        placeholderTextColor="#999"
                    />

                    <View style={styles.buttonContainer}>
                    {currentQuestionIndex !== 0 && (
                        <TouchableOpacity style={styles.button1}  onPress={handlePrevQuestion}>
                            <Text style={styles.buttonText}>Previous Question</Text>
                        </TouchableOpacity>
                         )}
                    {currentQuestionIndex < questionsData.length - 1 && (
                        <TouchableOpacity style={styles.button1} onPress={handleNextQuestion}>
                        <Text style={styles.buttonText}>Next Question</Text>
                    </TouchableOpacity>
                    )}

                    </View>
                    <TouchableOpacity  style={[styles.button, !userAnswer && styles.disabledButton]} onPress={checkAnswer} disabled={!userAnswer}>
                        <Text style={styles.buttonText}>Check Answer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handlePracticeCompleted}>
                        <Text style={styles.buttonText}>Finish Practice</Text>
                    </TouchableOpacity>
                    {isCorrectAnswer ? (
                        <Text style={[styles.resultText, { color: 'green' }]}>Correct Answer!</Text>
                    ) : isWrongAnswer ? (
                        <Text style={[styles.resultText, { color: 'red' }]}>
                            Incorrect Answer! The correct answer is: {questionsData[currentQuestionIndex].questionAnswer}
                        </Text>
                    ) : null}
                </View>
            ) : null}
 
        </View>
        </ImageBackground>
    );
};
export default Trivia;
