import React from "react";
import "./styles/SwitchButton.css";

export default class SwitchButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            button_value: false,
        };
    }

    on_click() {
        this.setState({
            button_value: !this.state.button_value
        });

        this.props.onSwitch();
    }

    switch_mode_button_label() {
        return (this.state.button_value) ? "Light" : "Dark";
    }

    get_button_classname() {
        return (this.state.button_value) ? "switch-to-light" : "switch-to-dark";
    }

    render() {
        return <div class="SwitchButton"><button className={this.get_button_classname()} onClick={() => this.on_click()}>Switch to <span>{this.switch_mode_button_label()} mode</span></button></div>;
    }
}