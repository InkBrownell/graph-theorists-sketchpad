import React from 'react';
import './SideBar.css'
import SideBarButton from "./SideBarButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDotCircle, faLongArrowAltRight, faMousePointer, faProjectDiagram} from "@fortawesome/free-solid-svg-icons";
import ClickAction from "./features/clickAction/ClickAction";

function SideBar(props) {
    const {clickAction, setClickAction} = props

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
        {icon: <FontAwesomeIcon icon={faDotCircle}/>, name: 'New Vertex', onClickAction: ClickAction.ADD_VERTEX},
        {icon: <FontAwesomeIcon icon={faLongArrowAltRight}/>, name: 'New Directed Edge', onClickAction: ClickAction.ADD_DIRECTED_EDGE},
        {icon: <FontAwesomeIcon icon={faProjectDiagram}/>, name: 'New Undirected Edge', onClickAction: ClickAction.ADD_UNDIRECTED_EDGE}
    ]

    return (
        <div className="SideBar">
            {buttonData.map(element => makeButton(element))}
        </div>
    );
}

export default SideBar;