import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../navigation/TabNavigator';

export default function BakeryScreen() {
  const items = [
    { name: 'Bread Loaf', price: '$1.50', image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1887&auto=format&fit=crop' },
    { name: 'Croissant', price: '$2.20', image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=1887&auto=format&fit=crop' },
    { name: 'Donuts', price: '$3.00', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1887&auto=format&fit=crop' },
    { name: 'Cupcakes', price: '$2.80', image: 'https://images.unsplash.com/photo-1599785209707-28f0f8a1d7c1?q=80&w=1887&auto=format&fit=crop' },
    { name: 'Chocolate Cake', price: '$5.50', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1887&auto=format&fit=crop' },
    { name: 'Cookies', price: '$2.40', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1887&auto=format&fit=crop' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Fresh bakery items just out of the oven 🍞</Text>

      {items.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => alert(`${item.name} added to cart`)}
            >
              <Text style={styles.buttonText}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

