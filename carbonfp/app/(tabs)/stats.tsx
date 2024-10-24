import React, { useContext, useState } from 'react';
import { EnergyContext } from '../context/EnergyContext'; // Import the context
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import Picker for the dropdown

export default function TabThreeScreen() {
  const { energyUsage } = useContext(EnergyContext); // Access the energy data from context
  const [selectedMonth, setSelectedMonth] = useState(0); // State to keep track of selected month

  // Array of month names
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Get data for the selected month
  const selectedData = energyUsage[selectedMonth];

  // Function to calculate and display the selected month's data
  const calculateMonthData = () => {
    const homeUsage = parseFloat(selectedData.homeUsage || 0);
    const driveUsage = parseFloat(selectedData.driveUsage || 0);
    const trashUsage = parseFloat(selectedData.trashUsage || 0);

    return { homeUsage, driveUsage, trashUsage };
  };
  const getEnergyTextColor = (value)=> {
    if (value<600){
      return styles.greenText;
    }
    else if (value>1200){
      return styles.redText;
    }
    else {
      return styles.yellowText;
    }
  };
  const getDrivingTextColor = (value)=> {
    if (value<500){
      return styles.greenText;
    }
    else if (value>1000){
      return styles.redText;
    }
    else {
      return styles.yellowText;
    }
  };
  const getTrashTextColor = (value)=> {
    if (value<30){
      return styles.greenText;
    }
    else if (value>70){
      return styles.redText;
    }
    else {
      return styles.yellowText;
    }
  };
  const getTotalTextColor = (value)=> {
    if (value<1050){
      return styles.greenText;
    }
    else if (value>2100){
      return styles.redText;
    }
    else {
      return styles.yellowText;
    }
  };
  const { homeUsage, driveUsage, trashUsage } = calculateMonthData();

  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.welcomeText}>Select a Month to View Data</Text>
      
      {/* Dropdown to select the month */}
      <Picker
        selectedValue={selectedMonth}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedMonth(itemValue)}
      >
        {months.map((month, index) => (
          <Picker.Item key={index} label={month} value={index} />
        ))}
      </Picker>

      {/* Display the data for the selected month */}
      <Text style={[styles.dataText, getEnergyTextColor(homeUsage)]}>Home Energy Usage: {homeUsage * .86} kWh</Text>
      <Text style={[styles.dataText, getDrivingTextColor(driveUsage)]}>Total Driving Usage: {driveUsage * .4} kWh</Text>
      <Text style={[styles.dataText, getTrashTextColor(trashUsage)]}>Total Trash Usage: {trashUsage*1.2} kWh</Text>
      <Text style={[styles.dataText, getTotalTextColor(homeUsage+trashUsage+driveUsage)]}>Total Energy Usage: {homeUsage * .86+trashUsage*1.2+driveUsage * .4} kWh</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: 200,
    marginBottom: 200,
  },
  dataText: {
    fontSize: 18,
    marginBottom: 10,
  },
  redText: {
    color: 'red',
  },
  greenText: {
    color: 'green',
  },
  yellowText: {
    color: 'orange',
  },
});
