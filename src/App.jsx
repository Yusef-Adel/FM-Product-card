import productfull from "./assets/image-product-desktop.jpg";
import productmobile from "./assets/image-product-mobile.jpg";
import cart from "./assets/icon-cart.svg";
function App() {
  return (
    <div className="bg-[#f2ebe3] flex justify-center items-center shadow-md h-screen">
      <div className="grid md:grid-cols-2 bg-white rounded-xl md:rounded-2xl grid-cols-1">
        <div>
          <img
            className="w-[420px] md:w-0 md:h-0 rounded-t-xl"
            src={productmobile}
            alt=""
          />
          <img
            className=" w-0 h-0 md:w-96 rounded-l-2xl md:h-full"
            src={productfull}
            alt=""
          />
        </div>
        <div className="flex flex-col max-w-[420px] md:max-w-sm ">
          <h4 className="pl-9 pt-5 md:pt-9 font-Montserrat  tracking-[0.6em] font-medium text-gray-400">
            PERFUME
          </h4>
          <h1 className="font-Fraunces font-bold md:w-64 text-4xl pl-9 pt-4 pb-6">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className=" leading-relaxed text-lg text-gray-500 pl-9  font-medium font-Montserrat">
            A floral, solar and voluptuous interpretation composed by <br />{" "}
            Oliver Polge , Perfumer-Creator <br /> for the House of CHANEL.
          </p>
          <div className="flex py-4 md:pt-8 items-center justify-between mx-9">
            <span className=" text-[#3c8067] text-[40px] font-semibold md:text-5xl font-Fraunces">
              $149,99
            </span>
            <span className=" text-gray-500 font-medium pr-20 line-through md:pr-10 font-Montserrat">
              $169,99
            </span>
          </div>

          <button className="bg-[#3c8067] gap-2 mb-8 hover:bg-[#1a4d3a] font-Montserrat font-bold text-white flex justify-center py-4 md:py-4 md:my-auto mx-9 items-center rounded-md ">
            <img src={cart} alt="" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
