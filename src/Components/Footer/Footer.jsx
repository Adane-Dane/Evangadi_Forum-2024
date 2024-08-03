import React from "react";

function Footer() {
  return (
    <footer class="text-white px-8 py-6 bg-gray-800">
      <div class="container m-auto grid grid-cols-1 md:grid-cols-3 gap-9 p-8">
        <div class="mb-8 md:mb-0 ">
          <h3 class="text-lg font-bold mb-4">Example</h3>
          <ul>
            <li>
              <a href="#" class="hover:text-yellow-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-yellow-400">
                Delivery Policy
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-yellow-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div class="mb-8 md:mb-0">
          <h3 class="text-lg font-bold mb-4">Useful Link</h3>
          <ul>
            <li>
              <a href="#" class="hover:text-yellow-400">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-yellow-400">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">Contact Info</h3>
          <ul class="mb-4">
            <li>
              <a href="tel:+1-202-386-2702" class="hover:text-yellow-400 py-9">
                support@evangadi.com
              </a>
            </li>
            <li>
              <a href="" class="hover:text-yellow-400 mt-14">
                +1-202-386-2702{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
