import styled from 'styled-components';
import { color } from '../../styles/config/theme';
import { typeStyle } from '../../styles/config/typeStyles';

export const StyledInput = styled.input`
    width: 100%;
    ${typeStyle.large};
    padding: 11px;
    border-radius: 5px;
    border: 1px solid ${color.greyLight};
    background-color: ${color.greyLightest};
`;

export const StyledFormRow = styled.div`
    width: 100%;
    margin-bottom: 20px;
`;

export const StyledLabel = styled.label`
    display: inline-block;
    margin-bottom: 6px;
    ${typeStyle.medium};
    color: ${color.grey};
`;