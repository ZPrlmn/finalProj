import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const AnswerScreen = () => {
    const route = useRoute()
    const { data, userAnswers, totalScore } = route.params;
    const navigation = useNavigation();

    const handleNavigateHome = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Your Answers</Text>
            {data.map((question, index) => (
                <View key={question.questionId} style={[styles.card, userAnswers[index] === question.questionAnswer.toLowerCase() ? styles.correctCard : styles.wrongCard]}>
                    <Text style={styles.questionText}>{question.question}</Text>
                    {userAnswers[index] === question.questionAnswer.toLowerCase() ? (
                        <Text style={styles.correctText}>{userAnswers[index]}</Text>
                    ) : <Text style={styles.wrongText}>{userAnswers[index]}</Text>}
                </View>
            ))}
            <Text style={styles.totalScore}>Total Score: {totalScore}</Text>
            <TouchableOpacity style={styles.button} onPress={handleNavigateHome}>
                <Text style={styles.buttonText}>Go to Home</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 10,
        width: '100%',
    },
    correctCard: {
        backgroundColor: '#c8e6c9',
    },
    wrongCard: {
        backgroundColor: '#ffcdd2',
    },
    questionText: {
        fontSize: 16,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    correctText: {
        fontSize: 16,
        marginBottom: 5,
        color: 'green',
    },
    wrongText: {
        fontSize: 16,
        marginBottom: 5,
        color: 'red',
    },
    totalScore: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#3498db',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default AnswerScreen;