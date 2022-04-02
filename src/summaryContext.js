import React, { createContext } from "react";

export const SummaryContext = createContext();

export const SummaryProvider = (props) => {
  const [summaryList, setSummaryList] = React.useState({
    location: null,
    services: [],
    technician: null,
    schedule: null,
  });
  // const [display, setDisplay] = React.useState(false);

  const updateList = (newList) => {
    setSummaryList((prevList) => ({ ...prevList, ...newList }));
    // setDisplay(true);
  };

  const value = { summaryList, updateList };

  return (
    <SummaryContext.Provider value={value}>
      {props.children}
    </SummaryContext.Provider>
  );
};
