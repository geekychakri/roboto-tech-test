import Image from "next/image";

import logo from "/public/logo.svg";

export default function Navigation() {
  return (
    <nav className="flex justify-between bg-background px-5 md:px-11 py-8">
      <Image aria-hidden src={logo} alt="Jamb logo" priority />
      <div className="flex gap-8">
        <button aria-label="search">
          <svg
            width="25"
            height="28"
            viewBox="0 0 25 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="10.1404"
              cy="11.0175"
              r="9.39035"
              stroke="#9C9C9D"
              strokeWidth="1.5"
            />
            <line
              x1="15.811"
              y1="18.2416"
              x2="24.1619"
              y2="26.5925"
              stroke="#9C9C9D"
              strokeWidth="1.5"
            />
          </svg>
        </button>
        <button aria-label="newsletter">
          <svg
            width="34"
            height="24"
            viewBox="0 0 34 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.66229"
              y="1.6272"
              width="30.7105"
              height="21.1667"
              stroke="#9C9C9D"
              strokeWidth="1.5"
            />
            <path
              d="M4.49124 5.64917L16.4211 14.5965L29.5439 5.64917"
              stroke="#9C9C9D"
              strokeWidth="1.5"
            />
          </svg>
        </button>
        <button aria-label="menu">
          <svg
            width="32"
            height="24"
            viewBox="0 0 32 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.982452"
              y1="1.32007"
              x2="32"
              y2="1.32007"
              stroke="#9C9C9D"
              strokeWidth="1.5"
            />
            <line
              x1="0.982483"
              y1="12.0569"
              x2="32"
              y2="12.0569"
              stroke="#9C9C9D"
              strokeWidth="1.5"
            />
            <line
              x1="0.982483"
              y1="22.7937"
              x2="32"
              y2="22.7937"
              stroke="#9C9C9D"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
