import styled from "styled-components";

// Create.js
const StyledCreate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

// Generate.js
const StyledImage = styled.img`
  width: 700px;
  height: 300px;
  padding: 10px;
`;

const Success = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1em;
`;

// Home.js
const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
  color: #666666;
`;

// Layouts.js
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

// One
const Placeholder = styled.img`
  width: 700px;
  height: 300px;
  padding: ${props => (props.drag ? "10px" : 0)};
`;

// Options
const Show = styled.div`
  width: 700px;
  height: 650px;
  border: 1px solid #000;
  margin: 30px auto;
`;

export {
  StyledCreate,
  StyledHome,
  StyledImage,
  Success,
  Container,
  Placeholder,
  Show
};
