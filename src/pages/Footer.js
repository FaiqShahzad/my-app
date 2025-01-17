import React from "react";

const Footer = () => {
  return (
    <footer className="h-[20%] px-[12vw]">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr,1fr,1fr,1fr]">
        <div>
          <svg
            className="mb-6 mt-8 h-8 w-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="#2472eb"
          >
            <path d="M15.25 4.116c.039.899-.51.468-.79.629-.894.524-1.491 2.04-2.612 2.125-.423.87-1.121.898-1.874 1.503-.327.256-.463.839-.756 1.097l-3.694 3.27a2.395 2.395 0 0 1-.44.314c-.378.219-.656.717-1.096.81-.475.106-1.601-.775-2.633-2.012-.825-1.587-.025-1.924.518-2.525.916-1.022 2.48-2.064 3.585-2.753.843-.537 1.677-1.13 2.59-1.482.935-.357 1.779-.842 2.738-1.041.7-.141 1.522.063 2.206 0a9.596 9.596 0 0 1 2.258.065M30.676 3.646c-.06 1.046-1.038.955-1.593 1.363C27.32 6.31 25.8 8.656 23.63 9.583c-1.07 1.412-2.411 1.952-4.056 3.254-.711.56-1.21 1.417-1.877 1.965-2.887 2.381-5.668 4.524-8.64 6.823-.303.236-.646.468-1.008.697-.834.528-1.675 1.394-2.543 1.77-.95.413-2.376-.279-3.375-1.544-.43-1.849 1.112-2.657 2.38-3.737 2.13-1.82 5.33-4.012 7.558-5.536 1.707-1.17 3.395-2.426 5.138-3.43 1.789-1.03 3.439-2.179 5.224-3.063 1.303-.643 2.758-.96 4.038-1.53a40.762 40.762 0 0 1 4.207-1.606M30.386 14.346c.229.918-.566.8-.896 1.136-1.048 1.058-1.721 3.056-3.254 3.7-.563 1.17-1.522 1.532-2.603 2.507-.464.426-.731 1.128-1.177 1.542-1.94 1.77-3.91 3.263-6.082 4.772a6.36 6.36 0 0 1-.748.43c-.618.313-1.24.914-1.901 1.065-.731.161-1.856-.807-2.662-2.199-.401-1.784.715-2.129 1.6-2.818 1.49-1.15 3.693-2.49 5.192-3.486 1.154-.755 2.247-1.633 3.417-2.292 1.2-.68 2.244-1.52 3.44-2.128.868-.448 1.927-.61 2.79-1.029.92-.447 1.873-.85 2.884-1.2"></path>
          </svg>

          <h1 className="text font-bold">
            The smarter way to start your next
            <br />
            idea.
          </h1>
        </div>

        <div>
          <h1 className="mb-6 mt-8 font-bold">How it works</h1>
          <p className="mb-2 text-[#64748b] hover:cursor-pointer hover:text-[#2472eb]">
            Overview
          </p>
          <p className="mb-2 text-[#64748b] hover:cursor-pointer hover:text-[#2472eb]">
            Pricing
          </p>
          <p className="mb-2 text-[#64748b] hover:cursor-pointer hover:text-[#2472eb]">
            Service Areas
          </p>
        </div>

        <div>
          <h1 className="mb-6 mt-8 font-bold">Resources</h1>
          <p className="mb-2 text-[#64748b] hover:cursor-pointer hover:text-[#2472eb]">
            Customer Stories
          </p>
          <p className="mb-2 text-[#64748b] hover:cursor-pointer hover:text-[#2472eb]">
            Knowledge Base
          </p>
          <p className="mb-2 text-[#64748b] hover:cursor-pointer hover:text-[#2472eb]">
            Contact Us
          </p>
        </div>

        <div>
          <h1 className="mb-6 mt-8 font-bold">Products</h1>
          <p className="mb-2 text-[#64748b] hover:cursor-pointer hover:text-[#2472eb]">
            Corporate Partners
          </p>
          <p className="mb-2 text-[#64748b] hover:cursor-pointer hover:text-[#2472eb]">
            Secure Identity
          </p>
          <p className="mb-2 text-[#64748b] hover:cursor-pointer hover:text-[#2472eb]">
            Legal Help
          </p>
          <p className="mb-2 text-[#64748b] hover:cursor-pointer hover:text-[#2472eb]">
            First Capital
          </p>
        </div>

        <div>
          <h1 className="mb-6 mt-8 font-bold">Company</h1>
          <p className="mb-2 text-[#64748b] hover:cursor-pointer hover:text-[#2472eb]">
            About Us
          </p>
          <p className="mb-2 text-[#64748b] hover:cursor-pointer hover:text-[#2472eb]">
            Careers
          </p>
          <p className="mb-2 text-[#64748b] hover:cursor-pointer hover:text-[#2472eb]">
            Terms of Use
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col justify-between lg:flex-row">
        <div>
          <p className="pb-4 text-[14px] text-[#64748b]">
            © Cruip.com. All rights reserved.
          </p>
        </div>

        <div className="flex flex-row justify-start space-x-4 pb-4">
          <svg
            className="h-6 w-6 text-white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="#5696FF"
          >
            <path d="M20 3.897c-.75.33-1.5.577-2.333.66A4.4 4.4 0 0 0 19.5 2.33c-.833.495-1.667.825-2.583.99a4.053 4.053 0 0 0-3-1.32c-2.25 0-4.084 1.814-4.084 4.041 0 .33 0 .66.084.907-3.5-.164-6.5-1.814-8.5-4.288C1 3.32.833 3.98.833 4.722c0 1.402.75 2.639 1.834 3.381-.667 0-1.334-.165-1.834-.495v.083c0 1.98 1.417 3.629 3.25 3.958-.333.083-.666.165-1.083.165-.25 0-.5 0-.75-.082.5 1.65 2 2.804 3.833 2.804C4.667 15.608 2.917 16.268 1 16.268c-.333 0-.667 0-1-.082C1.833 17.34 4 18 6.25 18c7.583 0 11.667-6.186 11.667-11.546v-.495c.833-.578 1.5-1.32 2.083-2.062Z"></path>
          </svg>

          <svg
            className="h-6 w-6 text-white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="#5696FF"
          >
            <path d="M20 10.025C20 4.491 15.52 0 10 0S0 4.491 0 10.025c0 4.852 3.44 8.892 8 9.825v-6.817H6v-3.008h2V7.52a3.508 3.508 0 0 1 3.5-3.509H14v3.008h-2c-.55 0-1 .45-1 1.002v2.005h3v3.008h-3V20c5.05-.501 9-4.772 9-9.975Z"></path>
          </svg>

          <svg
            className="h-6 w-6 text-white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="#5696FF"
          >
            <path d="M19.96 2.336a.421.421 0 0 0-.291-.308 1.543 1.543 0 0 0-.788.054S1.358 8.194.358 8.87c-.215.145-.288.23-.324.33-.173.485.366.694.366.694l4.517 1.428a.506.506 0 0 0 .229-.013c1.026-.63 10.332-6.335 10.873-6.527.083-.024.148 0 .131.061-.215.732-8.257 7.664-8.301 7.706a.16.16 0 0 0-.06.143l-.422 4.28s-.176 1.331 1.196 0a38.082 38.082 0 0 1 2.374-2.11c1.553 1.041 3.224 2.192 3.945 2.794.245.23.576.354.916.342.426-.05.774-.35.876-.754 0 0 3.192-12.471 3.298-14.142.011-.162.025-.268.027-.38.005-.13-.008-.26-.04-.387Z"></path>
          </svg>

          <svg
            className="h-6 w-6 text-white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="#5696FF"
          >
            <path d="M10.041 0C4.52 0 0 4.612 0 10.25c0 4.526 2.845 8.37 6.862 9.737.502.085.669-.257.669-.513v-1.708c-2.761.598-3.347-1.367-3.347-1.367-.419-1.196-1.088-1.537-1.088-1.537-1.004-.598 0-.598 0-.598 1.004.085 1.506 1.025 1.506 1.025.92 1.537 2.343 1.11 2.929.854.084-.683.335-1.11.67-1.367-2.26-.256-4.603-1.11-4.603-5.039 0-1.11.419-2.05 1.004-2.733 0-.342-.418-1.367.168-2.733 0 0 .836-.257 2.76 1.025.838-.257 1.674-.342 2.511-.342.837 0 1.674.085 2.51.342 1.925-1.367 2.762-1.025 2.762-1.025.586 1.452.167 2.477.084 2.733.669.683 1.004 1.623 1.004 2.733 0 3.93-2.343 4.783-4.603 5.04.335.341.67.939.67 1.879v2.818c0 .256.167.598.67.513 4.016-1.367 6.86-5.21 6.86-9.737C20.084 4.612 15.565 0 10.042 0Z"></path>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
