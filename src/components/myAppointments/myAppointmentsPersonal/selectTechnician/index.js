import React, { useContext } from "react";
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
  Grid,
  List,
  Card,
  Technician,
  Select,
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

  return (
    <ContentContainer>
      <Sidebar />
      <RightContent>
        <RightContentCol1>
          <Top>
            <HeadingStyle PdBottom="0">
              <h2>Select Technician</h2>
              <Back to="/my-appointments/personal-booking/select-servicestwo">
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
                />
                <HiOutlineSearch className="search-icon" />
              </Search>
              <Orientation>
                <Grid>
                  <IoGrid className="grid" />
                </Grid>
                <List>
                  <FaThList className="grid" />
                </List>
              </Orientation>
            </Row2>
          </Top>
          <div>
            <Row3>
              {technicianData.map((item) => (
                <Card key={item.id}>
                  <div className="top">
                    <img src={tick} alt="tick" />
                    <HiDotsHorizontal className="dots" />
                  </div>
                  <Technician>
                    <img src={item.avatar} alt="avatar" />
                    <h4>{item.name}</h4>
                    <p>{`${item.role} - ${item.age}Yrs`}</p>
                    <div>
                      <span>
                        <HiUserGroup className="icon" />
                        <p>{item.clients} clients</p>
                      </span>
                      <span>
                        <MdStar className="icon star" />
                        <p>{item.rating} ratings</p>
                      </span>
                    </div>
                    <Select onClick={() => handleClick(item)}>SELECT</Select>
                  </Technician>
                </Card>
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
