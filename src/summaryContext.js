import React, { createContext } from "react";

export const SummaryContext = createContext();

export const SummaryProvider = (props) => {
  const [summaryList, setSummaryList] = React.useState([
    {
      list: "",
    },
  ]);

  const UpdateList = () => {
    setSummaryList([...summaryList, { list: "" }]);
  };

  return (
    <SummaryContext.Provider value={[summaryList, setSummaryList]}>
      {props.children}
    </SummaryContext.Provider>
  );
};
