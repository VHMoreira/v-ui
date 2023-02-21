import styled, { css } from "styled-components";
import CardProps from "../../types/Card";
import getColor from "../../utils/getColor";
import getFontSize from "../../utils/getFontSize";
import getFontWeight from "../../utils/getFontWeight";
import getSpacing from "../../utils/getSpacing";

export const StyledCard = styled.li<Omit<CardProps, 'title'>>`
  all: unset;
  display: flex;
  flex-direction: column;
  border: 1.5px solid ${getColor('lightGrey')};
  background-color: ${getColor('white')};
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 10px;
  width: ${({ width }) => width || '100%'};

  >header{
    box-sizing: border-box;
    width: 100%;
    padding: ${getSpacing('small', 'tiny', 'small', 'tiny')};
    border-bottom: 1px solid ${getColor('lightGrey')};
    font-weight: ${getFontWeight("bold")};
    font-size: ${getFontSize("large")};
    color: ${getColor('principal')}
  }

  >section {
    box-sizing: border-box;
    flex: 1;
    font-weight: ${getFontWeight("normal")};
    font-size: ${getFontSize("medium")};
    padding: ${getSpacing('small', 'tiny', 'small', 'tiny')};
  }

  ${({ elevated }) => elevated && css`
    box-shadow: 3px 3px 10px #00000025;
  `}
`;
