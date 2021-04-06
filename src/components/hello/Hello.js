import React from "react";
import './Hello.css';

import Dialog from "../dialog/Dialog";
import SwitchButton from "../switch-button/SwitchButton";

import Translator from "../../utils/Translator";

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

    on_mode_change = () => {
        this.setState({
            dark_mode: !this.state.dark_mode//toggle Dark Mode value
        });
    }

    on_cancel = () => {

        this.setState({ my_name: "" });
        this.answer_ref.current.value = "";
    }

    submit_or_cancel_button = () => {
        return (this.state.my_name !== "") ?

            <button onClick={() => this.on_cancel()}>x</button> :
            <input type="submit" value={Translator.translate("answer",this.props.language)} />
    }

    render() {
        return <div id="hello" className={this.get_classname_according_to_state()}>
            <h1>{Translator.translate("react_says",this.props.language)}<br /><span>{Translator.translate("hello_world",this.props.language)}</span></h1>
            <img alt="World" src="./images/worldwide.png" />

            <Dialog language={this.props.language} who={this.state.my_name} />

            <form onSubmit={this.on_submit_form}>
                <input placeholder={Translator.translate("enter_your_name",this.props.language)} type="text" ref={this.answer_ref} />
                {this.submit_or_cancel_button()}
            </form>

            <SwitchButton language={this.props.language} onSwitch={this.on_mode_change} />
            <footer>
                <div>2021 - Alexandre Leroux - Université de Lorraine - Institut des Sciences du Digital - M1 Sciences Cognitives</div>
                <div>Icons made by <a href="https://www.flaticon.com/authors/turkkub" title="turkkub">turkkub</a> from <a
                    href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </footer>
        </div>
    }
}
