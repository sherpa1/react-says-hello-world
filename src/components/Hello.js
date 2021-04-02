import React from "react";
import './styles/Hello.css';
import Dialog from "./Dialog";
import SwitchButton from "./SwitchButton";

export default class Hello extends React.Component {

    constructor(props) {
        super(props);//cannot use "this" keyword until "super(props);" has been placed

        //initialization of the attributes of the application state
        this.state = {
            dark_mode: false,
            my_name: ""
        };

        this.answer_ref = React.createRef();//allows to create a reference to a DOM element

    }

    get_classname_according_to_state = () => {
        return (this.state.dark_mode) ? "dark" : "light";
    }

    on_submit_form = (e) => {
        e.preventDefault();//avoid reloading the page
        this.setState({ my_name: this.answer_ref.current.value });//update of the state by taking the value of a referenced input
    }

    on_switch = () => {
        this.setState({
            dark_mode: !this.state.dark_mode//toggle Dark Mode value
        });
    }

    on_cancel = () => {
        this.setState({
            my_name: ""
        });
    }

    on_cancel = () => {

        this.setState({ my_name: "" });
        this.answer_ref.current.value = "";
    }

    submit_or_cancel_button = () => {
        return (this.state.my_name !== "") ?

            <button onClick={() => this.on_cancel()}>x</button> :
            <input type="submit" value="answer" />
    }


    render() {
        return <div id="hello" className={this.get_classname_according_to_state()}>
            <h1>React says : <br /><span>Hello World !</span></h1>
            <img alt="World" src="./images/worldwide.png" />

            <Dialog who={this.state.my_name} />

            <form onSubmit={this.on_submit_form}>
                <input type="text" ref={this.answer_ref} />
                {this.submit_or_cancel_button()}
            </form>

            <SwitchButton onSwitch={this.on_switch} />
        </div>
    }
}
