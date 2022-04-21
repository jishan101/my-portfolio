const About = () => {
    return (
        <div id="about" className="min-h-screen min-w-full flex justify-center items-center">
            <div className="md:flex">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold stroke text-transparent md:mr-12 lg:mr-20">About Me</h1>
                <div>
                    <p className="mt-6 sm:mt-8 md:mt-0">Hello, my name is Irfanul Islam Jishan. I&apos;ve recently graduated as a Computer Science and Engineering student. I&apos;ve worked as a freelance graphic designer on Fiverr for almost three and a half years.</p>
                    <p className="mt-4">As a CSE student I was always good with programming and wanted to learn new programming languages. I was always intrigued by the website designs and how they interact with users. So, around the starting of 2021 I started researching about Web Development and decided to learn JavaScript.</p>
                    <p className="mt-4">I&apos;ve been learning and working with these few frameworks since then,</p>
                    <ul className="frameworks sm:flex mt-2">
                        <div className="sm:mr-20 md:mr-6 lg:mr-20">
                            <li>HTML</li>
                            <li>CSS (Tailwind CSS, Bootstrap)</li>
                            <li>JavaScript</li>
                        </div>
                        <div>
                            <li>Node.js (Express)</li>
                            <li>React</li>
                            <li>Next.js</li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;

