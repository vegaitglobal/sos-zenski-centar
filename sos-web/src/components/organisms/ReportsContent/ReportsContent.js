import { rgba } from 'polished';
import { theme } from '../../../styles/config/theme';
import { Accordion } from '../../molecules/Accordion/Accordion';
import { Table } from '../../molecules/Table/Table';
import { Shell } from '../Shell/Shell';

export const ReportsContent = () => {
  const table1Title =
    '2.1. Broj klijentkinja i klijenata sa iskustvom nasilja po uslugama';

  const table2Title = '2.2. Odnos žrtve sa nasilnikom';

  const array1 = [
    {
      text: 'SOS telefon',
      value: 38,
    },
    {
      text: 'Poruke',
      value: 12,
    },
    {
      text: 'Psihološko savetovanje',
      value: 14,
    },
    {
      text: 'Omladinsko savetovalište',
      value: 8,
    },
    {
      text: 'Pravna pomoć',
      value: 45,
    },
    {
      text: 'Ukupno',
      value: 117,
    },
  ];

  const array2 = [
    {
      text: 'Vanbračni partner',
      frequence: 11,
      value: 6.03,
    },
    {
      text: 'Bračni partner',
      frequence: 38,
      value: 21.08,
    },
    {
      text: 'Bivši vanbračni partner',
      frequence: 34,
      value: 19.5,
    },
    {
      text: 'Bivši vanbračni partner',
      frequence: 34,
      value: 19.5,
    },
    {
      text: 'Bivši vanbračni partner',
      frequence: 34,
      value: 19.5,
    },
    {
      text: 'Bivši vanbračni partner',
      frequence: 34,
      value: 19.5,
    },
    {
      text: 'Bivši vanbračni partner',
      frequence: 34,
      value: 19.5,
    },
    {
      text: 'Bivši vanbračni partner',
      frequence: 34,
      value: 19.5,
    },
    {
      text: 'Bivši vanbračni partner',
      frequence: 34,
      value: 19.5,
    },
    {
      text: 'Bivši vanbračni partner',
      frequence: 34,
      value: 19.5,
    },
    {
      text: 'Bivši vanbračni partner',
      frequence: 34,
      value: 19.5,
    },
  ];

  const table1 = [
    {
      text: 'Kategorija',
      value: 'text',
    },
    {
      text: 'Broj klijenata/kinja',
      value: 'value',
    },
  ];

  const table2 = [
    {
      text: 'Rodbinska veza',
      value: 'text',
    },
    {
      text: 'Frekvencija',
      value: 'value',
    },
    {
      text: 'Procenti',
      value: 'value',
    },
  ];

  return (
    <Shell
      backgroundColor={rgba(theme.color.greyLighter, 0.3)}
      title="Izveštaj"
    >
      <Accordion title="1. Opšti podaci">
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </Accordion>
      <Accordion title="2. Obraćanje zbog nasilja - broj klijenata i klijentkinja">
        <Table title={table1Title} rows={table1} array={array1}></Table>
        <Table title={table2Title} rows={table2} array={array2}></Table>
      </Accordion>
    </Shell>
  );
};
