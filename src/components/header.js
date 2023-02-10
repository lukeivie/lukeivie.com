import React from "react";
import Link from "next/link";
// import classNames from "classnames";
// import { useDispatch } from "react-redux";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "./logo";
import MenuItem from "./menu-item";
import SocialIcon from "./social-icon";

export default function Header({ menuItems }) {
  return (
    <header className="bg-black w-full">
      <div className="flex justify-between max-w-screen-2xl mx-auto py-2 px-5">
        <span className="items-center hidden lg:flex mr-10">
          <Link href="/" className="inline-flex items-center">
            <Logo width={108} height={80} />
          </Link>
        </span>
        <span className="items-center hidden lg:flex w-full">
          {menuItems?.map((item) => (
            <MenuItem key={item?.name} to={item?.pathname} icon={item?.icon}>
              {item?.name}
            </MenuItem>
          ))}
        </span>
        <span className="flex items-center justify-between lg:justify-end w-full">
          <span className="flex lg:hidden">
            <Link href="/" className="inline-flex items-center">
              <Logo width={54} height={40} />
            </Link>
          </span>
          <span className="flex items-center justify-end lg:justify-start">
            <SocialIcon
              href="https://twitter.com/IvieLuke"
              icon={["fab", "twitter"]}
            />
            <SocialIcon
              href="https://www.linkedin.com/in/luke-ivie/"
              icon={["fab", "linkedin"]}
            />
            <SocialIcon
              href="https://github.com/lukeivie"
              icon={["fab", "github"]}
            />
            {/* <DarkModeButton darkMode={darkMode} className="ml-3 lg:ml-3" /> */}
          </span>
        </span>
      </div>
    </header>
  );
}

// const DarkModeButton = ({ darkMode, className }) => {
//   const dispatch = useDispatch();

//   return (
//     <div
//       className={classNames("flex justify-center cursor-pointer", className)}
//     >
//       <div
//         className={classNames(
//           "relative w-16 h-8 transition duration-200 ease-linear rounded-full",
//           { "bg-indigo-500": !darkMode, "bg-gray-800": darkMode }
//         )}
//       >
//         <label
//           htmlFor="toggle"
//           className={classNames(
//             "cursor-pointer absolute left-0 w-8 h-8 mb-2 transition duration-100 ease-linear transform bg-white border-4 rounded-full",
//             {
//               "translate-x-full border-indigo-500": !darkMode,
//               "translate-x-0 border-gray-800": darkMode,
//             }
//           )}
//         />

//         <span
//           className={classNames("text-2xl cursor-pointer", {
//             "text-black group-hover:text-yellow-300": !darkMode,
//             "text-yellow-300": darkMode,
//           })}
//           style={{
//             position: "absolute",
//             right: darkMode && "6px",
//             left: !darkMode && "6px",
//             bottom: darkMode ? "1px" : "2px",
//           }}
//           onClick={() => dispatch(toggleDarkMode())}
//         >
//           <FontAwesomeIcon
//             icon={darkMode ? ["fas", "moon"] : ["fas", "sunglasses"]}
//             fixedWidth
//             style={{ fontSize: "18px" }}
//           />
//         </span>
//         <input
//           type="checkbox"
//           id="toggle"
//           name="toggle"
//           className="cursor-pointer w-full h-full appearance-none focus:outline-none"
//           onClick={() => dispatch(toggleDarkMode())}
//         />
//       </div>
//     </div>
//   );
// };
