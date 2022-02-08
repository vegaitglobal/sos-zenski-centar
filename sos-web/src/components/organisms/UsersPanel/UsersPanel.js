import { useCallback, useEffect, useMemo, useState } from 'react';
import { useFetch } from '../../../hooks/useFetch';
import { color } from '../../../styles/config/theme';
import { baseUrl } from '../../../utils/apiUrl';
import { Loader } from '../../atoms/Loader/Loader';
import { Input } from '../../molecules/Input/Input';
import { Button } from '../../molecules/Button/Button';
import UserTable from '../../molecules/UserTable/UserTable';
import { Heading } from '../../atoms/Heading/Heading';
import UserForm from '../UserForm/UserForm';
import { isAdmin } from '../../../utils/user.services';
import { useModalContext } from '../../../hooks/useModalContext';
import {
  StyledAccordion,
  StyledControls,
  StyledShell,
} from './UsersPanel.styles';
import { LoginFail } from '../LoginForm/LoginForm.styles';

const UsersPanel = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { sendRequest, isLoading, isError, clearError } = useFetch();
  const [error, setError] = useState('');
  const { createModal } = useModalContext();

  const {
    element: NewUserModal,
    open: openNewUserModal,
    close: closeNewUserModal,
  } = useMemo(() => createModal('newUser'), [createModal]);
  const {
    element: EditUserModal,
    open: openEditUserModal,
    close: closeEditUserModal,
  } = useMemo(() => createModal('editUser'), [createModal]);
  const {
    element: DeleteUserModal,
    open: openDeleteUserModal,
    close: closeDeleteUserModal,
  } = useMemo(() => createModal(), [createModal]);

  const openNewModal = (callback, user = null) => {
    if (user) setUser(user);
    clearError();
    callback();
  };

  useEffect(() => {
    if (!isAdmin()) {
      setError('Samo za administratore');
    } else {
      sendRequest(`${baseUrl}/api/Users`)
        .then((res) => {
          const sortedUsers = res.sort((a, b) =>
            a.firstName.localeCompare(b.firstName),
          );
          setUsers(sortedUsers);
          setFilteredUsers(sortedUsers);
        })
        .catch((err) => setError(err.message));
    }
  }, [sendRequest]);

  const handleFilter = useCallback(
    (e) => {
      const filteredUsers = users.filter(
        (user) =>
          user.firstName.toLowerCase().includes(e.target.value.toLowerCase()) ||
          user.email.toLowerCase().includes(e.target.value.toLowerCase()),
      );

      if (e.target.value.length) {
        setFilteredUsers(filteredUsers);
      } else {
        setFilteredUsers(users);
      }
    },
    [users],
  );

  const handleNewUser = useCallback(
    (e, form) => {
      e.preventDefault();

      sendRequest(`${baseUrl}/api/Users`, false, {
        method: 'POST',
        body: JSON.stringify(form),
      })
        .then(() => {
          setUsers((prevState) => [
            {
              firstName: form.firstName,
              lastName: form.lastName,
              email: form.email,
              isAdmin: form.isAdmin,
            },
            ...prevState,
          ]);
          setFilteredUsers((prevState) => [
            {
              firstName: form.firstName,
              lastName: form.lastName,
              email: form.email,
              isAdmin: form.isAdmin,
            },
            ...prevState,
          ]);
          closeNewUserModal();
        })
        .catch((err) => console.log(err.message));
    },
    [sendRequest, closeNewUserModal],
  );

  const handleEditUser = useCallback(
    (e, form) => {
      e.preventDefault();

      sendRequest(`${baseUrl}/api/Users/${user.email}`, false, {
        method: 'PUT',
        body: JSON.stringify(form),
      })
        .then(() => {
          closeEditUserModal();
          setUsers((prevState) => {
            const index = prevState.findIndex(
              (state) => state.email === user.email,
            );
            return [
              ...prevState,
              (prevState[index] = {
                ...prevState[index],
                firstName: form.firstName,
                lastName: form.lastName,
                isAdmin: form.isAdmin,
              }),
            ];
          });
          setFilteredUsers((prevState) => {
            const index = prevState.findIndex(
              (state) => state.email === user.email,
            );
            return [
              ...prevState,
              (prevState[index] = {
                ...prevState[index],
                firstName: form.firstName,
                lastName: form.lastName,
                isAdmin: form.isAdmin,
              }),
            ];
          });
          setUser(null);
        })
        .catch((err) => console.log(err.message));
    },
    [sendRequest, closeEditUserModal, user],
  );

  const handleDeleteUser = useCallback(() => {
    sendRequest(`${baseUrl}/api/Users/${user.email}`, false, {
      method: 'DELETE',
      body: user.email,
    })
      .then(() => {
        closeDeleteUserModal();
        setUsers((prevState) => {
          return prevState.filter((state) => state.email !== user.email);
        });
        setFilteredUsers((prevState) => {
          return prevState.filter((state) => state.email !== user.email);
        });
        setUser(null);
      })
      .catch((err) => console.log(err.message));
  }, [sendRequest, closeDeleteUserModal, user]);

  return (
    <>
      <StyledShell
        backgroundColor={color.pinkLight}
        title="Upravljanje nalozima"
      >
        <StyledAccordion $noPadding title="Nalozi" isClickable={false}>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Heading type="h2">{error}</Heading>
          ) : (
            <>
              <StyledControls>
                <Input label="Pretraži" onChange={handleFilter}></Input>
                <Button onClick={() => openNewModal(openNewUserModal)}>
                  Kreiraj novi nalog
                </Button>
              </StyledControls>
              {!!filteredUsers.length && (
                <UserTable
                  users={filteredUsers}
                  openEditModal={(user) =>
                    openNewModal(openEditUserModal, user)
                  }
                  openDeleteModal={(user) =>
                    openNewModal(openDeleteUserModal, user)
                  }
                />
              )}
            </>
          )}
          <NewUserModal>
            <UserForm
              buttonLabel="Kreiraj"
              title="Novi nalog"
              formHandler={(e, form) => handleNewUser(e, form)}
              isError={isError}
              isLoading={isLoading}
            />
          </NewUserModal>
          <EditUserModal>
            <UserForm
              buttonLabel="Sačuvaj"
              title={`${user?.firstName} ${user?.lastName}`}
              user={user}
              formHandler={(e, form) => handleEditUser(e, form)}
              isError={isError}
              isLoading={isLoading}
            />
          </EditUserModal>
          <DeleteUserModal>
            <Heading type="h2">
              Da li sigurno želite da obrišete nalog:
              <span>{`${user?.firstName} ${user?.lastName}`}</span>
              <span>{user?.email}</span>
              {isError && (
                <LoginFail>
                  Zahtev neuspešan. Molimo pokušajte ponovo.
                </LoginFail>
              )}
            </Heading>
            <Button onClick={handleDeleteUser} color="red">
              Obriši
            </Button>
          </DeleteUserModal>
        </StyledAccordion>
      </StyledShell>
    </>
  );
};

export default UsersPanel;
