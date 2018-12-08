import React from 'react';
import { map } from 'lodash';

const Championship = ({ teams, round }) => (
  <ul>
    {teams.map(team => (
      <li key={team.name}>
        <span>{team.name}</span>
        <ul>
          {map(team.rounds[round], (score, index) => (
            <li key={index}>{score}</li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
);

export default Championship;
