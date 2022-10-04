import React from "react";

export default function FooterNavigation() {
  return (
    <Footer className="bg-white text-gray-600">
      <FooterBrand href="#">
        <img
          src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
          alt="Next.js"
          className="w-9 h-9"
        />
      </FooterBrand>
      <FooterToggler />
      <FooterCollapse>
        <FooterNav orientation="end">
          <FooterItem>
            <FooterLink href="#">Social Media</FooterLink>
          </FooterItem>
          <FooterItem>
            <FooterLink href="#">Terms & Conditions</FooterLink>
          </FooterItem>
          <FooterItem>
            <FooterLink href="#">Careers</FooterLink>
          </FooterItem>
        </FooterNav>
      </FooterCollapse>
    </Footer>
  );
}

/* Navbar logic */

const style = {
  foot: `fixed px-4 py-2 shadow top-0 w-full lg:flex lg:flex-row lg:items-center lg:justify-start lg:relative`,
  brand: `cursor-pointer font-bold inline-block mr-4 py-1.5 text-2xl whitespace-nowrap hover:text-gray-200`,
  toggler: `block float-right text-4xl lg:hidden focus:outline-none focus:shadow`,
  item: `whitespace-pre cursor-pointer px-4 py-3 hover:text-gray-200`,
  collapse: {
    default: `border-t border-gray-200 fixed left-0 mt-2 shadow py-2 text-center lg:border-none lg:flex lg:flex-grow lg:items-center lg:mt-0 lg:py-0 lg:relative lg:shadow-none`,
    open: `h-auto visible transition-all duration-500 ease-out w-full opacity-100 lg:transition-none`,
    close: `h-auto invisible w-0 transition-all duration-300 ease-in lg:opacity-100 lg:transition-none lg:visible`,
  },
  footer: {
    start: `block mb-0 mr-auto pl-0 lg:flex lg:mb-0 lg:pl-0`,
    middle: `block mb-0 ml-auto pl-0 lg:flex lg:pl-0 lg:mb-0 lg:mx-auto`,
    end: `block pl-0 mb-0 ml-auto lg:flex lg:pl-0 lg:mb-0`,
  },
};

const Context = React.createContext({});

const Footer = ({ children, className }) => {
  const [open, setOpen] = React.useState(false);
  const footerRef = React.useRef(null);

  const toggle = React.useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  // close navbar on click outside when viewport is less than 1024px
  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (window.innerWidth < 1024) {
        if (!footerRef.current?.contains(event.target)) {
          if (!open) return;
          setOpen(false);
        }
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [open, footerRef]);

  return (
    <Context.Provider value={{ open, toggle }}>
      <nav ref={footerRef} className={`${className} ${style.foot}`}>
        {children}
      </nav>
    </Context.Provider>
  );
};

const useToggle = () => React.useContext(Context);

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
const FooterBrand = ({ children, href }) => (
  <a href={href} className={style.brand}>
    <strong>{children}</strong>
  </a>
);

const FooterToggler = () => {
  const { toggle } = useToggle();
  return (
    <button
      type="button"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className={style.toggler}
      onClick={toggle}
    >
      &#8801;
    </button>
  );
};

const FooterCollapse = ({ children }) => {
  const { open } = useToggle();
  return (
    <div
      style={{ backgroundColor: "inherit" }}
      className={`${style.collapse.default}
        ${open ? style.collapse.open : style.collapse.close}`}
    >
      {children}
    </div>
  );
};

const FooterNav = ({ children, orientation }) => (
  <ul className={style.footer[orientation]}>{children}</ul>
);

const FooterItem = ({ children }) => <li className={style.item}>{children}</li>;

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
const FooterLink = ({ children, href, active, activeClass }) => (
  <a href={href} className={active ? activeClass : ""}>
    {children}
  </a>
);
