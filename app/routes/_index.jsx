import { useState } from "react";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  //Declaring state variables
  let [count, setCount] = useState(0);
  let [isSoldOut, setIsSoldOut] = useState(false);

  let increment = () => {
    if (!isSoldOut) {
      setCount(count + 1);
    }
  };

  let decrement = () => {
    if (!isSoldOut && count > 0) {
      setCount(count - 1);
    }
  };

  function handleClick() {
    if (isSoldOut) {
      alert("Sorry, this product is sold out.");
    } else if (count > 0) {
      alert(`You have added ${count} item(s) to your cart!`);
    } else {
      alert("Please select at least one item to add to your cart.");
    }
  }

  return (
    <main className="bg-zinc-300">
      <nav className="flex justify-between  border border-black px-3 py-5 rounded-md font-bold">
        <h1 className="font-bold text-xl">sneakers</h1>

        <div className="flex gap-4">
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contacts</a>
        </div>
        <div className="flex gap-3">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAACUCAMAAADyHdbUAAAAclBMVEX///8CAgIBAQEAAADy8vJlZWXGxsaEhITOzs7v7++Hh4fKysqysrL5+fn19fXs7OzX19cSEhJwcHDl5eVERESlpaXf398kJCQ9PT2SkpIsLCy4uLirq6tra2tVVVW/v79dXV00NDRMTEwaGhqbm5t6enpYovUyAAAESUlEQVR4nO2cabOqMAyGxbggiiwqi4i7//8vHqB6RGlRoG1kJo9f7sxh7qS8SZuEwGBAEARBEARBEARBEARBEEJWyeKVg4NtUiMmew9euRwDbKMaEJygSohtVQMSAGP4/oMdtlnfcwWjCqyxzfqeA1eBsD9R4KSv7s8UgCu2Xd+zisPKCoYwxjarAfZy9MT2IXciiExss9riZgvIfSjGNqQ1XhHUkPbrOC4RF1EA2zm2IW0xoYhi2GAb0pbVmknQWx+yr2wfAhfbkrbMDSZBf31onO9D2VGwxLakLTGwOO6tDx1C5kMWtiFtcY73MMY2pDVTltL114cmIUsnfNfkMRcz+Q5T8RljR/ekWhn+Su0KMh9iUdAYo/wzOMWewf7jhdoFBMCrlCWi/JT0CgUE9+/x+/DnmgsADooXEKtVACLVTYOg6FWoU8BSnabYZ5USKI/hjI3SBazVH5FuvpGqciG42coXMEvVSQCejlJjlx8FahSASEeSZW6VSaCn7ef4qhTQ1Xi9qkon4KKn9W1GolSsqwKRFvsH9rjokipQQFe7I2Y5tXwFdHXMAjX7kC4PylirWYD6POjBRoULASiuJkuMVGyk4Gts+K3rN9I2CgAk+uzP8iH5Apx0NptW9RtpKwWmI40LyM4y2QJoHmLgPsbvooCOWqyM7LNMSy1WZjSVuwA9tViZRV0YN3ch9f2gd9xIpgQAR832D+ybTAV070E5O0+iBODpPAQYQU060VyBvXb7B4NUYkanNQ96sPOEUdBUAQCMJ8+zUJoCSGNge0kKZCGg+qkGn4ksBSDEmX+xZUUxTJGGL1LRRtrMhfTWYmUk+ZCenjQP5yII44YKaK3FytiWDAl0PBcTMRHUZY0UgDPe6Eggo0UHPpr9AzvuroD+WqxM8jgKOsynnDCnOFdshKvD+I0R4g6TW/cRrqPFY/oJK94gT9Em9zFAxEDshnNmM2gXbENacyt8CIz+jgEWdRn0d5R0cA+CM7YdrWH9Ib3dfam4TAHvao+a8EPz48WrNdmBmo6bkPrxr2gWt52F3f7GqyDLfTWh+yaZy5cQYtWSJWYdMuohGHi1zB371qk1AcipHOtRd6kHsM8Ph/e0si55rl6M05R7cOD0JSBYzvg4U3hXAFsC3hSs+GFLVv5w5MI80vK+SlWBm+hyN6ooMMR9rW504ymQii43OQ15AMx9aDnlKSCszswTTwHUjZT35QPxG9MBZ/Jd55gTB97jbvEtnd04u5Cn094KbvWe1r0lt6meBNilnFUxqW58uOpDyB6UmfQ2xWvAui5H3tzfv3qmEuifqTi8SADgTWov998uT2ea7BSTxfF/IGcZ/qfUZg//b4Bk/xojO1CBuf7/DJE3/nysXp9f/dlaeoecRIw2fr6Gy9nffWOQa41PWShs9zfsWuDJ0k0Wi4P77f105skimfTnMzkEQRAEQRAEQRAEQRDEr/AHu9BCRYoC0n8AAAAASUVORK5CYII="
            className="w-30 h-6"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-30  rounded h-5"
            alt=""
          />
        </div>
      </nav>

      <div className="flex mt-4 gap-8">
        <img
          src="https://boutique.co.ke/wp-content/uploads/2022/12/Airforce-Shoe-3-compress.jpeg"
          className="w-30 h-80  rounded m-4"
          alt=""
        />
        <div>
          <h2 className="font-bold text-3xl text-amber-700">SNEAKER COMPANY</h2>
          <h3 className="font-bold text-2xl text-amber-700">
            Fall Limited Edition Sneakers
          </h3>
          <p className="text-gray-700 text-xl">
            These low-profile sneakers are your perfect casual wear companion
            Featuring a durable rubber outer sole they'll withstand everything
            the weather can offer
          </p>
          <div className=" flex mt-4 gap-4">
            <p className="font-bold mt-3">$125.00</p>
            <span className="bg-amber-600 text-sm px-2 py-1 rounded">50%</span>
          </div>

          <div className="flex mt-4 gap-3 rounded-md">
            <div className="flex items-center gap-3 rounded w-30">
              <button onClick={decrement} className="p-3 focus:outline-none">
                -
              </button>
              <span className="text-lg font-medium">{count}</span>
              <button onClick={increment} className=" focus:outline-none">
                +
              </button>
            </div>

            <button
              onClick={handleClick}
              className="bg-orange-500 text-black  px-5 py-3 rounded font-bold hover:bg-orange-600"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <img
          src="https://boutique.co.ke/wp-content/uploads/2022/12/Airforce-Shoe-3-150x150.jpeg"
          className="rounded"
          alt=""
        />
        <img
          src="https://boutique.co.ke/wp-content/uploads/2022/12/Airforce-Shoe-3-150x150.jpeg"
          className="rounded"
          alt=""
        />
        <img
          src="https://boutique.co.ke/wp-content/uploads/2022/12/Airforce-Shoe-150x150.webp"
          className="rounded"
          alt=""
        />
      </div>

      <footer className="bg-zinc-500 p-8 mt-4">
        <div className="grid  md:grid-cols-4 gap-8">
          <div className="flex justify-between">
            <div className="text-white">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                euismod lectus vel libero laoreet convallis.
              </p>
            </div>
            <div className="text-white">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" class="hover:underline">
                    Collections
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Men
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Women
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-white">
            <h4 className="text-lg font-semibold mb-4">
              SUBSCRIBE TO OUR NEWSLETTER
            </h4>
            <form action="" class="space-y-4">
              <div>
                <label for="name" class="block text-sm mb-1">
                  Enter your name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g. Mike Shinoda"
                  class="w-70 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </form>
          </div>
          \
          <div className="text-white">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="mb-2 font-semibold">Phone Numbers:</p>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">Customer Support:</span>{" "}
                +254786960943
              </li>
              <li>
                <span className="font-semibold">Sales Inquiry:</span>{" "}
                +25434587612
              </li>
              <li>
                <span className="font-semibold">General Info:</span>{" "}
                +25478904231796
              </li>
            </ul>
            <p className="mt-4 font-semibold">Location:</p>
            <p>Westlands, Suite 456,</p>
            <p>123 Muthithi Road </p>
          </div>
        </div>

        <div className="mt-8  items-center border-t border-gray-400 pt-4">
          <div className="items-center space-x-4">
            <h5 className="text-white text-center">Follow Us:</h5>
            <ul className="flex gap-4 mt-4 justify-center">
              <li>
                <img
                  src="https://th.bing.com/th?id=OIP.hQ2zPS6VNQFnizu6LSU1ngHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                  alt=""
                  className="w-10 h-10 rounded"
                />
              </li>

              <li>
                <img
                  src="https://th.bing.com/th?id=OIP.5pHcxFDopHtlPjDJCBm9uAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                  alt=""
                  className="w-10 h-10 rounded"
                />
              </li>
              <li>
                <img
                  src="https://th.bing.com/th?id=OIP.1hX8tUyNC8XTZ8u6BLuGEAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                  alt=""
                  className="w-10 h-10 rounded"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center text-white text-sm">
          &copy; 2024 Sneakers Shop. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
