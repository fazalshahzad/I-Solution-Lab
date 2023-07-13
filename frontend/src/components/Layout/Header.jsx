import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { categoriesData, productData } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { RxCross1 } from "react-icons/rx";

const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { isSeller } = useSelector((state) => state.seller);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { allProducts } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      allProducts &&
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          <div>
            <Link to="/">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </Link>
          </div>
          {/* search box */}
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    return (
                      <Link to={`/product/${i._id}`}>
                        <div className="w-full flex items-start-py-3">
                          <img
                            src={`${i.images[0]?.url}`}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>

          <div className={`${styles.button}`}>
            <Link to={`${isSeller ? "/dashboard" : "/shop-create"}`}>
              <h1 className="text-[#fff] flex items-center">
                {isSeller ? "Go Dashboard" : "Become Seller"}{" "}
                <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
          } transition hidden 800px:flex items-center justify-between w-full bg-[#3321c8] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          {/* categories */}
          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button
                className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
              >
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-4 cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
          {/* navitems */}
          <div className={`${styles.noramlFlex}`}>
            <Navbar active={activeHeading} />
          </div>

          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenWishlist(true)}
              >
                <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {wishlist && wishlist.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}
              >
                <AiOutlineShoppingCart
                  size={30}
                  color="rgb(255 255 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {cart && cart.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {isAuthenticated ? (
                  <Link to="/profile">
                    <img
                      src={`${user?.avatar?.url}`}
                      className="w-[35px] h-[35px] rounded-full"
                      alt=""
                    />
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                  </Link>
                )}
              </div>
            </div>

            {/* cart popup */}
            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

            {/* wishlist popup */}
            {openWishlist ? (
              <Wishlist setOpenWishlist={setOpenWishlist} />
            ) : null}
          </div>
        </div>
      </div>

      {/* mobile header */}
      <div
        className={`${active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
          }
      w-full h-[60px] bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden`}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <BiMenuAltLeft
              size={40}
              className="ml-4"
              onClick={() => setOpen(true)}
            />
          </div>
          <div>
            <Link to="/">
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt=""
                className="mt-3 cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <div
              className="relative mr-[20px]"
              onClick={() => setOpenCart(true)}
            >
              <AiOutlineShoppingCart size={30} />
              <span class="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                {cart && cart.length}
              </span>
            </div>
          </div>
          {/* cart popup */}
          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

          {/* wishlist popup */}
          {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
        </div>

        {/* header sidebar */}
        {open && (
          <div
            className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
          >
            <div className="fixed w-[70%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">
              <div className="w-full justify-between flex pr-3">
                <div>
                  <div
                    className="relative mr-[15px]"
                    onClick={() => setOpenWishlist(true) || setOpen(false)}
                  >
                    <AiOutlineHeart size={30} className="mt-5 ml-3" />
                    <span class="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                      {wishlist && wishlist.length}
                    </span>
                  </div>
                </div>
                <RxCross1
                  size={30}
                  className="ml-4 mt-5"
                  onClick={() => setOpen(false)}
                />
              </div>

              <div className="my-8 w-[92%] m-auto h-[40px relative]">
                <input
                  type="search"
                  placeholder="Search Product..."
                  className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                {searchData && (
                  <div className="absolute bg-[#fff] z-10 shadow w-full left-0 p-3">
                    {searchData.map((i) => {
                      const d = i.name;

                      const Product_name = d.replace(/\s+/g, "-");
                      return (
                        <Link to={`/product/${Product_name}`}>
                          <div className="flex items-center">
                            <img
                              src={i.image_Url[0]?.url}
                              alt=""
                              className="w-[50px] mr-2"
                            />
                            <h5>{i.name}</h5>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Navbar active={activeHeading} />
              <div className={`${styles.button} ml-4 !rounded-[4px]`}>
                <Link to="/shop-create">
                  <h1 className="text-[#fff] flex items-center">
                    Become Seller <IoIosArrowForward className="ml-1" />
                  </h1>
                </Link>
              </div>
              <br />
              <br />
              <br />

              <div className="flex w-full justify-center">
                {isAuthenticated ? (
                  <div>
                    <Link to="/profile">
                      <img
                        src={`${user.avatar?.url}`}
                        alt=""
                        className="w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]"
                      />
                    </Link>
                  </div>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-[18px] pr-[10px] text-[#000000b7]"
                    >
                      Login /
                    </Link>
                    <Link
                      to="/sign-up"
                      className="text-[18px] text-[#000000b7]"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
