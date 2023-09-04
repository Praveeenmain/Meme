// Style your components here
import styled from 'styled-components'

export const MainContainer=styled.div`
height:100vh;
display:flex;
flex-direction:row;
background-size:cover;
`
export const MemeContainer=styled.form `
height:100vh;
display:flex;
flex-direction:column;
align-items:flex-start;
padding:40px;

`
export const CustomInput = styled.input`
  font-weight: bold;
  border-radius: 4px;
  border: 2px solid grey;
  padding: 10px;
  margin-top:10px;
  
`
export const LabelElement=styled.label`
color:#7e858e;
font-family:"roboto";
margin-top:10px;
align-self:flex-start`

export const MemeHeading=styled.h1`
font-family:"Roboto";
color:#35469c;
font-size:35px;
`
export const Selectoptions=styled.select`
font-weight: bold;
  border-radius: 4px;
  border: 2px solid grey;
  padding: 10px;
  width:200px;
  margin-top:15px;
`
export const Option=styled.option`
font-size:15px;
color:black`

export const GenerateButton=styled.button`
background-color: #0b69ff;
height:35px;
width:100px;
border:0px;
border-radius:4px;
margin-top:15px;
color:white`
export const ImageContainer=styled.div`
display:flex;
flex-direction:column;


background-image:url('https://assets.ccbp.in/frontend/react-js/nature-img.png');
height:400px;
width:400px;
background-size:cover;
margin-top:65px;`
export const Text=styled.p `
color:#ffffff;
font-size:20px;
font-family:"Roboto";
padding:75px;`