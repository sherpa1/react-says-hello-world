export default class Translator {

    static keys = {
        en: {
            dark: "dark",
            light: "light",
            hello_world: "Hello World !",
            answer: "Answer",
            enter_your_name: "Enter your name",
            what_is_your_name: "What is your name ?",
            switch_to: "Switch to",
            mode: "mode",
            good_night: "Good night",
            good_morning: "Good morning",
            hello: "Hello",
            good_afternoon: "Good afternoon",
            good_evening: "Good evening",
            react_says:"React says : ",
            nice_to_meet_you:"Nice to meet you",
            my_name_is:"My name is"
        },
        fr: {
            dark: "Sombre",
            light: "Classique",
            hello_world: "Bonjour tout le monde !",
            answer: "Répondre",
            enter_your_name: "Saisis ton nom",
            what_is_your_name: "Comment t'appelles-tu ?",
            switch_to: "Basculer vers le mode",
            mode: "",
            good_night: "Bonne nuit",
            good_morning: "Bonjour",
            hello: "Salut",
            good_afternoon: "Bonne journée",
            good_evening: "Bonne soirée",
            react_says:"React dit : ",
            nice_to_meet_you:"Enchanté",
            my_name_is:"Je m'appelle"
        }
    }

    static translate(key="",language="en"){
        try {
            return Translator.keys[language][key];
        } catch (e) {
            throw new Error(`Can't translate "${key}" in "${language}" language`);
        }
    }

};