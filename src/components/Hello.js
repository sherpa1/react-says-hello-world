import React from "react";
import './styles/Hello.css';
import Dialog from "./Dialog";
import SwitchButton from "./SwitchButton";

export default class Hello extends React.Component {

    constructor(props) {
        super(props);//cannot use this keyword until "super(props);" has been placed

        //initialization of the attributes of the application state
        this.state = {
            dark_mode: false,
            my_name: ""
        };

        this.answer_ref = React.createRef();//allows to create a reference to a DOM element

        this.on_switch = this.on_switch.bind(this);//allows you to use a class method from a callback
    }

    get_classname_according_to_state() {
        return (this.state.dark_mode) ? "dark" : "light";
    }

    on_submit_form(e) {
        e.preventDefault();//avoid reloading the page
        this.setState({ my_name: this.answer_ref.value });//update of the state by taking the value of a referenced input
    }

    on_switch() {
        this.setState({
            dark_mode: !this.state.dark_mode//toggle Dark Mode value
        });
    }

    render() {
        return <div id="hello" className={this.get_classname_according_to_state()}>
            <h1>Hello World !</h1>
            <img alt="World" src="./images/worldwide.png" />

            <Dialog who={this.state.my_name} />

            <form onSubmit={this.on_submit_form.bind(this)}>
                <input ref={this.answer_ref} type="text" value={this.state.answer} />
                <input type="submit" value="answer" />
            </form>

            <SwitchButton onSwitch={this.on_switch} />
        </div>
    }
}
