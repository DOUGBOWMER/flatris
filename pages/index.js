// @flow

import React from 'react';
import withRedux from 'next-redux-wrapper';
import { createStore } from '../store';
import { SocketProvider } from '../utils/socket/Provider';
import Layout from '../components/Layout';
import Auth from '../components/Auth';
import NewGame from '../components/NewGame';
import GameContainer from '../components/GameContainer';
import FlatrisGame from '../components/FlatrisGame';

const DefaultPage = () => (
  <Layout>
    <SocketProvider>
      <Auth>
        {curUser => (
          <NewGame curUser={curUser}>
            {curGame => (
              <GameContainer>
                <FlatrisGame curUser={curUser} game={curGame} />
              </GameContainer>
            )}
          </NewGame>
        )}
      </Auth>
    </SocketProvider>
  </Layout>
);

export default withRedux(createStore)(DefaultPage);
