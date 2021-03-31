import React from "react";
import "./styles/SwitchButton.css";

export default class SwitchButton extends React.Component {

    constructor(props) {
        super(props);//cannot use this keyword until "super(props);" has been placed

        //initialization of the attributes of the application state
        this.state = {
            button_value: false,
        };
    }

    on_click() {
        this.setState({
            button_value: !this.state.button_value//toggle button_value state
        });

        this.props.onSwitch();//execute the callback method transmitted via the props of the class by the parent component
    }

    switch_mode_button_label() {
        return (this.state.button_value) ? "Light" : "Dark";//get label according to state value
    }

    get_button_classname() {
        return (this.state.button_value) ? "switch-to-light" : "switch-to-dark";//get class name according to state value
    }

    render() {
        return <div class="SwitchButton"><button className={this.get_button_classname()} onClick={() => this.on_click()}>Switch to <span>{this.switch_mode_button_label()} mode</span></button></div>;
    }
}