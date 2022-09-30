import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #011936;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileCard = styled.div`
  width: 330px;
  height: 420px;
  background-color: #f4fffd;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0px;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 10px;
  color: #011936;
`;

export const Image = styled.image`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid #011936;
`;

export const Name = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px 0px;
  gap: 5px;
  h1 {
    font-size: 30px;
  }
  p {
    font-size: 23px;
  }
`;
export const Follow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  padding: 5px 0px;

  p {
    font-size: 20px;
  }
`;
