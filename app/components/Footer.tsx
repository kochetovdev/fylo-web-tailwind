import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-darkBlue2 text-white">
      <div className="container mx-auto pt-12 px-5 pb-10">
        <div className="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
          <div className="mt-10 space-y-6">
            <div className="flex items-center space-x-3 md:-mt-10">
              <div className="w-6">
                <img src="images/icon-phone.svg" alt="phone-image" className="scale-10" />
              </div>
              <div>+1-543-123-4567</div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6">
                <img src="images/icon-email.svg" alt="email-image" className="scale-10" />
              </div>
              <div>example@fylo.com</div>
            </div>
          </div>

          <div className="flex flex-col space-y-10 text-xl md:text-base md:space-x-20 md:space-y-0 md:flex-row">
            <div className="flex flex-col space-y-3">
              <Link href="#">About</Link>
              <Link href="#">Jobs</Link>
              <Link href="#">Press</Link>
              <Link href="#">Blog</Link>
            </div>
            <div className="flex flex-col space-y-3">
              <Link href="#">Contact Us</Link>
              <Link href="#">Terms</Link>
              <Link href="#">Privacy</Link>
            </div>
          </div>

          <div className="flex justify-center pb-10 space-x-3">
            <div>
              <Link href="#">
                <img
                  src="images/facebook.svg"
                  alt="facebook"
                  className="p-2 bg-darkBlue rounded-full ficon"
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <img
                  src="images/twitter.svg"
                  alt="twitter"
                  className="p-2 bg-darkBlue rounded-full ficon"
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <img
                  src="images/instagram.svg"
                  alt="instagram"
                  className="p-2 bg-darkBlue rounded-full ficon"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
