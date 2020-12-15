import React, {useState} from 'react';
import './App.css';
import Field from './Field';
import SideBar from "./SideBar";
import ClickAction from "./ClickAction";

function App() {
    const [clickAction, setClickAction] = useState(ClickAction.SELECT)
    const [color, setColor] = useState('#000000');

    return (
        <div className='App'>
            <SideBar
                clickAction={clickAction}
                setClickAction={setClickAction}
                color={color}
                setColor={setColor}
            />
            <Field
                clickAction={clickAction}
                color={color}
            />
        </div>
    );
}

export default App;
