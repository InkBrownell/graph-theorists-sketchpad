import React, {useState} from 'react';
import './App.css';
import Field from './Field';
import SideBar from "./SideBar";
import ClickAction from "./features/clickAction/ClickAction";

function App() {
    const [clickAction, setClickAction] = useState(ClickAction.SELECT)

    return (
        <div className='App'>
            <SideBar
                clickAction={clickAction}
                setClickAction={setClickAction}
            />
            <Field
                clickAction={clickAction}
            />
        </div>
    );
}

export default App;
