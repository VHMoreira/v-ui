import Theme from "../theme";
import { FontSize } from "../types/Theme";

const getFontSize = (size?: FontSize) => Theme.font.size[size || 'medium'];

export default getFontSize;
