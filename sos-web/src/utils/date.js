const formatDate = (date) => {
  let validDate = date.toLocaleDateString('en-GB');
  const valid = (() => {
    const day = validDate.split('/')[0];
    const month = validDate.split('/')[1];
    const year = validDate.split('/')[2];
    return `${year}-${month}-${day}`;
  })();
  return valid;
};

export const getLastMonth = () => {
  const today = new Date();

  const firstDay = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  const lastDay = new Date(today.getFullYear(), today.getMonth(), 0);

  return {
    firstDay: formatDate(firstDay),
    lastDay: formatDate(lastDay),
  };
};
