import 
  styled 
from "styled-components";

import { 
  HContainer 
} from "../Components/contractForm";

import { 
  H1 
} from "../Components/contractForm";

import { 
  Text 
} from "../Components/contractForm";



interface DLSpeedCalcFrameProps {

  backgroundColor?:string,
  borderRadius?:string;
  margin?:string;
}

const SpeedUpInput = styled.input`
margin: 0 10px;
` 

const UserInput = () => {
  
  return (
    <HContainer
    >
    <Text>1-minute</Text>
    <SpeedUpInput
    type="number"
    />
    </HContainer>
  );
}

const FormFrame = styled.div<DLSpeedCalcFrameProps>`
height: 550px;
width: 450px;
display: flex;
margin: ${ props => props.margin || '0'};
justify-content: start;
background:${ props => props.backgroundColor || '#1B1B1B'};
box-shadow: black 0px 0px 5px;
border-radius: ${ props => props.borderRadius || '0px'};
// box shadow on all sides
flex-direction: column;
`

export const DLSpeedCalc = () => {

  return(
    <>
    <HContainer>

      <FormFrame
      backgroundColor="white"
      borderRadius="10px"
      >
        <H1
        color="#4a4a4a"
        >
          Speed-up calculator
        </H1>
        <HContainer
        justifyContent="flex-start"
        >
          <UserInput/>
        </HContainer>
        

      </FormFrame>

      <FormFrame
      borderRadius="0 80px 20px 80px"
      margin="0 -100px"
      >
        <H1
        color="white"
        >
          Results
        </H1>

        <HContainer
        color="#2C2C2C"
        height="30vh"
        borderRadius="10px"
        >

          <Text
          color="white"
          size={'16px'}
          >
            Info will be updated later
          </Text>

        </HContainer>

      </FormFrame>

    </HContainer>
    </>
  );
}