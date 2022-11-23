import React from 'react'


export const widthSelectFunct = (widthSelectNumber) => {
  const widthSelect4 = []
  const widthSelect3 = [];

  widthSelectNumber?.forEach(function (width, index, array) {
    if (index === 0) {
      widthSelect3.push(

        <>{array[index].values.map((width, index) => {
          return (
            widthSelect4.push(
              width
            )
          )
        })}</>

      );
    } else {
      return;
    }
  });
  return widthSelect4; 
}


export default widthSelectFunct;
