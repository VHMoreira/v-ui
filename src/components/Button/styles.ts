import styled, { css } from 'styled-components';
import Theme from '../../theme';
import ButtonProps from '../../types/Button';
import getColor from '../../utils/getColor';
import getFontSize from '../../utils/getFontSize';
import getFontWeight from '../../utils/getFontWeight';
import getSpacing from '../../utils/getSpacing';

type StyledButtonProps = Omit<ButtonProps, 'text'>;

export const StyledButton = styled.button<StyledButtonProps>`
    all: unset;
    background-color: ${({ color }) => getColor(color)};
    border: 1px solid ${({ color }) => getColor(color)};
    padding: ${getSpacing('small', 'mediumLarge', 'small', 'mediumLarge')};
    font-weight: ${getFontWeight('bold')};
    font-size: ${getFontSize('medium')};
    color: ${getColor('white')};
    width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 10px;
    cursor: pointer;

    ${({ outlined, color }) => outlined && css`
      background-color: ${getColor('transparent')};
      color: ${getColor(color)};
      border: 1px solid ${getColor(color)};
    `}

    &:disabled{
      background-color: ${getColor('lightGrey')};
      color: ${getColor('darkGrey')};
      border: 1px solid ${getColor('lightGrey')};
      cursor: default;
    }

`;
