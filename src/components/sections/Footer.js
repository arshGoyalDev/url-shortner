import iconFacebook from "../../assets/images/icon-facebook.svg";
import iconTwitter from "../../assets/images/icon-twitter.svg";
import iconPinterest from "../../assets/images/icon-pinterest.svg";
import iconInstagram from "../../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between gap-10 py-16 xl:px-36 2xl:px-36 bg-neutral-darkViolet">
      <h1 className="text-3xl font-bold text-white">Shortly</h1>
      <div className="flex flex-col xl:flex-row items-center xl:items-start gap-12 xl:gap-20 2xl:gap-28">
        <div className="text-center xl:text-left">
          <h3 className="text-lg font-semibold text-white">Features</h3>
          <ul className="flex flex-col gap-2 text-neutral-grayishViolet mt-3">
            <li>
              <button className="font-medium hover:text-white transition-colors">
                Link Shortening
              </button>
            </li>
            <li>
              <button className="font-medium hover:text-white transition-colors">
                Branded Links
              </button>
            </li>
            <li>
              <button className="font-medium hover:text-white transition-colors">
                Analytics
              </button>
            </li>
          </ul>
        </div>
        <div className="text-center xl:text-left">
          <h3 className="text-lg font-semibold text-white">Resources</h3>
          <ul className="flex flex-col gap-2 text-neutral-grayishViolet mt-3">
            <li>
              <button className="font-medium hover:text-white transition-colors">
                Blog
              </button>
            </li>
            <li>
              <button className="font-medium hover:text-white transition-colors">
                Developers
              </button>
            </li>
            <li>
              <button className="font-medium hover:text-white transition-colors">
                Support
              </button>
            </li>
          </ul>
        </div>
        <div className="text-center xl:text-left">
          <h3 className="text-lg font-semibold text-white">Company</h3>
          <ul className="flex flex-col gap-2 text-neutral-grayishViolet mt-3">
            <li>
              <button className="font-medium hover:text-white transition-colors">
                About
              </button>
            </li>
            <li>
              <button className="font-medium hover:text-white transition-colors">
                Our Team
              </button>
            </li>
            <li>
              <button className="font-medium hover:text-white transition-colors">
                Careers
              </button>
            </li>
            <li>
              <button className="font-medium hover:text-white transition-colors">
                Contact
              </button>
            </li>
          </ul>
        </div>

        <div className="flex gap-3">
          <button className="p-2 border-2 border-solid border-transparent hover:border-neutral-grayishViolet rounded-md transition-all">
            <img src={iconFacebook} alt="facebook" />
          </button>
          <button className="p-2 border-2 border-solid border-transparent hover:border-neutral-grayishViolet rounded-md transition-all">
            <img src={iconTwitter} alt="twitter" />
          </button>
          <button className="p-2 border-2 border-solid border-transparent hover:border-neutral-grayishViolet rounded-md transition-all">
            <img src={iconPinterest} alt="pinterest" />
          </button>
          <button className="p-2 border-2 border-solid border-transparent hover:border-neutral-grayishViolet rounded-md transition-all">
            <img src={iconInstagram} alt="instagram" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
