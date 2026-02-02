import { Ionicons } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';
import { useEffect, useMemo, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BackgroundIndicator } from '../components/BackgroundIndicator';
import { QuestionCard } from '../components/QuestionCard';
import { ALL_QUESTIONS, GENERAL_QUESTIONS, SIGNS_QUESTIONS } from '../constants/questions';

export default function QuizScreen({ navigation, route }) {
    const [answers, setAnswers] = useState({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isSubmitReady, setIsSubmitReady] = useState(false);

    const categoryId = route.params?.categoryId;

    const questions = useMemo(() => {
        switch (categoryId) {
            case 'general':
                return GENERAL_QUESTIONS;
            case 'signs':
                return SIGNS_QUESTIONS;
            case 'random': {
                const longQuestions = ALL_QUESTIONS.filter(q => q.id === 107 || q.id === 208);
                const others = ALL_QUESTIONS.filter(q => q.id !== 107 && q.id !== 208);
                const shuffledOthers = others.sort(() => 0.5 - Math.random());
                const pickedLong = longQuestions[Math.floor(Math.random() * longQuestions.length)];
                const result = shuffledOthers.slice(0, 9);
                result.splice(1, 0, pickedLong);
                return result;
            }
            default:
                return [];
        }
    }, [categoryId]);

    const handleAnswer = (questionId, optionIndex) => {
        setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    };

    useEffect(() => {
        if (questions.length === 0) return;

        const answeredCount = Object.keys(answers).length;
        const totalQuestions = questions.length;

        if (answeredCount >= totalQuestions * 0.9) {
            setIsSubmitReady(true);
        }
    }, []);

    const handleSubmit = () => {
        let correctCount = 0;
        questions.forEach(q => {
            if (answers[q.id] === q.correctAnswerIndex) {
                correctCount++;
            }
        });
        navigation.replace('Result', {
            correct: correctCount,
            total: questions.length
        });
    };

    const handleClose = () => {
        navigation.goBack();
    };

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setCurrentQuestionIndex(viewableItems[0].index);
        }
    }).current;

    const currentQuestion = questions[currentQuestionIndex];

    if (questions.length === 0) {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleClose} style={styles.headerButton}>
                        <Ionicons name="close" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                    <Text style={{ fontSize: 18, color: '#666', textAlign: 'center', paddingHorizontal: 20 }}>
                        No questions found.
                    </Text>
                </View>
            </View>
        );
    }

    let status = 'none';
    if (currentQuestion) {
        const currentAnswer = answers[currentQuestion.id];
        if (currentAnswer !== undefined) {
            status = currentAnswer === currentQuestion.correctAnswerIndex ? 'correct' : 'incorrect';
        }
    }

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
                data={questions}
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
                estimatedItemSize={400}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
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
