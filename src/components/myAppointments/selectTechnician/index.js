import React from "react";
import {
  ContentContainer,
  RightContent,
} from "../../../reuseableComponents/containerStyle";
import Sidebar from "../../sidebar";
import {
  TechnicianContainer,
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
import { MdChevronLeft } from "react-icons/md";
import { Back } from "../../../reuseableComponents/goBack/goBackStyle";
import { HiOutlineSearch } from "react-icons/hi";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import technicianData from "./selectTechnicianData";

function SelectTechnician() {
  return (
    <ContentContainer>
      <Sidebar />
      <RightContent>
        <TechnicianContainer>
          <HeadingStyle>
            <h2>Select Technician</h2>
            <Back to="/location">
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
                <FaThList className="list" />
              </List>
            </Orientation>
          </Row2>
          <Row3>
            <Card>
              {technicianData.map((item) => (
                <Technician key={item.id}>
                  <img src={item.tick} alt="tick" />
                  <img src={item.avatar} alt="avatar" />
                  <h4>{item.name}</h4>
                  <p>{item.role}</p>
                  <p>{item.age}</p>
                  <p>{item.clients}</p>
                  <p>{item.rating}</p>
                  <Select>SELECT</Select>
                </Technician>
              ))}
            </Card>
          </Row3>
        </TechnicianContainer>
      </RightContent>
    </ContentContainer>
  );
}

export default SelectTechnician;
