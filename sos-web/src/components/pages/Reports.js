import { ReportsContent } from '../organisms/ReportsContent/ReportsContent';
import { StyledReports } from './Reports.styles';

export const categoryData = {
  sectionId: 'id',
  sectionName: 'Opis usluge',
  questions: [
    {
      id: 'opis-problema',
      icon: 'any',
      label: 'Kratak Opis Problema',
      options: [
        {
          id: 'id',
          label: 'opis 1',
        },
        {
          id: 'id2',
          label: 'opis 2',
        },
        {
          id: 'id3',
          label: 'opis 3',
        },
      ],
      condition: null,
    },
    {
      id: 'neki-treci',
      icon: 'any',
      label: 'Treci Opis Problema',
      options: [
        {
          id: 'treciId',
          label: 'Treci opis 1',
        },
        {
          id: 'treciId2',
          label: 'Treci opis 2',
        },
        {
          id: 'itrecid3',
          label: 'Treci opis 3',
        },
      ],
      condition: {
        questionId: 'opis-problema',
        anaswerId: null,
      },
    },
    {
      id: 'tip-poziva',
      icon: 'any',
      label: 'Tip poziva',
      options: [
        {
          id: 'idTipid',
          label: 'tip 1',
        },
        {
          id: 'idTip2',
          label: 'tip 2',
        },
        {
          id: 'idTip3',
          label: 'tip 3',
        },
      ],
      condition: {
        questionId: 'opis-problema',
        anaswerId: 'id3',
      },
    },
  ],
};

export const Reports = () => {
  return (
    <StyledReports>
      {/* Question usage */}
      {/* {categoryData.questions.map(({ label, id, options, condition }) => (
        <Question
          key={id}
          label={label}
          id={id}
          options={options}
          condition={condition}
        />
      ))} */}
      <ReportsContent />
    </StyledReports>
  );
};
