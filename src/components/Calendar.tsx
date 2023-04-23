import React, {useState} from 'react';
import styled from 'styled-components';
import '../fonts/AcuminVariableConcept-MediumItalic.ttf';
import {mkdir} from "fs";

const MainDiv = styled.div`
  margin: 0 auto;
  max-width: 740px;
  border: 1px solid black;
`
const Header = styled.header`
  padding: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.h1`
  font-size: 48px;
  font-weight: 400;
`
const Month = styled.h2`
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
`
const ButtonAdd = styled.button`
  width: 50px;
  height: 50px;
  font-size: 44px;
  cursor: pointer;
  color: #ff5555;
  border: none;
  background: none;
`
const ButtonRight = styled.button`
  font-size: 36px;
  color: #ff3131;
  background: none;
  border: none;
  cursor: pointer;
`
const ButtonLeft = styled.button`
  font-size: 36px;
  color: #ff3131;
  background: none;
  border: none;
  cursor: pointer;
`
const SectionThead = styled.section`
  padding: 10px 40px 10px 100px;
  background: #f6f6f6;
`
const Weeks = styled.div`
    display: flex;
    justify-content: space-between;
`
const Week = styled.span`
`
const Dates = styled.div`
    display: flex;
    justify-content: space-between;
`
const DateNumber = styled.span`
`
const Months = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const SectionTable = styled.section`
`
const Table = styled.table`
  width: 100%;
`
const Tr = styled.tr`
`
const Tbody = styled.tbody`
`
const Td = styled.td`
  border: 1px solid black;
  width: 50px;
  height: 60px;
`
const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 30px 50px;
`
const ButtonDelete = styled.button`
  font-size: 36px;
  font-weight: 400;
  color: #ff3131;
  border: none;
  background: none;
  cursor: pointer;
`
const ButtonToday = styled.button`
  font-size: 36px;
  font-weight: 400;
  color: #ff3131;
  border: none;
  background: none;
  cursor: pointer;
`

const Calendar = () => {
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState<number>(new Date().getMonth());
    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    console.log(year);
    return (
        <MainDiv>
            <Header>
                <Title>Interview Calendar</Title>
                <ButtonAdd>+</ButtonAdd>
            </Header>
            <SectionThead>
                <Weeks>
                    <Week>M</Week>
                    <Week>T</Week>
                    <Week>W</Week>
                    <Week>T</Week>
                    <Week>F</Week>
                    <Week>S</Week>
                    <Week>S</Week>
                </Weeks>
                <Dates>
                    <DateNumber>25</DateNumber>
                    <DateNumber>25</DateNumber>
                    <DateNumber>25</DateNumber>
                    <DateNumber>25</DateNumber>
                    <DateNumber>25</DateNumber>
                    <DateNumber>25</DateNumber>
                    <DateNumber>25</DateNumber>
                </Dates>
                <Months>
                    <ButtonLeft onClick={() => {
                        if (month === 0) {
                            return;
                        }
                        setMonth(month - 1);
                    }}>{'<'}</ButtonLeft>


                    <Month>{months[month] + ' ' + year}</Month>
                    <ButtonRight onClick={() => {
                        if (month === 11) {
                            return;
                        }
                        setMonth(month + 1);
                    }}>{'>'}</ButtonRight>
                </Months>
            </SectionThead>
            <Table>
                <Tbody>
                    <Tr>
                        <Td>09:00</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                    </Tr>
                    <Tr>
                        <Td>10:00</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                    </Tr>
                    <Tr>
                        <Td>11:00</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                    </Tr>
                    <Tr>
                        <Td>12:00</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                    </Tr>
                    <Tr>
                        <Td>13:00</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                    </Tr>
                    <Tr>
                        <Td>14:00</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                    </Tr>
                    <Tr>
                        <Td>15:00</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                    </Tr>
                    <Tr>
                        <Td>16:00</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                    </Tr>
                    <Tr>
                        <Td>17:00</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                    </Tr>
                    <Tr>
                        <Td>18:00</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                    </Tr>
                    <Tr>
                        <Td>19:00</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                    </Tr>
                    <Tr>
                        <Td>20:00</Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                    </Tr>
                </Tbody>
            </Table>
            <Footer>
                <ButtonToday>Today</ButtonToday>
                <ButtonDelete>Delete</ButtonDelete>
            </Footer>
        </MainDiv>
    );
};

export default Calendar;