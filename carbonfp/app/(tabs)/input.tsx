import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useContext } from 'react';
import { EnergyContext } from '../context/EnergyContext'; // Import the context correctly

export default function TabTwoScreen() {
  // Access energyUsage and setEnergyUsage from context
  const { energyUsage, setEnergyUsage } = useContext(EnergyContext);

  // Function to update the energy usage for a specific month and type
  const handleInputChange = (text, index, type) => {
    const updatedUsage = [...energyUsage];
    updatedUsage[index] = {
      ...updatedUsage[index],
      [type]: text,
    };
    setEnergyUsage(updatedUsage);
  };

  // Array of month names
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {months.map((month, index) => (
          <View key={index} style={styles.inputContainer}>
            <Text style={styles.label}>{month} Energy Usage</Text>

            <Text style={styles.subLabel}>Home Energy Usage (kWh)</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleInputChange(text, index, 'homeUsage')}
              value={energyUsage[index].homeUsage}
              placeholder={`Enter home usage for ${month}`}
              keyboardType="numeric"
            />

            <Text style={styles.subLabel}>Total Driving (mi)</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleInputChange(text, index, 'driveUsage')}
              value={energyUsage[index].driveUsage}
              placeholder={`Enter driving usage for ${month}`}
              keyboardType="numeric"
            />

            <Text style={styles.subLabel}>Total Trash (kg)</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleInputChange(text, index, 'trashUsage')}
              value={energyUsage[index].trashUsage}
              placeholder={`Enter trash usage for ${month}`}
              keyboardType="numeric"
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 18,
    marginBottom: 12,
    fontWeight: 'bold',
  },
  subLabel: {
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    height: 40,
    width: 250,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 12,
    borderColor: '#ccc',
  },
});
