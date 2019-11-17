import React from 'react';
import usePlayersList from "./usePlayersList"

import {
  TouchableOpacity,
  ScrollView,
  Text,
  StyleSheet,
  Platform,
  FlatList,
} from 'react-native';


const renderItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={styles.itemText}>Position: {item.position}</Text>
      <Text style={styles.itemText}>Name: {item.name}</Text>
      <Text style={styles.itemText}>Team: {item.team}</Text>
      <Text style={styles.itemText}>Jersey Number: {item.jerseyNumber}</Text>
      <Text
        style={[
          styles.itemText,
          item.wonSuperBowl ? styles.wonSuperBowlText : styles.errorText,
        ]}>
        Won Superbowl: {item.wonSuperBowl ? 'YES' : 'NO'}
      </Text>
    </TouchableOpacity>
  );
};

const PlayersList = props => {
  const { players, loading } = usePlayersList()
  console.log("players", players)
  if (loading) return <Text>Loading ...</Text>
  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.itemText, styles.headerText]}>
        Top 25 NFL Players List
      </Text>
      <Text style={styles.openDrawerText} onPress={() => props.navigation.navigate("CreatePlayer")}>Open Drawer</Text>

      <FlatList
        keyExtractor={() => Math.random(4)}
        data={players}
        renderItem={renderItem}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 30,
    marginTop: 30,
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'black',
  },
  itemText: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: Platform.select({
      ios: 'Chalkboard SE',
      android: 'sans-serif-condensed',
    }),
  },
  errorText: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: Platform.select({
      ios: 'Chalkboard SE',
      android: 'sans-serif-condensed',
    }),
    color: 'red',
  },
  wonSuperBowlText: {
    color: 'green',
  },
  openDrawerText: {
    fontSize: 17,
    textAlign: 'center',
    color: '#33FF58',
  },
});

export default PlayersList;
