import React, { createContext } from "react";

export const SummaryContext = createContext();

export const SummaryProvider = (props) => {
  const [summaryList, setSummaryList] = React.useState([]);
  const [display, setDisplay] = React.useState(false);

  const updateList = () => {
    setSummaryList((prevList) => [...prevList, summaryList]);
    setDisplay(true);
  };

  const value = { summaryList, display, updateList };

  return (
    <SummaryContext.Provider value={value}>
      {props.children}
    </SummaryContext.Provider>
  );
};
