import React, {useState} from 'react';
import {useMutation} from '@apollo/react-hooks';

import gql from 'graphql-tag';

import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const ADD_PLAYER = gql`
  mutation CreatePlayer(
    $name: String!
    $position: String!
    $team: String!
    $jerseyNumber: String!
    $wonSuperBowl: Boolean!
  ) {
    createPlayer(
      name: $name
      position: $position
      team: $team
      jerseyNumber: $jerseyNumber
      wonSuperBowl: $wonSuperBowl
    ) {
      name
      position
      team
      jerseyNumber
      wonSuperBowl
    }
  }
`;

const PlayersList = () => {
  const [currentName, setCurrentName] = useState('');
  const [currentPosition, setCurrentPosition] = useState('');
  const [currentTeam, setCurrentTeam] = useState('');
  const [currentJerseyNumber, setCurrentJerseyNumber] = useState('');
  const [currentWonSuperBowl, setCurrentWonSuperBowl] = useState(false);

  const [createPlayer, {data}] = useMutation(ADD_PLAYER);
  // console.log('data', currentName, currentPosition, currentTeam, currentJerseyNumber, currentWonSuperBowl);
console.log("currentJerseyNumber", currentJerseyNumber)
  return (
    <View>
      <Text style={styles.header}>Create Player</Text>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={currentName => setCurrentName(currentName)}
        value={currentName}
      />
      <Text style={styles.label}>Position</Text>
      <TextInput
        style={styles.input}
        onChangeText={currentPosition => setCurrentPosition(currentPosition)}
        value={currentPosition}
      />
      <Text style={styles.label}>Team</Text>
      <TextInput
        style={styles.input}
        onChangeText={currentTeam => setCurrentTeam(currentTeam)}
        value={currentTeam}
      />
      <Text style={styles.label}>Jersey Number</Text>
      <TextInput
        style={styles.input}
        onChangeText={currentJerseyNumber => setCurrentJerseyNumber(currentJerseyNumber)}
        value={currentJerseyNumber}
      />
      <Text style={styles.label}>Won Super Bowl.</Text>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={[styles.button, styles.yesButton]}
          onPress={() => setCurrentWonSuperBowl(true)}>
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          title="No"
          style={[styles.button, styles.noButton]}
          onPress={() => setCurrentWonSuperBowl(false)}>
          <Text style={styles.buttonText}>No</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => createPlayer({
          variables: {
            name: currentName,
            position: currentPosition,
            team: currentTeam,
            jerseyNumber: currentJerseyNumber,
            wonSuperBowl: currentWonSuperBowl,
          },
        })}
        style={styles.submitButton}>
        <Text style={styles.buttonText}>Create Player</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlayersList;

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontFamily: 'Chalkboard SE',
  },
  buttonView: {
    width: 350,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 35,
    borderRadius: 15,
  },
  yesButton: {
    backgroundColor: 'green',
  },
  noButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: 'Chalkboard SE',
  },
  label: {
    fontSize: 20,
    fontFamily: 'Chalkboard SE',
  },
  input: {
    width: 350,
    backgroundColor: 'lightgray',
  },
  submitButton: {
    marginTop: 100,
    marginLeft: 75,
    marginRight: 75,
    width: 200,
    backgroundColor: 'blue',
  },
});
