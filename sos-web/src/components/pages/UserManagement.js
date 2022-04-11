import UsersPanel from "../organisms/UsersPanel/UsersPanel";
import { StyledUserManagement } from "./UserManagement.styles";

export const UserManagement = () => {
    return (
        <StyledUserManagement>
            <UsersPanel />
        </StyledUserManagement>
    );
}
