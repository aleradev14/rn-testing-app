import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MainScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Driving Theory Test</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push('/quiz')}
            >
                <Text style={styles.buttonText}>Start Test</Text>
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
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
