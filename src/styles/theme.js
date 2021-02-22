import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    white: 'linear-gradient(105.96deg, #FFFFFF 0%, #F0F0F0 97.86%)',
    primary: '#e0e0e0',
    error: '#FF377F',
    success: '#27a844',
    input: '#989FDB',
    buttonBackground: 'linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);',
    background: '#E5E5E5',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Theme;
