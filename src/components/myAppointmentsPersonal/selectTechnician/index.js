// import React, { useState } from "react";
import {
  ContentContainer,
  RightContent,
  RightContentCol1,
  RightContentCol2,
} from "../../../reuseableComponents/containerStyle";
import Sidebar from "../../sidebar";
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
} from "./selectTechnicianStyle";
import { HeadingStyle } from "../../../reuseableComponents/headingStyle";
import { Back } from "../../../reuseableComponents/goBack/goBackStyle";
import technicianData from "./selectTechnicianData";
import { MdChevronLeft, MdStar } from "react-icons/md";
import { HiOutlineSearch, HiUserGroup, HiDotsHorizontal } from "react-icons/hi";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { Button } from "../../../reuseableComponents/buttonStyle";
import BookingSummary from "../../myAppointmentsPersonal/bookingSummary/index";
import { ScrollContainer } from "../../../reuseableComponents/scrollStyle";

function SelectTechnician() {
  return (
    <ContentContainer>
      <Sidebar />
      <RightContent>
        <RightContentCol1>
          <HeadingStyle>
            <h2>Select Technician</h2>
            <Back to="/select-servicestwo">
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
                placeholder="Search StylIst"
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
          <ScrollContainer height="55%">
            <div>
              <Row3>
                {technicianData.map((item) => (
                  <Card key={item.id}>
                    <div className="top">
                      <img src={item.tick} alt="tick" />
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
                      <Select>SELECT</Select>
                    </Technician>
                  </Card>
                ))}
              </Row3>
            </div>
          </ScrollContainer>
          <Button to="/schedule">CONTINUE</Button>
        </RightContentCol1>
        <RightContentCol2>
          <BookingSummary />
        </RightContentCol2>
      </RightContent>
    </ContentContainer>
  );
}

export default SelectTechnician;
