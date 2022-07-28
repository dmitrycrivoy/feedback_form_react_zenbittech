import styled from 'styled-components';

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    width: 563px;
    margin-top: 179px;
    margin-left: 147px;
    * {
        font-weight: 400;
    }
`;

export const FormTitle = styled.h1`
    font-size: 40px;
    line-height: 130%;
`;

export const FormInput = styled.input`
    display: ${(props) => props.isShown ? "block" : "none"};
    margin-top: 8px;
    padding: 31px 46px;
    font-size: 18px;
    background: #fff;
    border: ${(props) => props.changeBorder ? "1px solid red" : "1px solid #DCDCDC"};
    border-radius: 10px;
    line-height: 180%;
    &::placeholder {
        color: #2D2D2D;
    }
    `;

export const FormTextarea = styled.textarea`
    display: ${(props) => props.isShown ? "block" : "none"};
    margin-top: 8px;
    padding: 31px 46px;
    font-size: 18px;
    background: #fff;
    border: ${(props) => props.changeBorder ? "1px solid red" : "1px solid #DCDCDC"};
    border-radius: 10px;
    line-height: 180%;
    &::placeholder {
        color: #2D2D2D;
    }
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    resize: none;
    padding: 31px 0 126px 46px;
    `;

export const FormButton = styled.button`
    display: ${(props) => props.isShown ? "block" : "none"};
    margin-top: 23px;
    padding: 27px 52px;
    background-color: #FAD34F;
    border-radius: 500px;
    color: #fff;
    font-size: 18px;
    border: 0;
    width: fit-content;
`;