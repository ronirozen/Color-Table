import React, { useEffect, useRef } from 'react';
import './ColorPicker.css';

const ColorPicker = props => {
  const itemChecked = (e) => {
    props.setColor(e.target.value);
    ;
  };

  let colorPickRef = useRef();

  useEffect(() => {
    colorPickRef.current.click();
    props.setIsOpenColorPicker(false)
  }, [props.isOpenColorPicker]);


  return (
    <>
      <div>
        <input
          type="color"
          ref={colorPickRef}
          id="color-picker"
          value="#000000"
          onChange={itemChecked}
        />
      </div>
    </>
  );
};

export default ColorPicker;
