import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Home from './Home';
import PlayersList from './PlayersList';
import CreatePlayer from './source/useCreatePlayer'

const NavStack = createStackNavigator({
    Home: Home,
    PlayersList: PlayersList,
    CreatePlayer: CreatePlayer,
},
{
    initialRouteName: 'Home',
});

const App = createAppContainer(NavStack);

export default App;