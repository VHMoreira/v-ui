import Theme from "../theme";
import { Spacing } from "../types/Theme";

const getSpacing = (top: Spacing, left: Spacing, bottom: Spacing, right: Spacing) => {
  const { spacing } = Theme;
  return `${spacing[top]} ${spacing[left]} ${spacing[bottom]} ${spacing[right]}`
};

export default getSpacing;
