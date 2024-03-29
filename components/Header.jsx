import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header = () => {
  const [lastScroll, setLastScroll] = useState(0);

  const router = useRouter();
  const pageReload = () => {
    router.reload();
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector("header");

      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        header.classList.remove("shadow-header");
        return;
      }

      if (
        currentScroll > lastScroll &&
        !header.classList.contains("-translate-y-full")
      ) {
        header.classList.add("-translate-y-full");
      } else if (
        currentScroll < lastScroll &&
        header.classList.contains("-translate-y-full")
      ) {
        header.classList.remove("-translate-y-full");
        header.classList.add("shadow-header");
      }

      setLastScroll(currentScroll);
    });
  }, [lastScroll]);

  return (
    <>
      <header className="z-10 w-[100%] sticky top-0 left-0 right-0 transition-all ease-in-out duration-300">
        <nav className="flex justify-between items-center w-[100%] px-[6%] py-4 mt-6 text-primary-color bg-[#0F172A] bg-opacity-[0.95]">
          <h1
            className="logo cursor-pointer text-action-color z-20 text-4xl text-left font-quicksand font-bold"
            onClick={pageReload}
          >
            J.
          </h1>
          <ul className="links hidden md:block overflow-hidden">
            <li className="inline-block">
              <Link href="/#">
                <a>Home</a>
              </Link>
            </li>
            <li className="inline-block ml-14">
              <Link href="/#about">
                <a>About</a>
              </Link>
            </li>
            <li className="inline-block ml-14">
              <Link href="/#skills">
                <a>Skills</a>
              </Link>
            </li>
            <li className="inline-block ml-14">
              <Link href="/#project-preview">
                <a>Projects</a>
              </Link>
            </li>
            <li className="inline-block ml-14">
              <Link href="/#contact">
                <a>Contact</a>
              </Link>
            </li>
            <Link href="/irfanul-islam.pdf">
              <a target="_blank" className="inline-block ml-14 btn">
                Resume
              </a>
            </Link>
          </ul>
          <div
            className="menu-bars z-20 relative md:hidden"
            onClick={() => {
              document.querySelector(".menu-bars").classList.toggle("is-open");
              document
                .querySelector("body")
                .classList.toggle("overflow-hidden");

              const menuMobile = document.querySelector(".menu-mobile");
              if (menuMobile.classList.contains("hidden")) {
                menuMobile.classList.remove("hidden");
                setTimeout(() => {
                  menuMobile.classList.remove("visually-hidden");
                  menuMobile.classList.add("is-open");
                }, 20);
              } else {
                menuMobile.classList.add("visually-hidden");
                menuMobile.classList.remove("is-open");
                menuMobile.addEventListener(
                  "transitionend",
                  () => {
                    menuMobile.classList.add("hidden");
                  },
                  {
                    capture: false,
                    once: true,
                    passive: false,
                  }
                );
              }
            }}
          >
            <div className="bars w-[30px] h-[19px]">
              <span className="block w-full h-[3px] mt-0 ml-auto rounded-sm bg-action-color"></span>
              <span className="block w-full h-[3px] mt-[5px] ml-auto rounded-sm bg-action-color"></span>
              <span className="block w-[17px] h-[3px] mt-[5px] ml-auto rounded-sm bg-action-color"></span>
            </div>
            <div className="other-bar h-[0px] w-[3px] rounded-sm bg-action-color absolute left-[45%] top-[-6px]"></div>
          </div>
        </nav>
        <nav
          className="menu-mobile hidden fixed top-0 bottom-0 right-0 w-full h-screen backdrop-blur-[8px]"
          onClick={() => {
            document.querySelector(".menu-bars").classList.remove("is-open");
            const menuMobile = document.querySelector(".menu-mobile");
            document.querySelector("body").classList.remove("overflow-hidden");

            menuMobile.classList.add("visually-hidden");
            menuMobile.classList.remove("is-open");
            menuMobile.addEventListener(
              "transitionend",
              () => {
                menuMobile.classList.add("hidden");
              },
              {
                capture: false,
                once: true,
                passive: false,
              }
            );
          }}
        >
          <div className="mobile-links w-[60%] h-screen bg-[#16213d] absolute top-0 bottom-0 right-0 md:hidden text-sm text-primary-color overflow-hidden">
            <ul className="links mt-[40%] sm:mt-[25%] ml-[10%] text-sm text-primary-color">
              <li>
                <Link href="/#">
                  <a>Home</a>
                </Link>
              </li>
              <li className="mt-[18px]">
                <Link href="/#about">
                  <a>About</a>
                </Link>
              </li>
              <li className="mt-[18px]">
                <Link href="/#skills">
                  <a>Skills</a>
                </Link>
              </li>
              <li className="mt-[18px]">
                <Link href="/#project-preview">
                  <a>Projects</a>
                </Link>
              </li>
              <li className="mt-[18px]">
                <Link href="/#contact">
                  <a>Contact</a>
                </Link>
              </li>
              <Link href="/irfanul-islam.pdf">
                <a target="_blank" className="inline-block mt-[25px] btn">
                  Resume
                </a>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
      <div className="z-30 hidden md:block fixed md:left-[6.5%] lg:left-[6%] bottom-0 after:block after:mx-auto after:w-[1px] after:h-[90px] after:bg-secondary-color">
        <a
          href="https://github.com/jishan101/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="mb-5 social-animation feather feather-github"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--secondary-color)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/caped_crusadeer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="mb-5 social-animation feather feather-instagram"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--secondary-color)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/irfanulislamjishan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="mb-5 social-animation feather feather-linkedin"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--secondary-color)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a
          href="https://www.facebook.com/rko.jishan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="mb-5 social-animation feather feather-facebook"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--secondary-color)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>
        <a
          href="https://codepen.io/jishan101/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="mb-8 social-animation feather feather-codepen"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--secondary-color)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
            <line x1="12" y1="22" x2="12" y2="15.5"></line>
            <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
            <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
            <line x1="12" y1="2" x2="12" y2="8.5"></line>
          </svg>
        </a>
      </div>
      <div className="z-30 hidden md:block fixed md:right-[6%] lg:right-[5.5%] bottom-0 after:block after:mx-auto after:w-[1px] after:h-[90px] after:bg-secondary-color">
        <div className="mb-8 mx-auto vertical-text tracking-widest text-secondary-color transition duration-1000 ease-in-out hover:-translate-y-2 hover:text-action-color hover:transition hover:duration-1000 hover:ease-in-out">
          <a href="mailto:rko.jishan@gmail.com">rko.jishan@gmail.com</a>
        </div>
      </div>
    </>
  );
};

export default Header;
