import React, {PropsWithChildren} from "react";
import CardProps from "../../types/Card";
import { StyledCard } from "./styles";

const Card: React.FC<PropsWithChildren<CardProps>> = ({
  title,
  elevated,
  width,
  children
 }) => {
  return (
    <StyledCard width={width} elevated={elevated}>
      <header>
        {title}
      </header>
      <section>
        {children}
      </section>
    </StyledCard>
  );
}

export default Card;
