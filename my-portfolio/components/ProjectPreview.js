import Image from 'next/image'
import Link from 'next/link';
const ProjectPreview = () => {
    return (
        <div id="project-preview" className="z-0 min-w-full min-h-screen flex justify-center items-center pt-20">
            <div className="w-full">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold stroke text-transparent text-center lg:mb-14">Projects</h1>
                <div className="card relative z-0 w-full lg:w-[70%] min-h-fit my-7 sm:my-10 rounded-lg bg-back-color shadow-black shadow-md overflow-hidden">
                    <div className="m-[6%] z-10 relative">
                        <h1 className="text-primary-color text-2xl font-bold">Project Title</h1>
                        <p className="card-content lg:opacity-0 mt-2 lg:mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quibusdam ducimus dolore unde doloremque. Dolore minima vel optio impedit voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magnam facere ipsam distinctio sit et placeat qui tenetur provident eligendi fugit corporis, doloribus nemo architecto, excepturi rem tempore reprehenderit! Sit?</p>
                        <Link href=""><a className="card-content lg:opacity-0 inline-block btn mt-4 lg:mt-5 relative after:absolute after:content-['→'] after:-right-4 hover:after:-right-6 after:top-[6px] after:text-3xl after:font-light">Read More</a></Link>
                        <div className="card-content lg:opacity-0 mt-5">
                            <a className="inline-block mr-4" href="https://github.com/jishan101/" target="_blank">
                                <svg className="social-animation" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-color)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <a className="inline-block" href="/" target="_blank">
                                <svg className="social-animation" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-color)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </a>
                        </div>
                    </div>
                    <div className="card-image z-[5] w-full h-full absolute top-0 left-0 bg-cover">
                        <Image loading="lazy" src="/project.png" layout="fill" objectFit="cover" quality={100}></Image>
                        <div className="z[6] min-w-full min-h-full bg-[#0F172A] bg-opacity-80 absolute top-0 left-0"></div>
                    </div>
                </div>
                <div className="card relative z-0 w-full lg:w-[70%] min-h-fit my-7 sm:my-10 rounded-lg bg-back-color shadow-black shadow-md overflow-hidden">
                    <div className="m-[6%] z-10 relative">
                        <h1 className="text-primary-color text-2xl font-bold">Project Title</h1>
                        <p className="card-content lg:opacity-0 mt-2 lg:mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quibusdam ducimus dolore unde doloremque. Dolore minima vel optio impedit voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magnam facere ipsam distinctio sit et placeat qui tenetur provident eligendi fugit corporis, doloribus nemo architecto, excepturi rem tempore reprehenderit! Sit?</p>
                        <Link href=""><a className="card-content lg:opacity-0 inline-block btn mt-4 lg:mt-5 relative after:absolute after:content-['→'] after:-right-4 hover:after:-right-6 after:top-[6px] after:text-3xl after:font-light">Read More</a></Link>
                        <div className="card-content lg:opacity-0 mt-5">
                            <a className="inline-block mr-4" href="https://github.com/jishan101/" target="_blank">
                                <svg className="social-animation" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-color)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <a className="inline-block" href="/" target="_blank">
                                <svg className="social-animation" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-color)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </a>
                        </div>
                    </div>
                    <div className="card-image z-[5] w-full h-full absolute top-0 left-0 bg-cover">
                        <Image loading="lazy" src="/project.png" layout="fill" objectFit="cover" quality={100}></Image>
                        <div className="z[6] min-w-full min-h-full bg-[#0F172A] bg-opacity-80 absolute top-0 left-0"></div>
                    </div>
                </div>
                <div className="card relative z-0 w-full lg:w-[70%] min-h-fit my-7 sm:my-10 rounded-lg bg-back-color shadow-black shadow-md overflow-hidden">
                    <div className="m-[6%] z-10 relative">
                        <h1 className="text-primary-color text-2xl font-bold">Project Title</h1>
                        <p className="card-content lg:opacity-0 mt-2 lg:mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quibusdam ducimus dolore unde doloremque. Dolore minima vel optio impedit voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magnam facere ipsam distinctio sit et placeat qui tenetur provident eligendi fugit corporis, doloribus nemo architecto, excepturi rem tempore reprehenderit! Sit?</p>
                        <Link href=""><a className="card-content lg:opacity-0 inline-block btn mt-4 lg:mt-5 relative after:absolute after:content-['→'] after:-right-4 hover:after:-right-6 after:top-[6px] after:text-3xl after:font-light">Read More</a></Link>
                        <div className="card-content lg:opacity-0 mt-5">
                            <a className="inline-block mr-4" href="https://github.com/jishan101/" target="_blank">
                                <svg className="social-animation" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-color)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <a className="inline-block" href="/" target="_blank">
                                <svg className="social-animation" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-color)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </a>
                        </div>
                    </div>
                    <div className="card-image z-[5] w-full h-full absolute top-0 left-0 bg-cover">
                        <Image loading="lazy" src="/project.png" layout="fill" objectFit="cover" quality={100}></Image>
                        <div className="z[6] min-w-full min-h-full bg-[#0F172A] bg-opacity-80 absolute top-0 left-0"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectPreview;

