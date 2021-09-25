import styled from "styled-components";
import { Container } from "../layout/Container";

export const StyledLogin = styled.section`
    & img {
        width: 50%;
        height: 800px;
        object-fit: contain;
    }
`;

export const StyledContainer = styled(Container)`
    display: flex;
    align-items: stretch;
`;