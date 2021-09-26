import { useFetch } from '../../../hooks/useFetch';
import {
  StyledCategories,
  StyledInput,
  StyledItem,
  StyledLabel,
  StyledLabelText,
} from './Categories.styles';

const CATEGORIES = [
  {
    label: 'Konsultacije SOS telefonom',
    value: 'sos-telefon',
  },
  {
    label: 'Individualno-psihološko savetovanje',
    value: '-ndividualno-psihološko-savetovanje',
  },
  {
    label: 'Omladinsko savetovanje',
    value: 'omladinsko-savetovanje',
  },
  {
    label: 'Konsultacije preko poruka',
    value: 'konsultacije-preko-poruka',
  },
  {
    label: 'Pravna pomoć',
    value: 'pravna-pomoc',
  },
];

export const Categories = (props) => {
  const { /*sendRequest,*/ isLoading } = useFetch();

  const handleChange = async ({ target }) => {
    // const { value } = target;
    // const response = await sendRequest('/api');
    // console.log(response);
  };

  // useEffect(() => {
  //   const fetch = async () => {
  //     const headers = {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${getToken()}`,
  //     };
  //     const response = await sendRequest(
  //       `${BASE_URL}/categories`,
  //       'GET',
  //       headers,
  //     );

  //     console.log(response);
  //   };

  //   fetch();
  // }, [sendRequest]);

  return (
    <StyledCategories {...props}>
      {CATEGORIES.map(({ label, value }) => (
        <StyledItem key={value}>
          <StyledLabel>
            <StyledInput
              type="radio"
              name="category"
              value={value}
              onChange={handleChange}
              disabled={isLoading}
            />
            <StyledLabelText>{label}</StyledLabelText>
          </StyledLabel>
        </StyledItem>
      ))}
    </StyledCategories>
  );
};
