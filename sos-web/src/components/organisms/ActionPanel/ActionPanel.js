import { useNewEntryContext } from '../../../hooks/useNewEntryContext';
import { Loader } from '../../atoms/Loader/Loader';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import { Accordion } from '../../molecules/Accordion/Accordion';
import { Button } from '../../molecules/Button/Button';
import {
  StyledQuestion,
  StyledGrid,
  StyledButtonHolder,
} from './ActionPanel.styles';

export const ActionPanel = (props) => {
  const { actionInfo, submit } = useNewEntryContext();
  return (
    <Accordion isReverse title={actionInfo.sectionName}>
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
        {
          /*error*/ false && (
            <Paragraph type="small">
              Čuvanje nije uspelo. Pokušajte ponovo
            </Paragraph>
          )
        }
        {
          /*isLoading*/ false ? (
            <Loader />
          ) : (
            <Button onClick={submit}>Sačuvaj</Button>
          )
        }
      </StyledButtonHolder>
    </Accordion>
  );
};
