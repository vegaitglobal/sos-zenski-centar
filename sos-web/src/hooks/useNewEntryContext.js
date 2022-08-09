import React, { useContext, useCallback, useState, useMemo } from 'react';
import { useFetch } from './useFetch';
import { useHistory } from 'react-router';
import { useDataContext } from '../utils/store';
import { baseUrl } from '../utils/apiUrl';

const NewEntryContext = React.createContext();
const descriptionIds = [
  'ef2f3526-b26a-4ef7-8589-46eb74f64521',
  'ef482a82-911e-4df0-91bf-760aedb2bece',
  '1bdd5213-0159-4aa3-912b-b0039abcffeb',
];

export function useNewEntryContext() {
  return useContext(NewEntryContext);
}

export function NewEntryContextProvider({ children }) {
  const history = useHistory();
  const [categoryData, setCategoryData] = useState();
  const [errors, setErrors] = useState([]);
  const { data, resetData } = useDataContext();
  const [success, setSuccess] = useState(false);

  const { sendRequest, isLoading, isError, clearError } = useFetch();

  const initialize = useCallback(
    (selectedCategory) => {
      if (!selectedCategory) return history.push('/');

      sendRequest(`${baseUrl}/api/Categories/${selectedCategory.id}`)
        .then(setCategoryData)
        .catch((err) => {
          if (err.message === 'Unauthorized') history.push('/login');
        });
    },
    [history, sendRequest],
  );

  const submit = useMemo(() => {
    const send = () => {
      const mapAnswers = [];
      for (let obj in data) {
        if (obj !== 'description' && obj !== 'charts' && obj !== 'tables') {
          if (Array.isArray(data[obj])) {
            data[obj].forEach((el) => {
              mapAnswers.push({
                questionId: obj,
                answerId: el,
              });
            });
          } else {
            mapAnswers.push({
              questionId: obj,
              answerId: data[obj],
            });
          }
        }
      }

      const prepareData = {
        categoryId: categoryData?.id,
        ...(data.description ? { description: data.description } : {}),
        submittedAnswers: mapAnswers,
      };
      const requiredQuestionsIdByPage = [null];
      if (categoryData.id) {
        categoryData.actionInfo.questions.map((question) => {
          return (
            question.isRequired && requiredQuestionsIdByPage.push(question.id)
          );
        });
        categoryData.callerInfo.questions.map((question) => {
          return (
            question.isRequired && requiredQuestionsIdByPage.push(question.id)
          );
        });
      }

      const answeredQuestionsID = [
        null,
        ...mapAnswers.map((answer) => answer.questionId),
      ];

      setErrors(
        requiredQuestionsIdByPage.filter((id) => {
          if (data.description && descriptionIds.includes(id)) {
            return;
          }
          return !answeredQuestionsID.includes(id);
        }),
      );

      clearError();
      if (
        requiredQuestionsIdByPage.every((question) => {
          if (descriptionIds.includes(question) && data.description) {
            return true;
          }
          return answeredQuestionsID.includes(question);
        })
      ) {
        sendRequest(`${baseUrl}/api/entries`, false, {
          method: 'POST',
          body: JSON.stringify(prepareData),
        })
          .then(() => {
            setSuccess(true);

            setTimeout(() => {
              resetData();
              history.push('/');
              setSuccess(false);
            }, 1500);
          })
          .catch((e) => {
            console.log(e.message);
          });
      }
    };

    return { send, isError, isLoading };
  }, [
    sendRequest,
    isLoading,
    isError,
    clearError,
    data,
    categoryData,
    history,
    resetData,
  ]);

  // TODO
  // const questions = categoryData?.actionInfo || { questions: [] };

  return (
    <NewEntryContext.Provider
      value={{
        submit,
        initialize,
        actionInfo: categoryData?.actionInfo || { questions: [] },
        callerInfo: categoryData?.serviceInfo || { questions: [] },
        serviceInfo: categoryData?.callerInfo || { questions: [] },
        success,
        errors,
      }}
    >
      {children}
    </NewEntryContext.Provider>
  );
}
