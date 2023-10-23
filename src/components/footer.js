import githubIcon from "../images/icons8-github.svg";
import instagramIcon from "../images/icons8-instagram.svg";
import linkedInIcon from "../images/icons8-linkedin.svg";
import gmailIcon from "../images/icons8-gmail.svg";

const Footer = () => {
  return (
    <div className="pt-10 pb-10 bg-transparent bg-gradient-to-t from-gray-800">
      <h3 className="flex justify-center text-white pt-10 pb-5">
        Let's Connect! Reach out with any of the links below
      </h3>
      <div className="flex flex-row justify-center space-x-4">
        <img src={githubIcon} alt="githubSVG" />
        <img src={instagramIcon} alt="instagramSVG" />
        <img src={linkedInIcon} alt="linkedinSVG" />
        <img src={gmailIcon} alt="linkedinSVG" />
      </div>
    </div>
  );
};

export default Footer;
