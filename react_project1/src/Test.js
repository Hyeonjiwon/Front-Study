import React from 'react';

function Test(data) {
  console.log(JSON.stringify(data));
  const {myParam} = data
  
  return (
    <div> Test {myParam}</div>
  );
}

export default Test; // 해당 컴포넌트를 다른 파일에서 import할 수 있도록