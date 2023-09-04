import {Component} from 'react'
import {CustomInput,MemeContainer,LabelElement,MemeHeading,Selectoptions,Option,Text,GenerateButton,MainContainer,ImageContainer} from './styledComponents'
const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component{
  render(){
     return(
     <MainContainer>
      <MemeContainer>
            <MemeHeading> MEME GENERATOR</MemeHeading>

            <LabelElement> IMAGE URL</LabelElement>
            <CustomInput placeholder="Enter the image url"/> 
            <LabelElement> Top TEXT</LabelElement>
            <CustomInput placeholder="Enter the Top Text"/> 
            <LabelElement> BOTTOM TEXT</LabelElement>
            <CustomInput placeholder="Enter the Bottom Text"/> 
            <Selectoptions>
                {
                  fontSizesOptionsList.map(each=>(
                    <Option> {each.displayText}</Option>
                  ))
                }
            </Selectoptions>
            <GenerateButton> Generate</GenerateButton>
      </MemeContainer>
      <ImageContainer>
         <Text>top text </Text>
         <Text> bottomtext </Text>

      </ImageContainer>
      </MainContainer>
   
     )
  }
}
export default MemeGenerator