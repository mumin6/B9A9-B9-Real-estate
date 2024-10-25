import { MdRealEstateAgent } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content mt-4 p-10 rounded-lg">
      <aside>
      <MdRealEstateAgent  className="text-5xl"/>
        <p className="md:text-lg text-base font-bold">
          Luxury Estate
          <br />
          Providing reliable Services since 1992
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Houses</a>
        <a className="link link-hover">Resorts</a>
        <a className="link link-hover">Villas</a>
        <a className="link link-hover">Private Island</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
