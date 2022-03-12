// import React, { useState } from "react";
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
  Row4,
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

function SelectTechnician() {
  //   const [list, setList] = useState(false);

  //   const togglelist = () => {
  //     setState((prevState) => !prevState);
  //   };

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
            {technicianData.map((item) => (
              <Card key={item.id}>
                <div className="top">
                  <img src={item.tick} alt="tick" />
                  <HiDotsHorizontal className="dots" />
                </div>
                <Technician>
                  <img src={item.avatar} alt="avatar" />
                  <h4>{item.name}</h4>
                  <div className="row1">
                    <p>{`${item.role} - ${item.age}Yrs`}</p>
                  </div>
                  <div className="row2">
                    <span>
                      <HiUserGroup className="client-icon" />
                      <p>{item.clients} clients</p>
                    </span>
                    <span>
                      <MdStar className="rating-icon" />
                      <p>{item.rating} ratings</p>
                    </span>
                  </div>
                  <Select>SELECT</Select>
                </Technician>
              </Card>
            ))}
          </Row3>
          <Row4>
            <Button to="/schedule">CONTINUE</Button>
          </Row4>
        </TechnicianContainer>
      </RightContent>
    </ContentContainer>
  );
}

export default SelectTechnician;
