import React, { useState, useEffect, createRef } from 'react';
import {Tooltip} from '@material-ui/core';

import ColorPicker from './components/ColorPicker/ColorPicker';
import DialogRemarks from './components/DialogRemarks/DialogRemarks';
import './App.css';

function App() {
  const [color, setColor] = useState([]);
  const [remarks, setRemarks] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [thClicked, setThClicked] = useState({ i: null, j: null });
  const [isOpenColorPicker, setIsOpenColorPicker] = useState(false);
  const [characters, setCharacters] = useState([
    [{item:'א', remarks: null}, {item:'ב', remarks: null}, {item:'ג', remarks: null}],
    [{item:'ד', remarks: null}, {item:'ה', remarks: null}, {item:'ו', remarks: null}],
    [{item:'ז', remarks: null}, {item:'ח', remarks: null}, {item:'ט', remarks: null}],
  ])

  let refArr = [[], [], []];

  characters.forEach((row, i) => {
    row.forEach((element, j) => {
      refArr[i][j] = createRef();
    });
  });

  useEffect(() => {
    if(remarks !== null) {
      let temp = [...characters]
      temp[thClicked.i][thClicked.j].remarks = remarks
      setCharacters(temp)
      setRemarks(null)
    }
  }, [remarks]);

  useEffect(() => {
    if (refArr[thClicked.i || 0][thClicked.j || 0].current) {
      refArr[thClicked.i || 0][
        thClicked.j || 0
      ].current.style.color = `${color}`;
    }
  }, [color]);

  const handleClickRight = (e, i, j) => {
    setThClicked({ i: i, j: j });
    e.preventDefault()
    setOpenDialog(true);
  };

  const handleClickLeft = (i, j) => {
    setThClicked({ i: i, j: j });
    setIsOpenColorPicker(true);
  };

  return (
    <div className="App">
      <table>
        <tbody>
          {characters.map((row, i) => (
            <tr key={i}>
              {row.map((char, j) => (
                <Tooltip title={`${char.remarks}`} key={j} disableHoverListener={!char.remarks}>
                  <th
                    key={j}
                    ref={refArr[i][j]}
                    onClick={() => handleClickLeft(i, j)}
                    onContextMenu={(e) => handleClickRight(e, i, j)}
                  >
                    {char.item}
                  </th>
                </Tooltip>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <ColorPicker
        setColor={setColor}
        isOpenColorPicker={isOpenColorPicker}
        setIsOpenColorPicker={setIsOpenColorPicker}
      />
      {openDialog && (
        <DialogRemarks
          remarks={characters[thClicked.i][thClicked.j].remarks}
          setRemarks={setRemarks}
          setOpen={setOpenDialog}
          open={openDialog}
        />
      )}
    </div>
  );
}

export default App;
