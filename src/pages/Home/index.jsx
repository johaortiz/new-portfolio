import { useEffect, useRef } from "react";
import Typed from "typed.js";


function Home({ language }) {
    const el0 = useRef(null);
    const el1 = useRef(null);
    const el3 = useRef(null);

    useEffect(() => {

        let string0 = ["Hello, I'm <strong>Joaquín Ortiz</strong>",
            "I'm a <strong>Full Stack Web Developer</strong>"];
        let string1 = ["I'm a <strong>Front End Developer</strong>",
            "I'm a <strong>Back End Developer</strong>"];
        let string2 = ["Hello world!", "I'm Joha", "And ApsTris Too!"];

        if (language === "en") {
            string0 = ["Hello, I'm <strong>Joaquín Ortiz</strong>",
                "I'm a <strong>Full Stack Web Developer</strong>"];
            string1 = ["I'm a <strong>Front End Developer</strong>",
                "I'm a <strong>Back End Developer</strong>"];
            string2 = ["Hello world!", "I'm Joha", "And ApsTris Too!"];
        } else {
            string0 = ["Hola, soy <strong>Joaquín Ortiz</strong>",
                "Soy <strong>Desarrollador Web Full Stack</strong>"];
            string1 = ["Soy <strong>Desarrollador Front End</strong>",
                "Soy <strong>Desarrollador Back End</strong>"];
            string2 = ["Hola mundo!", "Soy Joha", "Y ApsTris también!"];
        };

        const options0 = {
            strings: string0,
            typeSpeed: 50,
            backSpeed: 0,
            loop: true,
            backDelay: 1800,
            loopCount: Infinity,
            showCursor: false,
        };
        const typed = new Typed(el0.current, options0);

        const options1 = {
            strings: string1,
            typeSpeed: 40,
            backSpeed: 0,
            loop: true,
            backDelay: 2200,
            loopCount: Infinity,
            showCursor: false,
        };
        const typed1 = new Typed(el1.current, options1);

        const options2 = {
            strings: string2,
            typeSpeed: 40,
            backSpeed: 0,
            loop: true,
            backDelay: 2200,
            loopCount: Infinity,
            showCursor: false,
        };
        const typed2 = new Typed(el3.current, options2);

        return () => {
            typed.destroy();
            typed1.destroy();
            typed2.destroy();
        };
    }, []);


    return (
        <div className="aa flex flex-col justify-center items-center">
            <div className="w-full mx-10">
                <p className="mx-10 my-5 text-3xl" ref={el0}></p>
                <br />
                <p className="mx-10 my-5 text-3xl" ref={el1}></p>
                <div className="mockup-code w-40 my-10 mx-2">
                    <pre data-prefix="👾"><code ref={el3}></code></pre>
                </div>
            </div >
        </div>
    );
};
export default Home;