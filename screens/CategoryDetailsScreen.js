import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CategoryDetailsScreen({ navigation, route }) {
    const { categoryId } = route.params || {};

    const getCategoryTitle = (id) => {
        switch (id) {
            case 'general': return 'General Knowledge';
            case 'signs': return 'Road Signs';
            default: return 'Unknown Category';
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{getCategoryTitle(categoryId)}</Text>
            <Text style={styles.description}>
                This section covers {getCategoryTitle(categoryId).toLowerCase()}.
                You will have 20 minutes to complete the test.
            </Text>

            <View style={styles.infoBox}>
                <Text style={styles.infoText}>Passing Score: 80%</Text>
                <Text style={styles.infoText}>Questions: 10</Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate('Quiz', { id: categoryId });
                }}
            >
                <Text style={styles.buttonText}>Start Quiz</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 40,
        lineHeight: 24,
    },
    infoBox: {
        backgroundColor: '#f5f5f5',
        padding: 20,
        borderRadius: 10,
        width: '100%',
        marginBottom: 40,
    },
    infoText: {
        fontSize: 16,
        marginBottom: 10,
        color: '#333',
    },
    button: {
        backgroundColor: '#2196F3',
        paddingHorizontal: 50,
        paddingVertical: 15,
        borderRadius: 25,
        width: '100%',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
