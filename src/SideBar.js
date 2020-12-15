import React from 'react';
import './SideBar.css'
import SideBarButton from "./SideBarButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCircle,
    faLongArrowAltRight,
    faMousePointer, faPaintBrush,
    faProjectDiagram,
    faTrash
} from "@fortawesome/free-solid-svg-icons";
import ClickAction from "./ClickAction";
import {BlockPicker} from "react-color";

function SideBar(props) {
    const {clickAction, setClickAction, color, setColor} = props

    const makeButton = ({icon, name, onClickAction}) => {
        return (
            <SideBarButton
                icon={icon}
                name={name}
                clickAction={clickAction}
                onClickAction={onClickAction}
                setClickAction={setClickAction}
                key={onClickAction}
            />
        )
    }

    const buttonData = [
        {icon: <FontAwesomeIcon icon={faMousePointer}/>, name: 'Select', onClickAction: ClickAction.SELECT},
        {icon: <FontAwesomeIcon icon={faCircle}/>, name: 'New Vertex', onClickAction: ClickAction.ADD_VERTEX},
        {icon: <FontAwesomeIcon icon={faProjectDiagram}/>, name: 'New Edge', onClickAction: ClickAction.ADD_EDGE},
        {icon: <FontAwesomeIcon icon={faTrash}/>, name: 'Delete', onClickAction: ClickAction.DELETE},
        {icon: <FontAwesomeIcon icon={faPaintBrush}/>, name: 'Color', onClickAction: ClickAction.COLOR}
    ]

    return (
        <div className="SideBar">
            {buttonData.map(element => makeButton(element))}
            <BlockPicker
                color={color}
                onChange={(color, event) => setColor(color.hex)}
                width='100%'/>
        </div>
    );
}

export default SideBar;