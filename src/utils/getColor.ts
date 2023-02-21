import Theme from "../theme";
import { Color } from "../types/Theme";

const getColor = (color?: Color) => Theme.color[color || 'principal'];

export default getColor;
