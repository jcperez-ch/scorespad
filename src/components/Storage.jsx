import React, { useContext } from 'react';
import { map, mapValues } from 'lodash';
import { Redirect } from 'react-router-dom';
import { createState } from './game/actionCreators';
import GameStoreContext from './game/context/Store';

const transformTeam = ({ teamName: name, ...team }) => ({
  name,
  ...team,
});

const transformGame = ({ gameName: name, roundKey: round, teams }) => ({
  name,
  round,
  teams: map(teams, transformTeam),
});

const Storage = ({ location }) => {
  const state = unescape(location.search).substr(7);
  const [, dispatch] = useContext(GameStoreContext);
  try {
    const { gms, locale } = JSON.parse(state);
    if (Object.keys(gms).length) {
      const newState = mapValues(gms, transformGame);
      dispatch(createState(newState));
      window.localStorage.setItem('gms', JSON.stringify(newState));
    }
    if (['es', 'en', 'fr'].includes(locale)) {
      window.localStorage.setItem('locale', locale);
    }
  } catch (e) {
    return <Redirect to={`/?nostate=${e.message}`} />;
  }

  return <Redirect to="/" />;
};

export default Storage;
