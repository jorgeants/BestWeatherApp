import React from 'react';
import { Text } from 'react-native';

import { Background, Container, SafeContainer } from './styles';

const Main = () => {
  return (
    <Background>
      <SafeContainer>
        <Container>
          <Text>Forecast</Text>
        </Container>
      </SafeContainer>
    </Background>
  );
};

export default Main;
