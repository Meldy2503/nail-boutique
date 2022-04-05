import React, { createContext } from "react";

export const SummaryContext = createContext();

export const SummaryProvider = (props) => {
  const [summaryList, setSummaryList] = React.useState({
    location: null,
    services: [],
    technician: null,
    schedule: null,
  });
  const updateList = (newList) => {
    setSummaryList((prevList) => ({ ...prevList, ...newList }));
  };

  const removeList = (service) => {
    const rem = summaryList.services.filter((item) => item.id !== service.id);
    updateList({ services: rem });
  };
  const addServiceToList = (service) => {
    const rem = summaryList.services.concat(service);
    updateList({ services: rem });
  };

  const [date, setDate] = React.useState(new Date());
  const onDateChange = (newDate) => {
    setDate(newDate);
    console.log(newDate);
  };

  const value = {
    summaryList,
    setSummaryList,
    updateList,
    date,
    onDateChange,
    removeList,
    addServiceToList,
  };

  return (
    <SummaryContext.Provider value={value}>
      {props.children}
    </SummaryContext.Provider>
  );
};
