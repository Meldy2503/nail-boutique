import React, { createContext } from "react";

export const SummaryContext = createContext();

export const SummaryProvider = (props) => {
  // state to get all items in the booking summaryList
  const [summaryList, setSummaryList] = React.useState({
    location: null,
    services: [],
    technician: null,
    schedule: null,
    numberOfClients: null,
  });

  //  function to update the booking summaryList
  const updateList = (newList) => {
    setSummaryList((prevList) => ({ ...prevList, ...newList }));
  };

  // function to remove serviceItem from  booking summary page
  const removeServiceFromList = (service) => {
    const newServiceList = summaryList.services.filter(
      (item) => item.id !== service.id
    );
    updateList({ services: newServiceList });
  };

  // function to add serviceItem to booking summary page
  const addServiceToList = (service) => {
    const newServiceList = summaryList.services.concat(service);
    updateList({ services: newServiceList });
  };

  // state and function to display selected date in booking summary page
  const [date, setDate] = React.useState(new Date());
  const onDateChange = (newDate) => {
    setDate(newDate);
  };

  // function to calculate number of days to clients selected appointment day
  let DaysToAppointmentDay =
    date.toLocaleString("en-US", {
      day: "2-digit",
    }) -
    new Date().toLocaleString("en-US", {
      day: "2-digit",
    });

  // function to calculate number of expected clients for group booking
  const [NumberOfExpectedclient, setNumberOfExpectedclient] =
    React.useState("");
  const handleExpectedClient = (event) => {
    setNumberOfExpectedclient(event.target.value);
  };
  console.log(NumberOfExpectedclient);

  const value = {
    summaryList,
    setSummaryList,
    updateList,
    date,
    onDateChange,
    DaysToAppointmentDay,
    removeServiceFromList,
    addServiceToList,
    NumberOfExpectedclient,
    handleExpectedClient,
  };

  return (
    <SummaryContext.Provider value={value}>
      {props.children}
    </SummaryContext.Provider>
  );
};
