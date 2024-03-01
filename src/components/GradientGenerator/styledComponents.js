// Style your elements here
import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
  font-family: 'Roboto';
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 550px;

  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1110px;
  }
`

export const Heading = styled.h1`
  color: purple;
  font-weight: bold;
  text-align: center;
  font-size: 24px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

export const DirectionsDescription = styled.p`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.5;
  color: plum;
`

export const GradientDirectionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;

  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
  }
`

export const ColorsPickersDes = styled.p`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.5;
  color: brown;
`

export const ColorsPickersContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 320px;
`

export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ColorValue = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: purple;
`

export const CustomInput = styled.input`
  border: 1px solid red;
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  color: #1e293b;
  font-size: 14px;
  font-weight: 600;
  background-color: #00c9b7;
  min-width: 25px;
  border-radius: 6px;
  border: none;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-left: 15px;
  margin-bottom: 10px;
  margin-top: 25px;
  outline: none;
  cursor: pointer;
`