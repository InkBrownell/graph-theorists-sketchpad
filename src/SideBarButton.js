import React from "react";
import Button from 'react-bootstrap/Button';
import './SideBarButton.css'

function SideBarButton(props) {
    const {icon, name, clickAction, onClickAction, setClickAction} = props
    return (
        <Button
            className="SideBarButton"
            variant='primary'
            onClick={() => setClickAction(onClickAction)}
            active={clickAction === onClickAction}
        >
            {icon}
            <div className={'SideBarButton-Name'}>{name}</div>
        </Button>
    )
};

export default SideBarButton;