import React from "react";
import Svg, { Circle, Line } from "react-native-svg";

export default function CancelIcon() {
  return (
    <Svg width="32" height="32" viewBox="0 0 100 100">
      <Circle cx="50" cy="50" r="40" fill="#888888" />
      <Line x1="30" y1="30" x2="70" y2="70" stroke="#FFFFFF" strokeWidth="7" />
      <Line x1="30" y1="70" x2="70" y2="30" stroke="#FFFFFF" strokeWidth="7" />
    </Svg>
  );
}
