const Footer = () => {
  return (
    <div className="bg-[#000] text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#342ac8] py-4">
        <div className="flex items-center">
          <img
            src="https://i.ibb.co/HgTK048/Picsart-23-07-13-21-01-54-585.png"
            alt=""
            height={40}
            width={80}
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <p className="text-white ml-4">Connect with Us on Social Media</p>
        </div>
        <div className="flex items-center">
          <a
            href="https://www.facebook.com/isolutionlabh"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            <AiFillFacebook size={25} className="cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/isolution_lab/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            <AiFillInstagram size={25} className="cursor-pointer" />
          </a>
          <a
            href="https://www.youtube.com/@isolutiontraders/featured"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            <AiFillYoutube size={25} className="cursor-pointer" />
          </a>
          <AiOutlineTwitter size={25} className="ml-2 cursor-pointer" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-8 sm:text-center">
        {/* Rest of the content */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-4">
        <span>© 2023 I solution Traders. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="flex justify-center sm:justify-end">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
