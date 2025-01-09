import 
  styled 
from "styled-components";

const FormFrame = styled.div`
height: 550px;
width: 450px;
display: flex;
justify-content: center;
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
const H2 = styled.h2`
font-family: Roboto;
margin:10px;
`
const H3 = styled.h3`
font-family: Roboto;
margin:10px;
`

const TContainer = styled.div`
display: flex;
flex-direction: row;
margin: 0 10px;
justify-content: start;
`
const HContainer = styled.div`
display: flex;
flex-direction: row;
margin: 5px 10px;
justify-content: center;
`

const HFillContainer = styled.div`
display: flex;
flex-direction: row;
margin: 10px;
justify-content: start;
width:100%;

`
const Vcontainer = styled.div`
display: flex;
flex-direction: column;
margin: 10px;
justify-content: center;
width:100%;
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

margin: 2px 0;

&:focus {
outline-color: green;
border: none;
}
`
interface UserInputProps {
  label:string,
  required?:boolean,
  type?:string,
  placeholder?:string,
}

const Message = styled.textarea`
  width: 100%;
  resize: none;
  height: 15vh
`

const SumbitButton = styled.button`
width:100%;
height: 40px;
`

const UserInput = ({label,required,type,placeholder}:UserInputProps) => {
  return (
    <Vcontainer>
      <Text>{label}<Text color="red">{required? '*':''}</Text></Text>
      <InputBox
      type={type? type :'text'}
      placeholder={placeholder? placeholder : ''}
      />
    </Vcontainer>

  );
}

const SelectedInput = styled.input`
margin:'0px 5px';
`

const SelectionInput = ({...props}:UserInputProps) => {
  return (
    <HFillContainer>
      <SelectedInput
      type={props.type}
      />
      <Text>{props.label}</Text>

    </HFillContainer>
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
      placeholder={ 'John' }
      />
      <UserInput
      label="Surname"
      required
      placeholder={ 'Doe' }
      />
    </HContainer>

    <HContainer>

    <UserInput
      label="Email"
      required
      type="email"
      placeholder={ 'johndoe@example.com' }
      />
    </HContainer>

    <TContainer>
    
    <H3>
      Query Type
    </H3>
    
    </TContainer>


    <HContainer>
      <SelectionInput
      label="general"
      type="radio"
      />

      <SelectionInput
      label="Account"
      type="radio"
      />
  
    </HContainer>

    <TContainer>
    
    <H3>
      Message
    </H3>
    
    </TContainer>

    <HContainer>
      <Message/>
    </HContainer>

    <SelectionInput
    label="I consent to being contacted by team"
    type="checkbox"
    />

    <HContainer>
      <SumbitButton>
        Submit
      </SumbitButton>
    </HContainer>
  
  </FormFrame>
  );
}