import React, { useContext, useState } from "react";
import { SummaryContext } from "../../../../summaryContext";
import {
  ContentContainer,
  RightContent,
  RightContentCol1,
  RightContentCol2,
} from "../../../../reuseableComponents/containerStyle";
import {
  Search,
  Row2,
  Row3,
  Orientation,
  // Grid,
  // List,
  // Card,
  // Technician,
  // Select,
  Top,
} from "./selectTechnicianStyle";
import {
  HeadingStyle,
  Back,
} from "../../../../reuseableComponents/headingStyle";
import technicianData from "./selectTechnicianData";
import { MdChevronLeft, MdStar } from "react-icons/md";
import { HiOutlineSearch, HiUserGroup, HiDotsHorizontal } from "react-icons/hi";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import {
  Button,
  ButtonContainer,
} from "../../../../reuseableComponents/buttonStyle";
import tick from "../../../../images/tick.png";
import BookingSummary from "../../myAppointmentsPersonal/bookingSummary/index";
import Sidebar from "../../../sidebar";

function SelectTechnician() {
  const { updateList } = useContext(SummaryContext);
  const handleClick = (technician) => {
    updateList({ technician });
  };
  const [searchTerm, updateSearchTerm] = useState("");

  const [gridOrientation, setGridOrientation] = useState(true);
  const toggleGridOrientation = () => {
    setGridOrientation(true);
  };
  const toggleListOrientation = () => setGridOrientation(false);

  return (
    <ContentContainer>
      <Sidebar />
      <RightContent>
        <RightContentCol1>
          <Top>
            <HeadingStyle PdBottom="0">
              <h2>Select Technician</h2>
              <Back to="/my-appointments/personal-booking/select-services">
                <MdChevronLeft />
                Go back
              </Back>
            </HeadingStyle>
            <Row2>
              <Search>
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search Stylist"
                  onChange={(e) => updateSearchTerm(e.target.value)}
                />
                <HiOutlineSearch className="search-icon" />
              </Search>
              <Orientation>
                <div
                  onClick={toggleGridOrientation}
                  className={`orientation-icon-container ${
                    gridOrientation && "toggle-selected"
                  }`}
                >
                  <IoGrid className="toggle-icon" />
                </div>
                <div
                  onClick={toggleListOrientation}
                  className={`orientation-icon-container ${
                    gridOrientation ? "" : "toggle-selected"
                  }`}
                >
                  <FaThList className="toggle-icon" />
                </div>
              </Orientation>
            </Row2>
          </Top>
          <div>
            <Row3>
              {technicianData
                .filter((val) => {
                  if (searchTerm === val) {
                    return val;
                  } else if (
                    val.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  } else if (
                    val.role.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  } else {
                    return null;
                  }
                })
                .map((item) => (
                  <div
                    key={item.id}
                    className={gridOrientation ? "grid" : "list"}
                  >
                    <div className="top">
                      <img src={tick} alt="tick" />
                      <HiDotsHorizontal className="dots" />
                    </div>
                    <div
                      className={
                        gridOrientation ? "grid-technician" : "list-technician"
                      }
                    >
                      <img src={item.avatar} alt="avatar" />
                      <div className="details">
                        <h4>{item.name}</h4>
                        <p>{`${item.role} - ${item.age}Yrs`}</p>
                      </div>
                      <div className="client-rating">
                        <span>
                          <HiUserGroup className="icon" />
                          <p>{item.clients} clients</p>
                        </span>
                        <span>
                          <MdStar className="icon star" />
                          <p>{item.rating} ratings</p>
                        </span>
                      </div>
                      <button onClick={() => handleClick(item)}>SELECT</button>
                    </div>
                  </div>
                ))}
            </Row3>
          </div>
          <ButtonContainer>
            <Button to="/my-appointments/personal-booking/schedule">
              CONTINUE
            </Button>
          </ButtonContainer>
        </RightContentCol1>
        <RightContentCol2>
          <BookingSummary />
        </RightContentCol2>
      </RightContent>
    </ContentContainer>
  );
}

export default SelectTechnician;
