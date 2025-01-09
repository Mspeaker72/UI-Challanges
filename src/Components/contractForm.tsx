import 
  styled 
from "styled-components";

const FormFrame = styled.div`
height: 550px;
width: 450px;
display: flex;
margin-left: 20px;
gap: 5px;
background: white;
box-shadow: black 0px 0px 5px;
border-radius: 10px;
// box shadow on all sides
flex-direction: column;
`
const H1 = styled.h1`
font-family: Roboto;
margin:10px;
`
const TContainer = styled.div`
display: flex;
flex-direction: row;
margin: 0 35px;
justify-content: start;
`
const HContainer = styled.div`
display: flex;
flex-direction: row;
margin: 10px;
justify-content: center;
`
const Vcontainer = styled.div`
display: flex;
flex-direction: column;
margin: 10px;
justify-content: center;
`

interface TextProps {
  color?: string;
  size?: string;
}

const Text = styled.text<TextProps>`
color:${props => props.color || 'black'};
font-size:${props => props.size || '14px'};
font-family: Robto;
margin: 0;
`

const InputBox = styled.input`
width: 100%;
height: 25px;


&:focus {
outline-color: green;
border: none;
}
`
interface UserInputProps {
  label:string,
  required?:boolean,
}
const UserInput = ({label,required}:UserInputProps) => {
  return (
    <Vcontainer>
      <Text>{label}<Text color="red">{required? '*':''}</Text></Text>
      <InputBox/>
    </Vcontainer>

  );
}

export const ContactForm = () => {

  return(
  <FormFrame>
    
    <TContainer>
    
    <H1>
      Contact Us
    </H1>
    
    </TContainer>
    

    <HContainer>
      <UserInput
      label="Name"
      required
      />
      <UserInput
      label="Surname"
      required
      />
    </HContainer>
    

  </FormFrame>
  );
}