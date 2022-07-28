import { AppContainer } from './Components/AppContainer.style';
import { Cartoon, CartoonImg } from './Components/Cartoon.style';
import { Content } from './Components/Content.style';
import { Footer } from './Components/Footer.style';
import { Form, FormButton, FormInput, FormTextarea, FormTitle } from './Components/Form.style';
import { Main } from './Components/Main.style';
import { Map, MapImg } from './Components/Map.style';
import { Social, SocialList, SocialListItem, SocialListItemImg } from './Components/Social.style';
import Axios from "axios"
import { useState } from 'react';

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameInputBorder, setNameInputBorder] = useState(false);
  const [emailInputBorder, setEmailInputBorder] = useState(false);
  const [messageInputBorder, setMessageInputBorder] = useState(false);

  const [title, setContent] = useState("Reach out to us!");

  const [element, showElement] = useState(true);

  const submitFeedback = () => {
    Axios.post('http://qr96rq.alwaysdata.net/api/insert',
      {
        name: name, 
        email: email, 
        message: message
      }
      ).then((res) => {
        if (res.data.error) {
          let statuses = res.data.status;
          if (statuses.includes(11)) {
            setNameInputBorder(!nameInputBorder)
          }
          if (statuses.includes(12)) {
            setEmailInputBorder(!emailInputBorder)
          }
          if (statuses.includes(13)) {
            setMessageInputBorder(!messageInputBorder)
          }
        }
        else if (res.data.status === 0){
          showElement(!element);
          setContent("Thank you for the feedback!");
          // dataAdded = false;
        }
      });
  };

  return (
    <AppContainer>
      <Main>
        <Cartoon left="25px" top="25px">
          <CartoonImg src="images/yellow-cartoon.svg" alt=''></CartoonImg>
        </Cartoon>
        <Content>
          <Form className="form">
            <FormTitle>{title}</FormTitle>
            <FormInput type="text" name="name" placeholder='Your name*' 
              onChange={
                (e) => setName(e.target.value)
              }
              changeBorder={nameInputBorder}
              onFocus={() => setNameInputBorder(false)}
              isShown={element}
              >
            </FormInput>
            <FormInput type="text" name="email" placeholder='Your e-mail*'
              onChange={
                (e) => setEmail(e.target.value)
              }
              changeBorder={emailInputBorder}
              onFocus={() => setEmailInputBorder(false)}
              isShown={element}
              >
            </FormInput>
            <FormTextarea type="text" name="message" placeholder='Your message*' className="message" 
              onChange={
                (e) => setMessage(e.target.value)
              }
              changeBorder={messageInputBorder}
              onFocus={() => setMessageInputBorder(false)}
              isShown={element}
            >
            </FormTextarea>
            <FormButton onClick={submitFeedback} isShown={element}>Send message</FormButton>
          </Form>
          <Map>
            <Cartoon bottom="272px" left="-45px" z-index="2">
              <CartoonImg src="images/yellow-cartoon-2.svg" alt=''></CartoonImg>
            </Cartoon>
            <Cartoon left="-45px" bottom="65px">
              <CartoonImg src="images/pink-cartoon.svg" alt=''></CartoonImg>
            </Cartoon>
            <MapImg src="images/map.svg" alt=''></MapImg>
          </Map>
        </Content>
      </Main>
      <Footer>
        <Cartoon left="15px" top="-40px">
          <CartoonImg src="images/pink-cartoon.svg" alt=''></CartoonImg>
        </Cartoon>
        <Social>
          <SocialList>
            <SocialListItem>
              <SocialListItemImg src="images/social/ln.svg" alt=''></SocialListItemImg>
            </SocialListItem>
            <SocialListItem>
              <SocialListItemImg src="images/social/tw.svg" alt=''></SocialListItemImg>
            </SocialListItem>
            <SocialListItem>
              <SocialListItemImg src="images/social/fb.svg" alt=''></SocialListItemImg>
            </SocialListItem>
            <SocialListItem>
              <SocialListItemImg src="images/social/pn.svg" alt=''></SocialListItemImg>
            </SocialListItem>
          </SocialList>
        </Social>
        <Cartoon right="127px" top="0px">
          <CartoonImg src="images/green-cartoon.svg" alt=''></CartoonImg>
        </Cartoon>
        <Cartoon right="-40px" top="55px">
          <CartoonImg src="images/yellow-cartoon.svg" alt=''></CartoonImg>
        </Cartoon>
      </Footer>
    </AppContainer>
  );
}

export default App;
