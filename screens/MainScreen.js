import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MainScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Driving Theory Test</Text>

            <TouchableOpacity
                style={[styles.button, styles.primaryButton]}
                onPress={() => navigation.navigate('Quiz', { categoryId: 'random' })}
            >
                <Text style={styles.buttonText}>Random Test</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('CategoryDetails', { categoryId: 'general' })}
            >
                <Text style={styles.buttonText}>General Knowledge</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, styles.secondaryButton]}
                onPress={() => navigation.navigate('CategoryDetails', { categoryId: 'signs' })}
            >
                <Text style={styles.buttonText}>Road Signs</Text>
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
    button: {
        backgroundColor: '#2196F3',
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 25,
        marginBottom: 20,
        width: '80%',
    },
    primaryButton: {
        backgroundColor: '#FF9800',
    },
    secondaryButton: {
        backgroundColor: '#4CAF50',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
