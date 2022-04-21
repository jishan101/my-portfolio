const Contact = () => {
    return (
        <div id="contact" className="min-h-screen min-w-full flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold stroke text-transparent text-center">Get In Touch,</h1>
                <div>
                    <p className="mt-8 sm:mx-auto sm:max-w-[70%]">If you want to ask anything or discuss about my work, please mail me. I'll get back to you as soon as possible.</p>
                    <a className="inline-block btn mt-6 lg:mt-8" href="mailto:rko.jishan@gmail.com" target="_blank">Contact Me</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;

