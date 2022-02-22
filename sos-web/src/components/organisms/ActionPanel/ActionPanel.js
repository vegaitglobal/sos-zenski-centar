import { useEffect, useMemo } from 'react';
import { useNewEntryContext } from '../../../hooks/useNewEntryContext';
import { Loader } from '../../atoms/Loader/Loader';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import { Accordion } from '../../molecules/Accordion/Accordion';
import { Button } from '../../molecules/Button/Button';
import { useModalContext } from '../../../hooks/useModalContext';
import {
  StyledQuestion,
  StyledGrid,
  StyledButtonHolder,
  StyledContent,
  StyledCheckmark,
} from './ActionPanel.styles';
import { Heading } from '../../atoms/Heading/Heading';

const isPersistent = true;

export const ActionPanel = () => {
  const { actionInfo, submit, success, errors } = useNewEntryContext();
  const { createModal } = useModalContext();

  const {
    element: SuccessModal,
    open: openSuccessModal,
    close: closeSuccessModal,
  } = useMemo(() => createModal('success', isPersistent), [createModal]);

  useEffect(() => {
    if (success) {
      openSuccessModal();
    }
  }, [success, openSuccessModal]);

  useEffect(() => {
    return () => {
      closeSuccessModal();
    }
  }, [closeSuccessModal]);

  return (
    <Accordion isReverse title={actionInfo.sectionName}>
      {success && (
        <SuccessModal>
          <StyledContent>
            <StyledCheckmark />
            <Heading type="h2">Uspešno sačuvano!</Heading>
          </StyledContent>
        </SuccessModal>
      )}
      <StyledGrid>
        {actionInfo.questions.map(({ label, id, options, condition }) => (
          <StyledQuestion
            key={id}
            label={label}
            id={id}
            options={options}
            condition={condition}
          />
        ))}
      </StyledGrid>
      <StyledButtonHolder>
        {errors.length > 0 && (
          <Paragraph type="small">
            Nisu sva polja popunjena
          </Paragraph>
        )}
        {submit.isError && (
          <Paragraph type="small">
            Čuvanje nije uspelo. Pokušajte ponovo
          </Paragraph>
        )}
        {submit.isLoading ? (
          <Loader />
        ) : (
          <Button onClick={submit.send}>Sačuvaj</Button>
        )}
      </StyledButtonHolder>
    </Accordion>
  );
};
