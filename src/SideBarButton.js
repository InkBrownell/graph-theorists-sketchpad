import React from "react";
import Button from 'react-bootstrap/Button';
import './SideBarButton.css'
import {connect} from "react-redux";
import {doCustom} from "./features/clickAction/clickActionSlice";

function SideBarButton(props) {
    const {icon, name, clickAction, currentClickAction, doCustom} = props
    return (
        <Button
            className="SideBarButton"
            variant="primary"
            onClick={() => doCustom(clickAction)}
            active={clickAction === currentClickAction}
        >
            {icon}
            <div className={'SideBarButton-Name'}>{name}</div>
        </Button>
    )
};

const mapStateToProps = (state) => {
    return {currentClickAction: state.clickAction}
};

const mapDispatchToProps = {doCustom};

export default connect(mapStateToProps, mapDispatchToProps)(SideBarButton);