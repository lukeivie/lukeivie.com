import React from "react";
import Link from "next/link";
// import classNames from "classnames";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MenuItem from "./menu-item";
import { useMenuItems } from "@/hooks";
import { cn } from "@/utils";

export default function Header() {
  const menuItems = useMenuItems();

  return (
    <header className="w-full fixed md:static bottom-0 inset-x-0 md:flex md:items-center md:justify-center z-50">
      <div
        className={cn(
          "md:hidden h-[5px] dark:h-[8px] backdrop-blur-sm ",
          "bg-gradient-to-b from-white/0 to-white",
          "dark:bg-gradient-to-b dark:from-black/0 dark:to-black"
        )}
      />
      <nav className="flex items-center justify-center p-6 bg-white dark:bg-black">
        <ul className="w-full grid grid-cols-3 rounded-full p-1.5 gap-1 bg-neutral-100 dark:bg-slate-900/50">
          {menuItems.map((item) => (
            <li key={item.name} className="w-full">
              <MenuItem to={item.pathname}>{item.name}</MenuItem>
            </li>
          ))}
        </ul>
      </nav>
      {/* <div className="flex justify-evenly py-2 px-5">
        <span className="items-center hidden lg:flex mr-10">
          <Link href="/" className="inline-flex items-center">
            <Logo width={108} height={80} />
          </Link>
        </span>
        <span className="items-center justify-center hidden lg:flex w-full">
          <nav>
            {menuItems.map((item) => (
              <MenuItem key={item.name} to={item.pathname} icon={item.icon}>
                {item.name}
              </MenuItem>
            ))}
          </nav>
        </span>
        <span className="flex items-center justify-between lg:justify-end w-full">
          <span className="flex lg:hidden">
            <Link href="/" className="inline-flex items-center">
              <Logo width={54} height={40} />
            </Link>
          </span> */}
      {/* <DarkModeButton darkMode={darkMode} className="ml-3 lg:ml-3" /> */}
      {/* </span> */}
      {/* </span>
      </div> */}
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
