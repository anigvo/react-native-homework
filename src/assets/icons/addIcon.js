import Svg, { Circle, Line } from "react-native-svg";

export default function addIcon() {
  return (
    <Svg width="32" height="32" viewBox="0 0 100 100">
      <Circle cx="50" cy="50" r="40" fill="#FF6C00" />
      <Line x1="30" y1="50" x2="70" y2="50" stroke="#FFFFFF" strokeWidth="7" />
      <Line x1="50" y1="30" x2="50" y2="70" stroke="#FFFFFF" strokeWidth="7" />
    </Svg>
  );
}
