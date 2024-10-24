import React, { useContext } from 'react';
import { EnergyContext } from '../context/EnergyContext'; // Import the context
import { Text, ScrollView, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function graph() {
  const { energyUsage } = useContext(EnergyContext); // Access the energy data from context

  const screenWidth = Dimensions.get('window').width;
  const visibleMonths = 3; // Display only 3 months at a time
  const chartWidth = (screenWidth / visibleMonths) * 12; // Calculate width for all 12 months

  // Prepare data for all months
  const homeUsageData = energyUsage.map((data) => parseFloat(data.homeUsage*.86 || 0));
  const driveUsageData = energyUsage.map((data) => parseFloat(data.driveUsage* 0.4|| 0));
  const trashUsageData = energyUsage.map((data) => parseFloat(data.trashUsage *1.2|| 0));
  const total = energyUsage.map((data) => parseFloat(data.homeUsage*.86 +data.driveUsage* 0.4+data.trashUsage *1.2|| 0));

  const data = {
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ], // X-axis labels for months
    datasets: [
      {
        data: homeUsageData, // Data for home usage
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Line color for home usage
        strokeWidth: 2, // Thickness of the line
        label: "Home Usage", // Label for the line
      },
      {
        data: driveUsageData, // Data for driving usage
        color: (opacity = 1) => `rgba(34, 193, 195, ${opacity})`, // Line color for driving usage
        strokeWidth: 2, // Thickness of the line
        label: "Drive Usage", // Label for the line
      },
      {
        data: trashUsageData, // Data for trash usage
        color: (opacity = 1) => `rgba(253, 187, 45, ${opacity})`, // Line color for trash usage
        strokeWidth: 2, // Thickness of the line
        label: "Trash Usage", // Label for the line
      },
      {
        data: total, // Data for trash usage
        color: (opacity = 1) => `rgba(51, 102, 0, ${opacity})`, // Line color for trash usage
        strokeWidth: 2, // Thickness of the line
        label: "Trash Usage", // Label for the line
      }
    ]
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.chartTitle}>Energy Usage Overview</Text>
        <Text style={styles.green}>Total</Text>
        <Text style={styles.orange}>Trash Usage</Text>
        <Text style={styles.purple}>Home Usage</Text>
        <Text style={styles.cyan}>Drive Usage</Text>

        {/* Enable horizontal scrolling for the chart */}
        <ScrollView horizontal={true}>
          <LineChart
            data={data}
            width={chartWidth} // Set chart width for 12 months (scrollable)
            height={600} // Set chart height
            chartConfig={{
              backgroundColor: '#006600',
              backgroundGradientFrom: '#e0e0e0',
              backgroundGradientTo: '#e0e0e0',
              decimalPlaces: 2, // Rounds values to 2 decimal places
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
           
                
              },
            }}
            bezier // Optional: makes the chart curve
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
  },
  green: {
    color: '#336600',
    textAlign: 'center',

  },
  orange: {
    color: '#FDBB2D',
    textAlign: 'center',


  },
  purple: {
    color: '#8741F4',
    textAlign: 'center',


  },
  cyan: {
    color: '#22C1C3',
    textAlign: 'center',


  }
});
