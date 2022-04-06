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

  const removeServiceFromList = (service) => {
    const newServiceList = summaryList.services.filter(
      (item) => item.id !== service.id
    );
    updateList({ services: newServiceList });
  };

  const addServiceToList = (service) => {
    const newServiceList = summaryList.services.concat(service);
    updateList({ services: newServiceList });
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
    removeServiceFromList,
    addServiceToList,
  };

  return (
    <SummaryContext.Provider value={value}>
      {props.children}
    </SummaryContext.Provider>
  );
};
