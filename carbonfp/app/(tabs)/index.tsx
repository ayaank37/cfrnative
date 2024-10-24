import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcometext}>Welcome to EcoTrack</Text>
      <View style={styles.instructionsContainer}>
        <Text style={styles.how}>How to use this app:</Text>
        <Text style={styles.twotext}>1. Move into the "Month Input" section</Text>
        <Text style={styles.twotext}>2. Input your data into the "Month Input" section</Text>
        <Text style={styles.twotext}>3. Move to the "Month Stats" section and select a month</Text>
        <Text style={styles.twotext}>4. View your carbon footprint</Text>
        <Text style={styles.twotext}>5. View your weekly progress through the graph</Text>
        <Text style={styles.twotext}>6. Implement our tips and help save the world step by step!</Text>
      </View>
      <TouchableWithoutFeedback>
        <Image
          style={styles.img}
          source={require('@/assets/images/Screenshot 2024-09-15 091203.png')}
        />
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16, // Add padding to ensure spacing on the sides
  },
  instructionsContainer: {
    width: '100%', // Full width to center-align text using `alignItems`
    alignItems: 'center', // Center-align the text inside the container
    paddingHorizontal: 20, // Add space inside the container on both sides
    marginVertical: 10, // Adds vertical spacing between elements
  },
  welcometext: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 20, // Adds space below the welcome text
  },
  twotext: {
    paddingVertical: 4, // Space between individual instructions
    textAlign: 'center', // Center-align text
  },
  how: {
    paddingVertical: 10,
    fontWeight: 'bold',
    textAlign: 'center', // Center-align header
  },
  img: {
    marginVertical: 30,
  },
});
