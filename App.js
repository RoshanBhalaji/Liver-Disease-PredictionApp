import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import tw from 'twrnc';
import axios from 'axios';
import { useFonts } from 'expo-font';

export default function App() {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [totalBilirubin, setTotalBilirubin] = useState('');
  const [directBilirubin, setDirectBilirubin] = useState('');
  const [alkalinePhosphotase, setAlkalinePhosphotase] = useState('');
  const [alanineAminotransferase, setAlanineAminotransferase] = useState('');
  const [aspartateAminotransferase, setAspartateAminotransferase] = useState('');
  const [totalProteins, setTotalProteins] = useState('');
  const [albumin, setAlbumin] = useState('');
  const [albuminGlobulinRatio, setAlbuminGlobulinRatio] = useState('');

  const [fontsLoaded] = useFonts({
    Outfit: require('./assets/fonts/Outfit-Regular.ttf'), // Ensure you have the font file in this path
  });

  if (!fontsLoaded) {
    return (
      <View style={tw`flex-1 justify-center items-center bg-gray-100`}>
        <ActivityIndicator size="large" color="#3498db" />
        <Text style={[tw`mt-4 text-gray-600`, { fontFamily: 'Outfit' }]}>Loading assets...</Text>
      </View>
    );
  }

  const handleSubmit = async () => {
    try {
      const API_URL = 'https://liverapp.onrender.com/predict'; // Replace with your endpoint
      const response = await axios.post(API_URL, {
        Age: age,
        Gender: gender,
        Total_Bilirubin: totalBilirubin,
        Direct_Bilirubin: directBilirubin,
        Alkaline_Phosphotase: alkalinePhosphotase,
        Alamine_Aminotransferase: alanineAminotransferase,
        Aspartate_Aminotransferase: aspartateAminotransferase,
        Total_Protiens: totalProteins,
        Albumin: albumin,
        Albumin_and_Globulin_Ratio: albuminGlobulinRatio,
      });

      Alert.alert('Prediction Result', response.data.result);
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', error.response?.data?.error || 'An unexpected error occurred.');
    }
  };

  const handleSampleData = (sampleType) => {
    if (sampleType === 'healthy') {
      setAge('30');
      setGender('Male');
      setTotalBilirubin('0.9');
      setDirectBilirubin('0.3');
      setAlkalinePhosphotase('80');
      setAlanineAminotransferase('25');
      setAspartateAminotransferase('30');
      setTotalProteins('7.2');
      setAlbumin('4.5');
      setAlbuminGlobulinRatio('1.2');
    } else if (sampleType === 'mild') {
      setAge('45');
      setGender('Female');
      setTotalBilirubin('1.2');
      setDirectBilirubin('0.4');
      setAlkalinePhosphotase('100');
      setAlanineAminotransferase('50');
      setAspartateAminotransferase('45');
      setTotalProteins('6.5');
      setAlbumin('3.8');
      setAlbuminGlobulinRatio('1.4');
    } else if (sampleType === 'severe') {
      setAge('60');
      setGender('Male');
      setTotalBilirubin('3.5');
      setDirectBilirubin('2.0');
      setAlkalinePhosphotase('200');
      setAlanineAminotransferase('120');
      setAspartateAminotransferase('110');
      setTotalProteins('5.5');
      setAlbumin('2.8');
      setAlbuminGlobulinRatio('1.0');
    }
  };

  return (
    <KeyboardAvoidingView
      style={tw`flex-1`}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ImageBackground
        source={{ uri: 'https://example.com/your-background-image.jpg' }} // Replace with your image URL
        style={tw`flex-1 justify-center`}
      >
        <ScrollView contentContainerStyle={tw`flex-1 p-3`}>
          <View style={[tw`bg-white rounded-lg shadow-lg p-4 mb-4 opacity-90`, { fontFamily: 'Outfit' }]}>
            <Text style={[tw`text-xl font-bold text-center text-blue-600 mb-4`, { fontFamily: 'Outfit' }]}>
              Health Prediction
            </Text>

            <TextInput
              placeholder="Age"
              style={[tw`border border-gray-300 rounded-lg px-2 py-1 mb-3 text-sm`, { fontFamily: 'Outfit' }]}
              keyboardType="numeric"
              value={age}
              onChangeText={setAge}
            />
            <TextInput
              placeholder="Gender (Male/Female)"
              style={[tw`border border-gray-300 rounded-lg px-2 py-1 mb-3 text-sm`, { fontFamily: 'Outfit' }]}
              value={gender}
              onChangeText={setGender}
            />
            <TextInput
              placeholder="Total Bilirubin"
              style={[tw`border border-gray-300 rounded-lg px-2 py-1 mb-3 text-sm`, { fontFamily: 'Outfit' }]}
              keyboardType="numeric"
              value={totalBilirubin}
              onChangeText={setTotalBilirubin}
            />
            <TextInput
              placeholder="Direct Bilirubin"
              style={[tw`border border-gray-300 rounded-lg px-2 py-1 mb-3 text-sm`, { fontFamily: 'Outfit' }]}
              keyboardType="numeric"
              value={directBilirubin}
              onChangeText={setDirectBilirubin}
            />
            <TextInput
              placeholder="Alkaline Phosphotase"
              style={[tw`border border-gray-300 rounded-lg px-2 py-1 mb-3 text-sm`, { fontFamily: 'Outfit' }]}
              keyboardType="numeric"
              value={alkalinePhosphotase}
              onChangeText={setAlkalinePhosphotase}
            />
            <TextInput
              placeholder="Alanine Aminotransferase"
              style={[tw`border border-gray-300 rounded-lg px-2 py-1 mb-3 text-sm`, { fontFamily: 'Outfit' }]}
              keyboardType="numeric"
              value={alanineAminotransferase}
              onChangeText={setAlanineAminotransferase}
            />
            <TextInput
              placeholder="Aspartate Aminotransferase"
              style={[tw`border border-gray-300 rounded-lg px-2 py-1 mb-3 text-sm`, { fontFamily: 'Outfit' }]}
              keyboardType="numeric"
              value={aspartateAminotransferase}
              onChangeText={setAspartateAminotransferase}
            />
            <TextInput
              placeholder="Total Proteins"
              style={[tw`border border-gray-300 rounded-lg px-2 py-1 mb-3 text-sm`, { fontFamily: 'Outfit' }]}
              keyboardType="numeric"
              value={totalProteins}
              onChangeText={setTotalProteins}
            />
            <TextInput
              placeholder="Albumin"
              style={[tw`border border-gray-300 rounded-lg px-2 py-1 mb-3 text-sm`, { fontFamily: 'Outfit' }]}
              keyboardType="numeric"
              value={albumin}
              onChangeText={setAlbumin}
            />
            <TextInput
              placeholder="Albumin and Globulin Ratio"
              style={[tw`border border-gray-300 rounded-lg px-2 py-1 mb-3 text-sm`, { fontFamily: 'Outfit' }]}
              keyboardType="numeric"
              value={albuminGlobulinRatio}
              onChangeText={setAlbuminGlobulinRatio}
            />

            <Pressable onPress={handleSubmit} style={tw`bg-blue-600 rounded-lg py-2 mt-4`}>
              <Text style={[tw`text-center text-white text-sm font-semibold`, { fontFamily: 'Outfit' }]}>Predict</Text>
            </Pressable>

            <Pressable onPress={() => handleSampleData('healthy')} style={tw`bg-green-600 rounded-lg py-2 mt-4`}>
              <Text style={[tw`text-center text-white text-sm font-semibold`, { fontFamily: 'Outfit' }]}>
                Healthy Sample
              </Text>
            </Pressable>

            <Pressable onPress={() => handleSampleData('mild')} style={tw`bg-yellow-600 rounded-lg py-2 mt-4`}>
              <Text style={[tw`text-center text-white text-sm font-semibold`, { fontFamily: 'Outfit' }]}>
                Mild Sample
              </Text>
            </Pressable>

            <Pressable onPress={() => handleSampleData('severe')} style={tw`bg-red-600 rounded-lg py-2 mt-4`}>
              <Text style={[tw`text-center text-white text-sm font-semibold`, { fontFamily: 'Outfit' }]}>
                Severe Sample
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
