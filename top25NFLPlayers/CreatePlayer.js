import React, {PureComponent} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';

const createPlayerMutation = gql`
  mutation CreatePlayer(
    $name: String!
    $position: String!
    $team: String!
    $jerseyNumber: Int!
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
      team
      position
      jerseyNumber
      wonSuperBowl
    }
  }
`;

export default class CreatePlayer extends PureComponent {
  constructor() {
    super();
    this.state = {
      currentName: '',
      currentPosition: '',
      currentTeam: '',
      currentJerseyNumber: '',
      currentWonSuperBowl: false,
    };
  }

  static navigationOptions = {
    drawerLabel: 'Create Player',
  };

  createPlayerFunc(func) {
    const {
      currentName,
      currentPosition,
      currentTeam,
      currentJerseyNumber,
      currentWonSuperBowl,
    } = this.state;
    const newPlayer = {
      name: currentName,
      position: currentPosition,
      team: currentTeam,
      jerseyNumber: parseInt(currentJerseyNumber),
      wonSuperBowl: currentWonSuperBowl,
    };
    console.log("func", func)

    func({variables: newPlayer});
    alert('Player Created!!!');
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View>
        <Text style={styles.header}>Create Player</Text>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({currentName: text})}
          value={this.state.currentName}
        />
        <Text style={styles.label}>Position</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({currentPosition: text})}
          value={this.state.currentPosition}
        />
        <Text style={styles.label}>Team</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({currentTeam: text})}
          value={this.state.currentTeam}
        />
        <Text style={styles.label}>Jersey Number</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({currentJerseyNumber: text})}
          value={this.state.currentJerseyNumber}
        />
        <Text style={styles.label}>Won Super Bowl.</Text>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={[styles.button, styles.yesButton]}
            onPress={() => this.setState({currentWonSuperBowl: true})}>
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            title="No"
            style={[styles.button, styles.noButton]}
            onPress={() => this.setState({currentWonSuperBowl: false})}>
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
        </View>
        <Mutation mutation={createPlayerMutation}>
          {(createPlayer, error) => {
            if (error) {
              console.log('error----------', error);
            }
            if (createPlayer) {
              return (
                <TouchableOpacity
                  onPress={() => this.createPlayerFunc(createPlayer)}
                  style={styles.submitButton}>
                  <Text style={styles.buttonText}>Create Player</Text>
                </TouchableOpacity>
              );
            }
            return <Text>Loading...</Text>;
          }}
        </Mutation>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontFamily: Platform.select({
      ios: 'Chalkboard SE',
      android: 'sans-serif-condensed',
    }),
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
    fontFamily: Platform.select({
      ios: 'Chalkboard SE',
      android: 'sans-serif-condensed',
    }),
  },
  label: {
    fontSize: 20,
    fontFamily: Platform.select({
      ios: 'Chalkboard SE',
      android: 'sans-serif-condensed',
    }),
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
