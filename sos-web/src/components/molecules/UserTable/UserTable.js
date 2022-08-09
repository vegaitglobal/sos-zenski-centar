import { Icon } from '../../atoms/Icon/Icon';
import SRLabel from '../../atoms/SRLabel/SRLabel';
import {
  StyledButton,
  StyledButtonContainer,
  StyledTableRow,
  StyledUserTable,
} from './UserTable.styles';

const UserTable = ({ users, openEditModal, openDeleteModal }) => {
  return (
    <StyledUserTable>
      <thead>
        <tr>
          <th>Ime</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => (
          <StyledTableRow key={i}>
            <td>
              <span className={`test-${user.firstName}-name`}>
                {user.firstName} {user.lastName}
                {user.isAdmin && <Icon.Admin />}
              </span>
            </td>
            <td>{user.email}</td>
            <td>
              <StyledButtonContainer>
                <StyledButton onClick={() => openEditModal(user)}>
                  <SRLabel>Izmeni</SRLabel>
                  <Icon.Edit className={`test-${user.firstName}-edit`} />
                </StyledButton>
                <StyledButton
                  onClick={() => openDeleteModal(user)}
                  background="red"
                >
                  <SRLabel>Obriši</SRLabel>
                  <Icon.Delete className={`test-${user.firstName}-delete`} />
                </StyledButton>
              </StyledButtonContainer>
            </td>
          </StyledTableRow>
        ))}
      </tbody>
    </StyledUserTable>
  );
};

export default UserTable;
