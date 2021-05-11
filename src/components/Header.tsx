import { FC } from "react";
import styled from "styled-components";

const Header: FC = () => {
  return (
    <HeaderBlock>
      <Title>위코드 책방</Title>
      <Login>로그인 / 회원가입</Login>
    </HeaderBlock>
  );
};

export default Header;

const HeaderBlock = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #d0021b;
`;

const Login = styled.button`
  font-size: 20px;
  font-weight: bold;
  color: #fe707b;
`;
