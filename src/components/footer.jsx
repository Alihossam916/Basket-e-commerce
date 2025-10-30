export default function Footer() {
  return (
    <footer className="w-full">
      <section className="w-full flex flex-col lg:flex-row justify-around gap-20 lg:gap-6 pt-20 px-5 md:px-20 bg-primary text-white">
        <div className="flex flex-col">
          <p>
            <span className="underline">$20 discount</span> for your first order
          </p>
          <h3 className="text-3xl font-semibold">
            Join our newsletter and get...
          </h3>
          <p className="text-gray-300">
            Join our email subscription now to get updates on
            <br className="hidden md:block" /> promotions and coupons.
          </p>
          <div className="relative mt-4 bg-white rounded p-2 w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="currentColor"
                className="text-gray-400"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
              </svg>
            </div>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full pl-12 pr-32 py-3 rounded-lg text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="absolute inset-y-3 right-2 px-4 bg-primary font-semibold rounded hover:bg-teal-600 cursor-pointer transition-colors">
              Subscribe
            </button>
          </div>
        </div>
        <img
          src="/imgs/footer_discount_image.png"
          alt="Newsletter"
          className="h-60"
        />
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center w-3/4 mx-auto py-8 gap-4">
        <p className="sm:border-r-2 border-gray-200 flex flex-row items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill=""
          >
            <path d="M640-80q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170T640-80Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm-480 0q-33 0-56.5-23.5T80-240v-304q0-8 1.5-16t4.5-16l80-184h-6q-17 0-28.5-11.5T120-800v-40q0-17 11.5-28.5T160-880h280q17 0 28.5 11.5T480-840v40q0 17-11.5 28.5T440-760h-6l66 152q-19 10-36 21t-32 25l-84-198h-96l-92 216v304h170q5 21 13.5 41.5T364-160H160Zm480-440q-42 0-71-29t-29-71q0-42 29-71t71-29v200q0-42 29-71t71-29q42 0 71 29t29 71H640Z" />
          </svg>
          Everyday fresh products
        </p>
        <p className="md:border-r-2 border-gray-200 flex flex-row items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill=""
          >
            <path d="M280-160q-50 0-85-35t-35-85H60l18-80h113q17-19 40-29.5t49-10.5q26 0 49 10.5t40 29.5h167l84-360H182l4-17q6-28 27.5-45.5T264-800h456l-37 160h117l120 160-40 200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H400q0 50-35 85t-85 35Zm357-280h193l4-21-74-99h-95l-28 120Zm-19-273 2-7-84 360 2-7 34-146 46-200ZM20-427l20-80h220l-20 80H20Zm80-146 20-80h260l-20 80H100Zm180 333q17 0 28.5-11.5T320-280q0-17-11.5-28.5T280-320q-17 0-28.5 11.5T240-280q0 17 11.5 28.5T280-240Zm400 0q17 0 28.5-11.5T720-280q0-17-11.5-28.5T680-320q-17 0-28.5 11.5T640-280q0 17 11.5 28.5T680-240Z" />
          </svg>
          Free delivery for order over $70
        </p>
        <p className="sm:border-r-2 border-gray-200 flex flex-row items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill=""
          >
            <path d="M480-80q-24 0-46-9t-39-26q-29-29-50-38t-63-9q-50 0-85-35t-35-85q0-42-9-63t-38-50q-17-17-26-39t-9-46q0-24 9-46t26-39q29-29 38-50t9-63q0-50 35-85t85-35q42 0 63-9t50-38q17-17 39-26t46-9q24 0 46 9t39 26q29 29 50 38t63 9q50 0 85 35t35 85q0 42 9 63t38 50q17 17 26 39t9 46q0 24-9 46t-26 39q-29 29-38 50t-9 63q0 50-35 85t-85 35q-42 0-63 9t-50 38q-17 17-39 26t-46 9Zm0-80q8 0 15.5-3.5T508-172q41-41 77-55.5t93-14.5q17 0 28.5-11.5T718-282q0-58 14.5-93.5T788-452q12-12 12-28t-12-28q-41-41-55.5-77T718-678q0-17-11.5-28.5T678-718q-58 0-93.5-14.5T508-788q-5-5-12.5-8.5T480-800q-8 0-15.5 3.5T452-788q-41 41-77 55.5T282-718q-17 0-28.5 11.5T242-678q0 58-14.5 93.5T172-508q-12 12-12 28t12 28q41 41 55.5 77t14.5 93q0 17 11.5 28.5T282-242q58 0 93.5 14.5T452-172q5 5 12.5 8.5T480-160Zm100-160q25 0 42.5-17.5T640-380q0-25-17.5-42.5T580-440q-25 0-42.5 17.5T520-380q0 25 17.5 42.5T580-320Zm-202-2 260-260-56-56-260 260 56 56Zm2-198q25 0 42.5-17.5T440-580q0-25-17.5-42.5T380-640q-25 0-42.5 17.5T320-580q0 25 17.5 42.5T380-520Zm100 40Z" />
          </svg>
          Daily Mega Discounts
        </p>
        <p className="flex flex-row  items-center gap-2 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill=""
          >
            <path d="M444-200h70v-50q50-9 86-39t36-89q0-42-24-77t-96-61q-60-20-83-35t-23-41q0-26 18.5-41t53.5-15q32 0 50 15.5t26 38.5l64-26q-11-35-40.5-61T516-710v-50h-70v50q-50 11-78 44t-28 74q0 47 27.5 76t86.5 50q63 23 87.5 41t24.5 47q0 33-23.5 48.5T486-314q-33 0-58.5-20.5T390-396l-66 26q14 48 43.5 77.5T444-252v52Zm36 120q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
          Best price on the market
        </p>
      </div>

      <div className="w-full bg-primary text-white text-center py-4">
        <p>&copy; 2025 Basket E-commerce. All rights reserved.</p>
      </div>
    </footer>
  );
}
