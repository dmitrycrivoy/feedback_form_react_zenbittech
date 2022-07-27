import styled from 'styled-components';

export const CartoonImg = styled.img`
`;

export const Cartoon = styled.div`
    position: absolute;
    top: ${(props) => props.top};
    right: ${(props) => props.right};
    left: ${(props) => props.left};
    bottom: ${(props) => props.bottom};
    z-index: ${(props) => props["z-index"]};
`;