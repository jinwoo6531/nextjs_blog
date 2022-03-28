import React, { useEffect } from 'react';

import { Input, Button } from 'antd';

const LoginForm = () => {
  // useEffect(() => {
  //   setIsOpenModal(false);
  // }, []);
  const handleEmail = (e) => {
    console.log('이메일', e.target.value);
  };

  const handlePassword = (e) => {
    console.log('비밀번호', e.target.value);
  };
  return (
    <div>
      <div>로그인</div>

      <Input placeholder="이메일을 입력해주세요." onChange={handleEmail} />
      <Input placeholder="비밀번호를 입력해주세요." onChange={handlePassword} />

      <Button>로그인</Button>
      <Button>회원가입</Button>
    </div>
  );
};

export default LoginForm;
