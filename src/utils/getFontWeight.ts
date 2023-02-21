import Theme from "../theme";
import { FontWeight } from "../types/Theme";

const getFontWeight = (weight?: FontWeight) => Theme.font.weight[weight || 'normal'];

export default getFontWeight;
