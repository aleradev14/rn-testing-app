import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Question } from '../constants/questions';

type Props = {
    question: Question;
    onAnswer: (index: number) => void;
    selectedOption: number | null;
};

const { width, height } = Dimensions.get('window');

export const QuestionCard = ({ question, onAnswer, selectedOption }: Props) => {
    return (
        <View style={styles.card}>

            <Text style={styles.title}>{question.question}</Text>

            <Image
                source={{ uri: question.image }}
                style={styles.image}
                resizeMode="cover"
            />

            <View style={styles.optionsContainer}>
                {question.options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.optionButton,
                            selectedOption === index && styles.selectedOption
                        ]}
                        onPress={() => onAnswer(index)}
                        disabled={selectedOption !== null}
                    >
                        <Text style={styles.optionText}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: width - 40,
        height: height * 0.75, // Fixed height
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        marginHorizontal: 20,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        overflow: 'hidden', // This ensures the text is cut off if it's too long
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: '#eee',
    },
    optionsContainer: {
        width: '100%',
        gap: 10,
    },
    optionButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    selectedOption: {
        backgroundColor: '#d0d0d0',
        borderColor: '#999',
    },
    optionText: {
        fontSize: 16,
    },
});
