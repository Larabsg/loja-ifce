import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Card from './src/shared/components/Card';
import Login from './src/modules/login/screens/Login';
import Routes from './src/routes';

export default function App() {

  return (

      <Routes/>
  )

}
