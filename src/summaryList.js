import React from "react";

function summaryList() {
  const [summaryList, setSummaryList] = React.useState([
    {
      list: "",
    },
  ]);

  const UpdateList = () => {
    setSummaryList([...list, { list: "" }]);
  };

  return (
    <div>
      <ul>
        <li>
          {summaryList}
        </li>
      </ul>
    </div>
  )}

export default summaryList;
