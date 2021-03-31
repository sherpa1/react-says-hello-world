import React from 'react';
import "./styles/Dialog.css";

export default class Dialog extends React.Component {

    //get the salutation formula according to day's moment
    salutation_according_to_day_moment() {
        const day = new Date();
        const hours = day.getHours();

        let word;

        if (hours >= 22 || hours <= 4) word = "Good night";
        if (hours > 4 && hours <= 10) word = "Good morning";
        if (hours > 10 && hours < 14) word = "Hello";
        if (hours >= 14) word = "Good afternoon";
        if (hours >= 18) word = "Good evening";

        return word;
    }

    say_hello() {
        return (this.props.who !== "") ? <p class="robot">JavaScript Robot says :<span>"{this.salutation_according_to_day_moment()} {this.props.who} !"</span></p> : <p></p>;
    }

    say_your_name() {
        return (this.props.who !== "") ? <p class="you"> You say :<span>"My name is {this.props.who}"</span></p > : <p></p>;
    }

    render() {
        return <div class="Dialog">
            <p class="robot">JavaScript Robot says :<span> "What is your name ?"</span></p>
            {this.say_your_name()}
            {this.say_hello()}
        </div>;
    }
}