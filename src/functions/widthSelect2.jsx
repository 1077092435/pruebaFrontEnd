
import React from 'react';

export const widthSelectFunct2 = (widthSelectNumber) => {
  const widthSelect2 = [];
    const widthSelect = [];
    
    widthSelectNumber?.forEach(function (width, index, array) {
      if (index === 1) {
        widthSelect.push(
          
          <div>{array[index].values.map((width, index) => {
            return (
              widthSelect2.push(
                width
              )
            )
          })}</div>

        );
      } else {
        return;
      }
    }); 

  return widthSelect2;
}



