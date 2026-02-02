import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ResultScreen({ route, navigation }) {
    const { correct = 0, total = 0 } = route.params || {};

    const correctCount = Number(correct);
    const totalCount = Number(total);
    const incorrectCount = totalCount - correctCount;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Test Results</Text>

            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>Correct: {correctCount}</Text>
                <Text style={styles.resultText}>Incorrect: {incorrectCount}</Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.popToTop()}
            >
                <Text style={styles.buttonText}>Back to Home</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    resultContainer: {
        marginBottom: 40,
        alignItems: 'center',
    },
    resultText: {
        fontSize: 20,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#2196F3',
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 25,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
