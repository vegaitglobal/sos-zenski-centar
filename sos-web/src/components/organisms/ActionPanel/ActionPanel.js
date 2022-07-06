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
const multipleAnswersQuestion = [
  '657a5fd3-d9a9-4d61-a392-a54caefd4bb6',
  '146a9993-70df-4e2c-8cad-4e1c3aee1377',
  '0c465680-db66-428e-ac6b-6a1754e178ef',
  'cf6c7d5e-0c99-41e0-aa26-113ee257b70f',
  '56cb349a-b7bd-4825-9e29-6ffd6c383ab8',

  '54e9af82-6c54-4851-ac00-9ee68d05abac',
];

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
    };
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
            multipleAnswers={
              multipleAnswersQuestion.includes(id) ? true : false
            }
          />
        ))}
      </StyledGrid>
      <StyledButtonHolder>
        {errors.length > 0 && (
          <Paragraph type="small">Nisu sva polja popunjena</Paragraph>
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
