import React from "react";
import './styles/Hello.css';
import Dialog from "./Dialog";
import SwitchButton from "./SwitchButton";

export default class Hello extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dark_mode: false,
            my_name: ""
        };

        this.on_switch = this.on_switch.bind(this);
    }

    get_classname_according_to_state() {
        return (this.state.dark_mode) ? "dark" : "light";
    }

    on_answer(e) {
        e.preventDefault();
    }

    on_change(e) {
        console.log(e)
        e.preventDefault();
        this.setState({ my_name: e.target.value });
    }

    on_switch() {
        this.setState({
            dark_mode: !this.state.dark_mode
        });
    }

    render() {
        return <div id="hello" className={this.get_classname_according_to_state()}>
            <h1 className={this.get_classname_according_to_state}>Hello World !</h1>
            <img alt="World" src="./images/worldwide.png"></img>

            <Dialog who={this.state.my_name} />

            <form onSubmit={this.on_answer.bind(this)}>
                <input type="text" value={this.state.answer} onChange={(e) => this.on_change(e)} />
                <input type="submit" value="answer" />
            </form>

            <SwitchButton onSwitch={this.on_switch} />
        </div>
    }
}



