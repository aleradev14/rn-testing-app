import { Ionicons } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BackgroundIndicator } from '../components/BackgroundIndicator';
import { QuestionCard } from '../components/QuestionCard';
import { QUESTIONS } from '../constants/questions';

export default function QuizScreen({ navigation }) {
    const [answers, setAnswers] = useState({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isSubmitReady, setIsSubmitReady] = useState(false);

    const handleAnswer = (questionId, optionIndex) => {
        setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    };

    useEffect(() => {
        const answeredCount = Object.keys(answers).length;
        const totalQuestions = QUESTIONS.length;
        // Check if at least 90% answered
        if (answeredCount >= totalQuestions * 0.9) {
            setIsSubmitReady(true);
        }
    }, []);

    const handleSubmit = () => {
        let correctCount = 0;
        QUESTIONS.forEach(q => {
            if (answers[q.id] === q.correctAnswerIndex) {
                correctCount++;
            }
        });
        navigation.replace('Result', {
            correct: correctCount,
            total: QUESTIONS.length
        });
    };

    const handleClose = () => {
        navigation.goBack();
    };

    const currentQuestion = QUESTIONS[currentQuestionIndex];
    const currentAnswer = answers[currentQuestion.id];

    let status = 'none';
    if (currentAnswer !== undefined) {
        status = currentAnswer === currentQuestion.correctAnswerIndex ? 'correct' : 'incorrect';
    }

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setCurrentQuestionIndex(viewableItems[0].index);
        }
    }).current;

    return (
        <View style={styles.container}>
            <BackgroundIndicator status={status} />

            <View style={styles.header}>
                <TouchableOpacity
                    onPress={isSubmitReady ? handleSubmit : handleClose}
                    style={styles.headerButton}
                >
                    {isSubmitReady ? (
                        <Text style={styles.submitText}>Submit</Text>
                    ) : (
                        <Ionicons name="close" size={30} color="black" />
                    )}
                </TouchableOpacity>
            </View>

            <FlashList
                data={QUESTIONS}
                renderItem={({ item }) => (
                    <QuestionCard
                        question={item}
                        onAnswer={(idx) => handleAnswer(item.id, idx)}
                        selectedOption={answers[item.id] ?? null}
                    />
                )}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 20,
        zIndex: 1,
    },
    headerButton: {
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 20,
    },
    submitText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2196F3',
    },
});
