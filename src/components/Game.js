import React from 'react';
import { useNavigate } from 'react-router-dom';

import GameGuard from './game/Guard';
import GameTop from './game/Top';
import TeamList from './game/team/list/List';
import GameActionStart from './game/action/Start';
import PageViewTracker from './PageViewTracker';

export default function Game() {
  const navigate = useNavigate();
  const goToRound = (round) => navigate(`rounds/${round}`);

  return (
    <>
      <GameTop />
      <GameGuard>
        <TeamList onClickChampionship={goToRound} />
        <GameActionStart onStart={goToRound} />
      </GameGuard>
      <PageViewTracker />
    </>
  );
}
