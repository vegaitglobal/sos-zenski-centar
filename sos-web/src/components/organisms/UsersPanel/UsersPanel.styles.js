import styled from "styled-components";
import { typeStyle } from "../../../styles/config/typeStyles";
import { customScrollBar } from "../../../styles/helpers/customScrollbar";
import { Accordion } from "../../molecules/Accordion/Accordion";
import { StyledBody, StyledContent } from "../../molecules/Accordion/Accordion.styles";
import { StyledFormRow, StyledLabel } from "../../molecules/Input/Input.styles";
import { Shell } from "../Shell/Shell";

export const StyledShell = styled(Shell)`
    height: 100%;

    > div {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
`;

export const StyledAccordion = styled(Accordion)`
    height: 100%;

    ${StyledBody} {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow-y: auto;
        height: 0 !important;
        ${customScrollBar()};
    }

    ${StyledContent} {
        height: 100%;
    }
`;

export const StyledControls = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;

    ${StyledFormRow} {
        width: 300px;
        margin-right: auto;
    }

    ${StyledLabel} {
        ${typeStyle.large};
        font-weight: bold;
    }
`;
