import React from 'react';
import styled from 'styled-components';
import '../fonts/AcuminVariableConcept-MediumItalic.ttf';

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
const Section = styled.section`
`
const Table = styled.table`
  padding: 10px 30px 10px 100px;
  background: #f6f6f6;
  width: 100%;
`
const Thead = styled.thead`
`
const Tr = styled.tr`
`
const Tbody = styled.tbody`
`
const Td = styled.td`
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
    return (
        <MainDiv>
            <Header>
                <Title>Interview Calendar</Title>
                <ButtonAdd>+</ButtonAdd>
            </Header>
            <Section>
                <Table>
                    <Thead>
                        <Tr>
                            <Td>M</Td>
                            <Td>T</Td>
                            <Td>W</Td>
                            <Td>T</Td>
                            <Td>F</Td>
                            <Td>S</Td>
                            <Td>S</Td>
                        </Tr>
                        <Tr>
                            <Td>25</Td>
                            <Td>25</Td>
                            <Td>25</Td>
                            <Td>25</Td>
                            <Td>25</Td>
                            <Td>25</Td>
                            <Td>25</Td>
                        </Tr>
                        <Tr style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '100%'}}>
                            <Td>
                                <ButtonLeft>{'<'}</ButtonLeft>
                            </Td>
                            <Td>
                                <Month>April</Month>
                            </Td>
                            <Td>
                                <ButtonRight>{'>'}</ButtonRight>
                            </Td>
                        </Tr>
                    </Thead>
                    <Tbody>
                    </Tbody>
                </Table>
            </Section>
            <Footer>
                <ButtonToday>Today</ButtonToday>
                <ButtonDelete>Delete</ButtonDelete>
            </Footer>
        </MainDiv>
    );
};

export default Calendar;