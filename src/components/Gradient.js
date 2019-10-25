/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import generator from "../generator";
import withPresets from "../hoc/withPresets";

function GradientContainer(props) {
  const { gradient, angle, ...rest } = props;
  return <div {...rest} />;
}

GradientContainer.propTypes = {
  className: PropTypes.string,
  preset: PropTypes.string,
  angle: PropTypes.number,
  type: PropTypes.string,
  textMask: PropTypes.bool,
  scale: PropTypes.string,
};

GradientContainer.defaultProps = {
  angle: -90,
  textMask: false,
};

const Gradient = styled(GradientContainer)`
  ${props => (props ? generator(props) : generator())}
`;

export default withPresets(Gradient);
