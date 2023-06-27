import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Image from "next/image";
import { myLoader } from "@/utils/all";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-center text-sm">
        Copyright © {new Date().getFullYear()} {props?.copyright}. All
        rights reserved.
      </div>
      <div className="mt-1 flex justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-600">
        <span>
          {" "}
          Made by{" "}
          {/*  // ** 🙏  Can I ask you a favor? 🙏 **
            // Please do not remove the below link.
           // It helps us to grow & continue our work. Thank you.
          // OR Purchase PRO version for commercial license.  */}
          <a
            href="https://brstore.us"
            rel="noopener"
            target="_blank">
            Build and Run
          </a>
        </span>
        <span>&middot;</span>
        <span>
          {" "}
          <a
            href="https://viinart.com/studio"
            rel="noopener"
            target="_blank">
            Administration
          </a>
        </span>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="mt-5">
          <a
            href="https://www.instagram.com/viinart/"
            target="_blank"
            rel="noopener"
            className="relative block w-44">
            <img src="https://img.shields.io/badge/%F0%9F%93%B8-Instagram-black"
            />
          </a>
        </div>
        <ThemeSwitch />
      </div>
      <Backlink />
    </Container>
  );
}

const Backlink = () => {
  return (
    <a>
    </a>
  );
};
