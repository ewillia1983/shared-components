import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';
import userSpacing from 'extensions/userSpacing';

const H2 = styled.h2.withConfig({ displayName: 'H2' })`
  color: ${get('colors.text.default')};
  font-weight: 700;
  font-family: ${get('fonts.brand')};
  font-size: 2em;
  margin: ${userSpacing.text};
  padding: 0;
`;

H2.propTypes = {
  /**
   * Specify a CSS value or an object { top, right, bottom, left } or { vertical, horizontal } to
   * control the spacing around the heading. Defaults to a large space below the element.
   */
  spacing: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

H2.defaultProps = {
  spacing: { bottom: 'lg' },
  className: null,
  id: null,
};

/**
 * @component
 */
export default H2;
