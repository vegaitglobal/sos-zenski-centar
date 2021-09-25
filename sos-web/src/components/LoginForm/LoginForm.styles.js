import styled from "styled-components";
import { typeStyle } from "../../styles/config/typeStyles";
import { Container } from "../layout/Container";
import { color } from "../../styles/config/theme";
import { Button } from "../Button/Button";

export const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 0 0 50%;
    padding: 50px;

    & svg {
        margin-bottom: 20px;
    }

    & h1 {
        position: relative;
        margin-bottom: 40px;
        &::after {
            content: '';
            position: absolute;
            top: calc(100% + 20px);
            left: 50%;
            transform: translateX(-50%);
            height: 1px;
            width: 47px;
            background-color: #57415F;
        }
    }

    & p {
        margin-bottom: 20px;
    }
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const StyledLink = styled.a`
    margin-bottom: 20px;
    ${typeStyle.small};
    color: ${color.pinkLink};
    align-self: center;
    &:hover,
    &:focus {
        color: ${color.purple};
        text-decoration: underline;
    }
`;

export const StyledButton = styled(Button)`
    margin: 0 auto;
`;