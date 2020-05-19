import React from 'react';
import PropTypes from 'prop-types';
import LottieView from 'lottie-react-native';

import { conditions } from '~/components/WeatherAnimatedIcon/resources';

const WeatherAnimatedIcon = ({ condition }) => {
  return condition ? (
    <LottieView source={conditions[condition]} autoPlay loop />
  ) : null;
};

WeatherAnimatedIcon.propTypes = {
  condition: PropTypes.string.isRequired,
};

export default WeatherAnimatedIcon;
