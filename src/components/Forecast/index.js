import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import ForecastItem from '~/components/ForecastItem';

import { Container, ForecastTitle } from './styles';

const Forecast = ({ data }) => {
  const widthScreen = Dimensions.get('screen').width;

  const renderDay = ({ item }) => {
    return <ForecastItem item={item} />;
  };

  return (
    <Container>
      <ForecastTitle>Previsão para os próximos dias</ForecastTitle>
      <Carousel
        data={data}
        renderItem={renderDay}
        sliderWidth={widthScreen}
        itemWidth={widthScreen / 2}
      />
    </Container>
  );
};

Forecast.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Forecast;
