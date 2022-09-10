import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import avatar from "../../assets/user.png";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import back from "../../assets/previous.png";
import { Link } from "react-router-dom";
const Admin = () => {
  const dateFilterParams = {
    comparator: function (filterLocalDateAtMidnight, cellValue) {
      var dateAsString = cellValue;
      if (dateAsString == null) return -1;
      var dateParts = dateAsString.split("-");
      var cellDate = new Date(
        Number(dateParts[2]),
        Number(dateParts[1]) - 1,
        Number(dateParts[0])
      );
      if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
        return 0;
      }
      if (cellDate < filterLocalDateAtMidnight) {
        return -1;
      }
      if (cellDate > filterLocalDateAtMidnight) {
        return 1;
      }
    },
    browserDatePicker: true,
  };
  const [gridApi, setGridApi] = useState();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const rowData = [
    { id: "1", name: "Jayesh", date: "09-02-2022" },
    { id: "2", name: "Sarthak", date: "11-02-2022" },
    { id: "3", name: "Supriya", date: "10-02-2022" },
    { id: "4", name: "Mohan", date: "12-02-2022" },
    { id: "5", name: "Parinay", date: "12-02-2022" },
  ];

  const columns = [
    { headerName: "_id", field: "id" },

    { headerName: "Name", field: "name" },
    {
      headerName: "Date",
      field: "date",
      filter: "agDateColumnFilter",
      filterParams: dateFilterParams,
    },
  ];
  const defColumnDefs = { flex: 1 };

  const onGridReady = (params) => {
    setGridApi(params);
  };
  const getFilterType = () => {
    if (startDate !== "" && endDate !== "") return "inRange";
    else if (startDate !== "") return "greaterThan";
    else if (endDate !== "") return "lessThan";
  };
  useEffect(() => {
    if (gridApi) {
      if (startDate !== "" && endDate !== "" && startDate > endDate) {
        alert("Start Date should be before End Date");
        setEndDate("");
      } else {
        var dateFilterComponent = gridApi.api.getFilterInstance("date");
        dateFilterComponent.setModel({
          type: getFilterType(),
          dateFrom: startDate ? startDate : endDate,
          dateTo: endDate,
        });
        gridApi.api.onFilterChanged();
      }
    }
  }, [startDate, endDate]);

  return (
    <div>
      <div className="admin-card">
        <div className="admin-avatar">
          <img className="admin-avatar-image" src={avatar} alt="" />
        </div>
        <Link to="/">
          <button className="admin-back">
            <img src={back} alt="" className="admin-back" />
          </button>
        </Link>
        <h2 align="center">Admin Panel</h2>
        <p align="center">User input filter </p>
        <div
          className="ag-theme-alpine"
          style={{ height: "30vh", width: "40vw" }}
        >
          From :{" "}
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          To :{" "}
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <AgGridReact
            rowData={rowData}
            columnDefs={columns}
            defaultColDef={defColumnDefs}
            onGridReady={onGridReady}
          />
        </div>
      </div>
    </div>
  );
};

export default Admin;
