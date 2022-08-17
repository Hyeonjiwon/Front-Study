import React from 'react';

function Test(data) {
  console.log(data);

  return (
    <div> 
      {data.myParam} : {data.animal} 
    </div>
  );
}

export default Test;