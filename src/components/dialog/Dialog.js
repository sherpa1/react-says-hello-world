import React from 'react';
import "./Dialog.css";
import Translator from "../../utils/Translator";

export default class Dialog extends React.Component {

    //get the salutation formula according to day's moment
    salutation_according_to_day_moment = () => {
        const day = new Date();
        const hours = day.getHours();

        let word;

        if (hours >= 22 || hours <= 4) word = Translator.translate("good_night", this.props.language);
        if (hours > 4 && hours <= 10) word = Translator.translate("good_morning", this.props.language);
        if (hours > 10 && hours < 14) word = Translator.translate("hello", this.props.language);
        if (hours >= 14) word = Translator.translate("good_afternoon", this.props.language);
        if (hours >= 18) word = Translator.translate("good_evening", this.props.language);

        return word;
    }

    say_hello = () => {

        return (this.props.who !== "") ? <p className="robot fade-in">&#x1f916; <span>{Translator.translate("nice_to_meet_you",this.props.language)} {this.props.who}. {this.salutation_according_to_day_moment()} !</span></p> : <p></p>;

    }

    say_your_name = () => {
        return (this.props.who !== "") ? <p className="you fade-in-delay">&#128512; <span>{Translator.translate("my_name_is",this.props.language)} {this.props.who}</span></p > : <p></p>;
    }

    render() {
        return <div className="Dialog">
            <p className="robot">&#x1f916; <span> {Translator.translate("what_is_your_name",this.props.language)}</span></p>
            {this.say_your_name()}
            {this.say_hello()}
        </div>;
    }
}