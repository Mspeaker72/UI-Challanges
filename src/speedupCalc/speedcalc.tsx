import { 
  useState,
} from "react";

import 
  styled 
from "styled-components";

import { 
  HContainer, 
  Vcontainer
} from "../Components/contractForm";

import { 
  H1 
} from "../Components/contractForm";

import { 
  Text 
} from "../Components/contractForm";

const SubmitButton = styled.button`
color:white;
background:#0A6A47;
width:100%;
height: 40px;
border-radius: 20px;

margin: 40px 20px;
`


const HVcontainer = styled.div`
display: flex;
flex-direction: column;;
justify-content:start;
background-color:transparent;
width:60%;
`

interface DLSpeedCalcFrameProps {

  backgroundColor?:string,
  borderRadius?:string;
  margin?:string;
}

const SpeedUpInput = styled.input`
margin: 2px 10px;
` 

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
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [speedUps, setSpeedUps] = useState({
    totalMinuteSpeedUps: 0,
    totalFiveMinuteSpeedUps: 0,
    totalFifteenMinuteSpeedUps: 0,
    totalThirtyMinuteSpeedUps: 0,
    totalSixtyMinuteSpeedUps: 0,
    totalFourHourSpeedUps: 0,
    totalEightHourSpeedUps: 0,
    totalFifteenHourSpeedUps: 0,
    totalOneDaySpeedUps: 0,
  });

  const Submit = () => {
    const total = speedUps.totalMinuteSpeedUps +
      speedUps.totalFiveMinuteSpeedUps * 5 +
      speedUps.totalFifteenMinuteSpeedUps * 15 +
      speedUps.totalThirtyMinuteSpeedUps * 30 +
      speedUps.totalSixtyMinuteSpeedUps * 60 +
      speedUps.totalFourHourSpeedUps * 240 +
      speedUps.totalEightHourSpeedUps * 480 +
      speedUps.totalFifteenHourSpeedUps * 900 +
      speedUps.totalOneDaySpeedUps * 1440;
    setTotalMinutes(total);
  }

  const updateSpeedUps = (type: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    // take note
    const amount = parseInt(e.target.value);

    if (amount > 100000) {
      e.target.value = '99999';
      setSpeedUps(prev => ({ ...prev, [type]: 99999 }));
    } else if (amount && amount >= 0) {
      setSpeedUps(prev => ({ ...prev, [type]: amount }));
    } else if (amount < 0) {
      e.target.value = '0';
      setSpeedUps(prev => ({ ...prev, [type]: 0 }));
    } else {
      setSpeedUps(prev => ({ ...prev, [type]: 0 }));
    }
  };

  return (
    <>
      <HContainer>
        
        <FormFrame 
        backgroundColor="white" 
        borderRadius="10px">
          
          <H1 color="#4a4a4a">
            Speed-up calculator
          </H1>
          
          <HContainer justifyContent="flex-start">
            
            <HVcontainer>
              <Text margin="0 10px">
                1-minute
              </Text>

              <SpeedUpInput 
              type="number" 
              onChange={updateSpeedUps('totalMinuteSpeedUps')} 
              />

              <Text 
              margin="0 10px">
                5-minutes
              </Text>
              <SpeedUpInput 
              type="number" 
              onChange={updateSpeedUps('totalFiveMinuteSpeedUps')} 
              />

              <Text 
              margin="0 10px">
                15-minutes
              </Text>
              <SpeedUpInput 
              type="number" 
              onChange={updateSpeedUps('totalFifteenMinuteSpeedUps')} 
              />

              <Text 
              margin="0 10px">
                30-minutes
              </Text>
              <SpeedUpInput 
              type="number" 
              onChange={updateSpeedUps('totalThirtyMinuteSpeedUps')} 
              />

              <Text 
              margin="0 10px"
              >60-minutes
              </Text>
              <SpeedUpInput 
              type="number" 
              onChange={updateSpeedUps('totalSixtyMinuteSpeedUps')} 
              />

              <Text 
              margin="0 10px">
                4-hours
              </Text>
              <SpeedUpInput 
              type="number" 
              onChange={updateSpeedUps('totalFourHourSpeedUps')} 
              />

              <Text 
              margin="0 10px">
                8-hours
              </Text>
              <SpeedUpInput type="number" 
              onChange={updateSpeedUps('totalEightHourSpeedUps')} 
              />

              <Text 
              margin="0 10px">
                15-hours
              </Text>
              <SpeedUpInput 
              type="number" 
              onChange={updateSpeedUps('totalFifteenHourSpeedUps')} 
              />

              <Text 
              margin="0 10px">
                1-day
              </Text>
              <SpeedUpInput 
              type="number" 
              onChange={updateSpeedUps('totalOneDaySpeedUps')} 
              />

              <SubmitButton
              onClick={Submit}
              >
                Submit
              </SubmitButton>
            </HVcontainer>
          </HContainer>
        </FormFrame>

        <FormFrame borderRadius="0 80px 20px 80px" margin="0 -100px">
          <H1 color="white">Results</H1>

          <HContainer color="#2C2C2C" height="30vh" borderRadius="10px">
            <Vcontainer>
              <Text
              color="white"
              >
                Total Minutes : {totalMinutes}
                
              </Text>

              <Text
              color="white"
              >
                Minutes in Days: {parseFloat((totalMinutes/1440)).toFixed(2)}
                
              </Text>

              <Text
              color="white"
              >
                Potential Day one top commander points: {totalMinutes*200}
                
              </Text>

            </Vcontainer>
          </HContainer>
        </FormFrame>
      </HContainer>
    </>
  );
};