import asyncComponentLoader from '@/utils/loader';

import { Routes } from './types';

const routes: Routes = [
  {
    component: asyncComponentLoader(() => import('@/pages/Landing')),
    path: '/',
    routes: [
      {
        path: 'game',
        component: asyncComponentLoader(() => import('@/pages/Games/GameFormByName')),
      },
      {
        path: 'qr',
        component: asyncComponentLoader(() => import('@/pages/Games/GameFormByQR')),
      },
    ],
  },
  {
    component: asyncComponentLoader(() => import('@/pages/Profiles/Profiles')),
    path: '/profiles',
    routes: [
      {
        path: 'new',
        component: asyncComponentLoader(() => import('@/pages/Profiles/ProfileForm')),
      },
      {
        path: ':profileKey',
        component: asyncComponentLoader(() => import('@/pages/Profiles/ProfileForm')),
      },
    ],
  },
  {
    component: asyncComponentLoader(() => import('@/pages/Games/GameDetail')),
    path: '/games/:gameKey',
    routes: [
      {
        component: asyncComponentLoader(() => import('@/pages/Games/GameLobby')),
        path: '',
      },
      {
        component: asyncComponentLoader(() => import('@/pages/Rounds/RoundHistory')),
        path: 'history',
      },
      {
        component: asyncComponentLoader(() => import('@/pages/Rounds/PastRound')),
        path: 'past/:roundKey',
      },
      {
        component: asyncComponentLoader(() => import('@/pages/Games/GameSetup')),
        path: 'setup',
      },
      {
        component: asyncComponentLoader(() => import('@/pages/Games/GameStats')),
        path: 'stats',
      },
      {
        component: asyncComponentLoader(() => import('@/pages/Games/GameShare')),
        path: 'share',
      },
      {
        component: asyncComponentLoader(() => import('@/pages/Rounds/RoundDetail')),
        path: 'rounds/:roundKey',
        routes: [
          {
            component: asyncComponentLoader(() => import('@/pages/Rounds/RoundScoresForm')),
            path: 'scores',
          },
          {
            component: asyncComponentLoader(() => import('@/pages/Rounds/ScoreAdd')),
            path: 'team/:teamKey/score/add',
          },
        ],
      },
      {
        component: asyncComponentLoader(() => import('@/pages/Games/GameManageTeams')),
        path: 'teams',
        routes: [
          {
            component: asyncComponentLoader(() => import('@/pages/Teams/TeamCreate')),
            path: 'new',
          },
        ],
      },
      {
        component: asyncComponentLoader(() => import('@/pages/Teams/ParticipantEdit')),
        path: 'edit/:teamKey',
      },
      {
        component: asyncComponentLoader(() => import('@/pages/Games/GameUpdate')),
        path: 'update',
      },
      {
        component: asyncComponentLoader(() => import('@/pages/NotFound')),
        path: '*',
      },
    ],
  },
  {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
  },
];

export default routes;
