"use client";
import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import CountUp from "react-countup";

const Home3About = () => {
 const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    const elements = document.querySelectorAll(".badge__char");
    const step = 360 / elements.length;

    elements.forEach((elem, i) => {
      elem.style.setProperty("--char-rotate", i * step + "deg");
    });
  }, []);
  return (
    <>
      <div className="home3-about-section mb-120">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title2 two mb-40">
                  <h2>Who We Are</h2>
                  <p>
                    Aenean feugiat ante ident augue bibendum, bibendum interdum
                    dunatont fermentum. Integer auctor enim eget excet eleifend
                    tristique. Suspendisse sed elit tortor. Nunc luctus, tellus
                    acces elementum accumsan, diam dolor accumsan eros, sit amet
                    porttitor diam ante ac augue.
                  </p>
                </div>
                <ul className="facilities">
                  <li>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                      >
                        <g clipPath="url(#clip0_1527_1183)">
                          <path d="M24.2273 4.13636H17.7273V0.590909C17.7273 0.43419 17.665 0.28389 17.5542 0.173073C17.4434 0.0622563 17.2931 0 17.1364 0H8.86364C8.70692 0 8.55662 0.0622563 8.4458 0.173073C8.33498 0.28389 8.27273 0.43419 8.27273 0.590909V4.13636H1.77273C1.30257 4.13636 0.851671 4.32313 0.51922 4.65558C0.186769 4.98803 0 5.43893 0 5.90909V10.0455H2.95455V8.86364C2.95455 8.70692 3.0168 8.55662 3.12762 8.4458C3.23844 8.33498 3.38874 8.27273 3.54545 8.27273H5.90909C6.06581 8.27273 6.21611 8.33498 6.32693 8.4458C6.43774 8.55662 6.5 8.70692 6.5 8.86364V10.0455H19.5V8.86364C19.5 8.70692 19.5623 8.55662 19.6731 8.4458C19.7839 8.33498 19.9342 8.27273 20.0909 8.27273H22.4545C22.6113 8.27273 22.7616 8.33498 22.8724 8.4458C22.9832 8.55662 23.0455 8.70692 23.0455 8.86364V10.0455H26V5.90909C26 5.43893 25.8132 4.98803 25.4808 4.65558C25.1483 4.32313 24.6974 4.13636 24.2273 4.13636ZM9.45455 1.18182H16.5455V4.13636H9.45455V1.18182ZM23.0455 12.4091C23.0455 12.5658 22.9832 12.7161 22.8724 12.8269C22.7616 12.9377 22.6113 13 22.4545 13H20.0909C19.9342 13 19.7839 12.9377 19.6731 12.8269C19.5623 12.7161 19.5 12.5658 19.5 12.4091V11.2273H6.5V12.4091C6.5 12.5658 6.43774 12.7161 6.32693 12.8269C6.21611 12.9377 6.06581 13 5.90909 13H3.54545C3.38874 13 3.23844 12.9377 3.12762 12.8269C3.0168 12.7161 2.95455 12.5658 2.95455 12.4091V11.2273H0V24.2273C0 24.6974 0.186769 25.1483 0.51922 25.4808C0.851671 25.8132 1.30257 26 1.77273 26H24.2273C24.6974 26 25.1483 25.8132 25.4808 25.4808C25.8132 25.1483 26 24.6974 26 24.2273V11.2273H23.0455V12.4091ZM18.3182 19.5C18.3182 19.6567 18.2559 19.807 18.1451 19.9178C18.0343 20.0287 17.884 20.0909 17.7273 20.0909H14.7727V23.0455C14.7727 23.2022 14.7105 23.3525 14.5997 23.4633C14.4888 23.5741 14.3385 23.6364 14.1818 23.6364H11.2273C11.0706 23.6364 10.9203 23.5741 10.8094 23.4633C10.6986 23.3525 10.6364 23.2022 10.6364 23.0455V20.0909H7.68182C7.5251 20.0909 7.3748 20.0287 7.26398 19.9178C7.15317 19.807 7.09091 19.6567 7.09091 19.5V16.5455C7.09091 16.3887 7.15317 16.2384 7.26398 16.1276C7.3748 16.0168 7.5251 15.9545 7.68182 15.9545H10.6364V13C10.6364 12.8433 10.6986 12.693 10.8094 12.5822C10.9203 12.4713 11.0706 12.4091 11.2273 12.4091H14.1818C14.3385 12.4091 14.4888 12.4713 14.5997 12.5822C14.7105 12.693 14.7727 12.8433 14.7727 13V15.9545H17.7273C17.884 15.9545 18.0343 16.0168 18.1451 16.1276C18.2559 16.2384 18.3182 16.3887 18.3182 16.5455V19.5Z" />
                        </g>
                      </svg>
                    </div>
                    <div className="content">
                      <h5>Safety first always</h5>
                      <p>
                        Praesent gravida nunc at tortor cursus, molestie dapibus
                        purus posuere. Vestibulum commodo, massa eget rutrum
                        feugiat
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                      >
                        <g clipPath="url(#clip0_1527_1239)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.62305 24.3704H12.7484V19.413H8.62305V24.3704ZM9.86416 20.2592H11.5143C11.6765 20.2592 11.8034 20.3932 11.8034 20.5483C11.8034 20.7105 11.6694 20.8375 11.5143 20.8375H9.86416C9.70197 20.8375 9.57504 20.7035 9.57504 20.5483C9.56799 20.3932 9.70197 20.2592 9.86416 20.2592ZM9.86416 21.5991H11.5143C11.6765 21.5991 11.8034 21.733 11.8034 21.8882C11.8034 22.0504 11.6694 22.1773 11.5143 22.1773H9.86416C9.70197 22.1773 9.57504 22.0433 9.57504 21.8882C9.56799 21.733 9.70197 21.5991 9.86416 21.5991ZM9.86416 22.9389H11.5143C11.6765 22.9389 11.8034 23.0729 11.8034 23.228C11.8034 23.3902 11.6694 23.5171 11.5143 23.5171H9.86416C9.70197 23.5171 9.57504 23.3832 9.57504 23.228C9.56799 23.0658 9.70197 22.9389 9.86416 22.9389Z"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20.0694 16.9308C19.8226 16.557 19.1033 15.6121 17.8199 14.9562C17.2558 14.6742 16.7128 14.4979 16.205 14.4062L13.3279 19.2014V24.6595C13.3279 24.8217 13.1939 24.9487 13.0388 24.9487H8.33523C8.17304 24.9487 8.04611 24.8147 8.04611 24.6595V19.2014L5.19718 14.4485C4.75291 14.5472 4.27339 14.7094 3.78682 14.9562C2.49634 15.6121 1.78411 16.557 1.53729 16.9308C1.24112 17.3821 1.02251 17.8545 0.832113 18.468C0.112829 20.7599 0.0070518 24.314 0 26.0064H3.70925V21.0772C3.70925 20.915 3.84323 20.7881 3.99837 20.7881C4.16056 20.7881 4.2875 20.9221 4.2875 21.0772V26.0064H17.6648V21.0772C17.6648 20.915 17.7988 20.7881 17.9539 20.7881C18.1161 20.7881 18.243 20.9221 18.243 21.0772V26.0064H21.5856C21.5785 24.314 21.4798 20.7599 20.7676 18.468C20.5913 17.8545 20.3727 17.3821 20.0694 16.9308Z"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.8765 18.8278L15.5843 14.3146C15.3234 14.2934 15.0837 14.2864 14.8792 14.2934L10.9019 17.8405C10.7891 17.9392 10.6199 17.9392 10.507 17.8335L6.73433 14.2934C6.46636 14.2864 6.15609 14.3005 5.81055 14.3428L8.50434 18.8348H12.8765V18.8278Z"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.3742 13.1228C12.1415 13.2286 11.8665 13.3344 11.5421 13.4119C11.3306 13.4613 10.9921 13.5177 10.569 13.5177C10.2728 13.5177 9.94137 13.4895 9.58173 13.4119C9.41248 13.3767 9.09515 13.2921 8.7073 13.1158C8.7214 13.2074 8.72846 13.3132 8.72141 13.4402C8.7073 14.096 8.47459 14.6813 8.31945 14.9916L10.6959 17.227L12.9102 15.2525C12.6563 14.8012 12.3742 14.1453 12.3601 13.4049C12.3601 13.2991 12.3672 13.2074 12.3742 13.1228ZM15.068 5.5915C14.9129 5.28827 14.6308 4.72413 14.0455 3.98369C13.7987 3.67341 13.7 3.56763 13.6295 3.49711C13.566 3.43365 13.3897 3.27146 13.1429 3.09516L13.1288 3.08811C13.1217 3.08106 13.1147 3.08106 13.1076 3.07401C12.9525 3.28556 12.7691 3.4548 12.5505 3.58879C12.0358 3.91317 11.5139 3.89907 11.0979 3.88496H11.0697C11.0556 3.88496 9.70866 3.85676 8.27009 3.95548C7.22642 4.026 6.90909 4.15998 6.67638 4.28692C6.46483 4.4068 6.06287 4.6254 5.87248 5.04851C5.78785 5.23186 5.7667 5.40815 5.74554 5.54214C5.73849 5.6056 5.73144 5.66202 5.71734 5.71138C5.68208 5.83126 5.62566 5.89473 5.5622 5.92999C4.92048 6.50823 4.94869 7.16405 5.02626 7.50254C5.16024 8.10899 5.62566 8.63083 6.1757 8.79302C6.28853 8.82828 6.3661 8.91995 6.38021 9.03278C6.41547 9.2937 6.50009 9.7168 6.61997 10.0553C6.99371 11.106 7.68479 11.7477 7.96686 11.9804C8.6932 12.5728 9.41953 12.7773 9.69455 12.8408C10.4914 13.017 11.1472 12.8972 11.394 12.8408C12.064 12.6856 12.5153 12.3753 12.7057 12.2413C12.8467 12.1426 13.2064 11.8747 13.573 11.4445C14.109 10.8098 14.4898 9.98477 14.7013 8.98342C14.7295 8.86354 14.8212 8.77891 14.9411 8.75776C15.4629 8.67314 15.9707 7.91154 16.0271 7.13584C16.0482 6.79736 15.9989 6.19795 15.3924 5.9864C15.3289 5.9723 15.2725 5.94409 15.2302 5.89473C15.1879 5.83126 15.1456 5.74664 15.068 5.5915Z"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.402 4.71715C5.68407 4.18121 6.1636 3.91325 6.40336 3.78631C6.763 3.58886 7.18611 3.45488 8.23683 3.38436C9.7036 3.28564 11.0787 3.31384 11.0928 3.31384H11.121C11.4948 3.3209 11.8826 3.335 12.2493 3.10229C12.4397 2.98241 12.6019 2.81317 12.7359 2.60161C12.7852 2.51699 12.8628 2.46058 12.9615 2.43942C12.9897 2.43237 13.0179 2.43237 13.0391 2.43237C13.1872 2.43237 13.3282 2.51699 13.4693 2.61571L13.4834 2.62277C13.7584 2.81317 13.9558 2.99651 14.0475 3.08113C14.1462 3.17986 14.2661 3.30679 14.5129 3.62412C14.9925 4.23058 15.2816 4.73126 15.4649 5.06974C15.5778 4.78062 15.6906 4.43508 15.7117 4.29404C15.7611 3.9344 15.7823 3.77221 15.7399 3.58886C15.6694 3.27858 15.5002 3.06703 15.3803 2.92599C15.2322 2.7497 15.0982 2.64392 14.8303 2.44647C14.6328 2.29838 14.52 2.22787 14.4283 2.1785C14.3155 2.11504 14.2168 2.05157 14.0828 1.91053C13.8571 1.67782 13.7372 1.45217 13.568 1.12778C13.4975 0.9938 13.4552 0.895075 13.4199 0.817505C13.3705 0.697624 13.3494 0.655314 13.2859 0.584796C13.2154 0.507226 13.1026 0.401449 12.8346 0.295672C12.348 0.0982211 11.8615 0.0770657 11.4031 0.0911693C10.7614 0.105273 10.296 0.126428 9.60488 0.267464C8.73751 0.443759 7.55985 0.690573 6.5726 1.64257C6.00141 2.19966 5.73344 2.7638 5.66292 2.92599C5.52893 3.24333 5.31738 3.89914 5.40905 4.68894C5.402 4.70305 5.402 4.7101 5.402 4.71715ZM20.0768 2.12209V0.4085C20.0768 0.246309 19.9428 0.119376 19.7877 0.119376C19.6255 0.119376 19.4986 0.253361 19.4986 0.4085V13.2357C19.4986 13.3979 19.6325 13.5249 19.7877 13.5249C19.9499 13.5249 20.0768 13.3909 20.0768 13.2357V6.68461H26.0003L20.0768 2.12209Z"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="content">
                      <h5>Trusted Travel Guide</h5>
                      <p>
                        Praesent gravida nunc at tortor cursus, molestie dapibus
                        purus posuere. Vestibulum commodo, massa eget rutrum
                        feugiat
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                      >
                        <path d="M25.2488 20.0406C25.7194 20.6328 26 21.3827 26 22.1991C26 24.1183 24.4482 25.67 22.5291 25.67C21.2263 25.67 20.0932 24.955 19.4997 23.8953C19.4876 23.8446 19.4629 23.799 19.4287 23.7617C19.1912 23.2923 19.0582 22.7616 19.0582 22.1991C19.0582 20.28 20.6227 18.7282 22.5291 18.7282C23.6071 18.7282 24.5698 19.2178 25.2064 19.988C25.2178 20.007 25.2324 20.0248 25.2488 20.0406ZM24.6256 21.1034C24.7459 20.9831 24.7459 20.7867 24.6256 20.6664C24.5052 20.546 24.3089 20.546 24.1886 20.6664L21.7944 23.0605L20.8697 22.1421C20.7493 22.0218 20.553 22.0218 20.4326 22.1421C20.3123 22.2625 20.3123 22.4588 20.4326 22.5792L21.5791 23.7192C21.6361 23.7762 21.7184 23.8079 21.7944 23.8079C21.8767 23.8079 21.9527 23.7762 22.0224 23.7192L24.6256 21.1034ZM25.1576 3.4576V6.16211H0V3.44494C0 3.15359 0.234348 2.9129 0.532034 2.9129H3.46456V3.71095C3.46456 4.34433 3.97759 4.85736 4.61096 4.85736C5.238 4.85736 5.75103 4.33799 5.75737 3.69829V2.92557H8.77223V3.71095C8.77223 4.34433 9.28526 4.85736 9.91864 4.85736C10.552 4.85736 11.065 4.33799 11.065 3.69829V2.92557H14.0862V3.71095C14.0862 4.34433 14.5993 4.85736 15.2326 4.85736C15.8597 4.85736 16.3727 4.33799 16.379 3.69829V2.92557H19.3939V3.71095C19.3939 4.34433 19.9069 4.85736 20.5403 4.85736C21.1674 4.85736 21.6804 4.33799 21.6867 3.69829V2.92557H24.6256C24.9169 2.92557 25.1576 3.15992 25.1576 3.4576ZM19.7549 14.1806H21.8514V16.2771H19.7549V14.1806ZM19.7549 9.04396H21.8514V11.1404H19.7549V9.04396Z" />
                        <path d="M21.0669 2.62144V3.69817C21.0669 3.98952 20.8326 4.23021 20.5412 4.23021C20.2499 4.23021 20.0155 3.99586 20.0155 3.70451V1.5257C20.0155 1.23435 20.2499 1 20.5412 1C20.8262 1 21.0606 1.23435 21.0669 1.53203V2.62144ZM14.2708 19.3045H16.3673V21.401H14.2708V19.3045ZM14.2708 14.1805H16.3673V16.277H14.2708V14.1805ZM14.2708 9.04385H16.3673V11.1403H14.2708V9.04385ZM15.7592 2.62144V3.69184C15.7592 3.98952 15.5249 4.23021 15.2335 4.23021C14.9422 4.23021 14.7078 3.99586 14.7078 3.70451V1.5257C14.7078 1.23435 14.9422 1 15.2335 1C15.5186 1 15.7592 1.23435 15.7592 1.53203V2.62144ZM8.77947 19.3045H10.8759V21.401H8.77947V19.3045ZM8.77947 14.1805H10.8759V16.277H8.77947V14.1805ZM8.77947 9.04385H10.8759V11.1403H8.77947V9.04385ZM10.4452 2.62144V3.69817C10.4452 3.98952 10.2109 4.23021 9.91954 4.23021C9.62819 4.23021 9.39384 3.99586 9.39384 3.70451V1.5257C9.39384 1.23435 9.62819 1 9.91954 1C10.2109 1 10.4452 1.23435 10.4452 1.53203V2.62144ZM3.30078 19.3045H5.39725V21.401H3.30078V19.3045ZM3.30078 14.1805H5.39725V16.277H3.30078V14.1805ZM3.30078 9.04385H5.39725V11.1403H3.30078V9.04385ZM5.13757 2.62144V3.69184C5.13757 3.98952 4.90322 4.23021 4.61187 4.23021C4.32051 4.23021 4.08617 3.99586 4.08617 3.70451V1.5257C4.08617 1.23435 4.32051 1 4.61187 1C4.90322 1 5.1439 1.23435 5.13757 1.5257V2.62144Z" />
                        <path d="M25.1576 6.77011V19.0664C24.447 18.4679 23.5298 18.1075 22.5291 18.1075C20.2743 18.1075 18.4438 19.938 18.4438 22.1928C18.4438 22.7109 18.5401 23.2062 18.7168 23.6622H0.532034C0.240682 23.6622 0 23.4278 0 23.1302V6.77011H25.1576ZM22.1554 11.7611C22.3328 11.7611 22.4721 11.6218 22.4594 11.4571V8.7399C22.4594 8.57523 22.3264 8.43588 22.1554 8.43588H19.4382C19.2736 8.43588 19.1342 8.56889 19.1342 8.7399V11.4571C19.1342 11.6218 19.2672 11.7611 19.4382 11.7611H22.1554ZM22.1554 16.8914C22.3328 16.8914 22.4721 16.7584 22.4594 16.5874V13.8702C22.4594 13.7056 22.3264 13.5662 22.1554 13.5662H19.4382C19.2736 13.5662 19.1342 13.6992 19.1342 13.8702V16.5874C19.1342 16.7521 19.2672 16.8914 19.4382 16.8914H22.1554ZM16.6767 22.0218C16.8477 22.0218 16.9871 21.8824 16.9808 21.7177V19.0006C16.9808 18.8359 16.8477 18.6965 16.6767 18.6965H13.9596C13.7949 18.6965 13.6555 18.8295 13.6555 19.0006V21.7177C13.6555 21.8824 13.7886 22.0218 13.9596 22.0218H16.6767ZM16.6767 16.8914C16.8477 16.8914 16.9871 16.7584 16.9808 16.5874V13.8702C16.9808 13.7056 16.8477 13.5662 16.6767 13.5662H13.9596C13.7949 13.5662 13.6555 13.6992 13.6555 13.8702V16.5874C13.6555 16.7521 13.7886 16.8914 13.9596 16.8914H16.6767ZM16.6767 11.7611C16.8477 11.7611 16.9871 11.6218 16.9808 11.4571V8.7399C16.9808 8.57523 16.8477 8.43588 16.6767 8.43588H13.9596C13.7949 8.43588 13.6555 8.56889 13.6555 8.7399V11.4571C13.6555 11.6218 13.7886 11.7611 13.9596 11.7611H16.6767ZM11.4957 21.7177V19.0006C11.4957 18.8359 11.3627 18.6965 11.1917 18.6965H8.47454C8.30987 18.6965 8.17052 18.8295 8.17052 19.0006V21.7177C8.17052 21.8824 8.30353 22.0218 8.47454 22.0218H11.1917C11.3564 22.0218 11.4957 21.8824 11.4957 21.7177ZM11.4957 16.5874V13.8702C11.4957 13.7056 11.3627 13.5662 11.1917 13.5662H8.47454C8.30987 13.5662 8.17052 13.6992 8.17052 13.8702V16.5874C8.17052 16.7521 8.30353 16.8914 8.47454 16.8914H11.1917C11.3564 16.8914 11.4957 16.7584 11.4957 16.5874ZM11.4957 11.4571V8.7399C11.4957 8.57523 11.3627 8.43588 11.1917 8.43588H8.47454C8.30987 8.43588 8.17052 8.56889 8.17052 8.7399V11.4571C8.17052 11.6218 8.30353 11.7611 8.47454 11.7611H11.1917C11.3564 11.7611 11.4957 11.6218 11.4957 11.4571ZM6.01705 21.7177V19.0006C6.01705 18.8359 5.88404 18.6965 5.71303 18.6965H2.99586C2.83118 18.6965 2.69184 18.8295 2.69184 19.0006V21.7177C2.69184 21.8824 2.82485 22.0218 2.99586 22.0218H5.7067C5.87771 22.0218 6.01705 21.8824 6.01705 21.7177ZM6.01705 16.5874V13.8702C6.01705 13.7056 5.88404 13.5662 5.71303 13.5662H2.99586C2.83118 13.5662 2.69184 13.6992 2.69184 13.8702V16.5874C2.69184 16.7521 2.82485 16.8914 2.99586 16.8914H5.7067C5.87771 16.8914 6.01705 16.7584 6.01705 16.5874ZM6.01705 11.4571V8.7399C6.01705 8.57523 5.88404 8.43588 5.71303 8.43588H2.99586C2.83118 8.43588 2.69184 8.56889 2.69184 8.7399V11.4571C2.69184 11.6218 2.82485 11.7611 2.99586 11.7611H5.7067C5.87771 11.7611 6.01705 11.6218 6.01705 11.4571Z" />
                      </svg>
                    </div>
                    <div className="content">
                      <h5>Time And Stress Savings</h5>
                      <p>
                        Praesent gravida nunc at tortor cursus, molestie dapibus
                        purus posuere. Vestibulum commodo, massa eget rutrum
                        feugiat
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-video-and-img">
                <div className="row">
                  <div className="col-xl-4">
                    <div className="badge">
                      <span className="badge__char">T</span>
                      <span className="badge__char">R</span>
                      <span className="badge__char">A</span>
                      <span className="badge__char">V</span>
                      <span className="badge__char">E</span>
                      <span className="badge__char">L</span>
                      <span className="badge__char">.</span>
                      <span className="badge__char">A</span>
                      <span className="badge__char">G</span>
                      <span className="badge__char">E</span>
                      <span className="badge__char">N</span>
                      <span className="badge__char">C</span>
                      <span className="badge__char">Y</span>
                      <span className="badge__char">.</span>
                      <span className="badge__char">E</span>
                      <span className="badge__char">S</span>
                      <span className="badge__char">T</span>
                      <span className="badge__char">-</span>
                      <span className="badge__char">2</span>
                      <span className="badge__char">0</span>
                      <span className="badge__char">1</span>
                      <span className="badge__char">2</span>
                      <span className="badge__char">.</span>
                      <div className="counter-area">
                        <div className="counter-content-wrap">
                          <div className="number">
                            <h5 className="counter">
                              <CountUp delay={2} end={60} />
                            </h5>
                            <span>K+</span>
                          </div>
                          <p>
                            Tours <br />
                            Success
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="video-wrapper">
                      <img src="/assets/img/home3/about-video-img.png" alt="" />
                      <a
                       style={{ cursor: "pointer" }}
                       onClick={() => setOpen(true)}
                        className="video-area video4"
                      >
                        <div className="icon">
                          <svg
                            className="video-circle"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            width="51px"
                            viewBox="0 0 206 206"
                            style={{ enableBackground: "new 0 0 206 206" }}
                            xmlSpace="preserve"
                          >
                            <circle
                              className="circle"
                              strokeMiterlimit={10}
                              cx={103}
                              cy={103}
                              r={100}
                            />
                            <path
                              className="circle-half top-half"
                              strokeWidth={4}
                              strokeMiterlimit={10}
                              d="M16.4,53C44,5.2,105.2-11.2,153,16.4s64.2,88.8,36.6,136.6"
                            />
                            <path
                              className="circle-half bottom-half"
                              strokeWidth={4}
                              strokeMiterlimit={10}
                              d="M189.6,153C162,200.8,100.8,217.2,53,189.6S-11.2,100.8,16.4,53"
                            />
                          </svg>
                          <i className="bi bi-play" />
                        </div>
                        <h6>Watch Tour</h6>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-8">
                    <div className="about-section-img">
                      <img src="/assets/img/home3/about-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <React.Fragment>
          <ModalVideo
            channel="youtube"
            onClick={() => setOpen(true)}
            isOpen={isOpen}
            animationSpeed="350"
            videoId="r4KpWiK08vM"
            ratio="16:9"
            onClose={() => setOpen(false)}
          />
        </React.Fragment>
      </div>

    </>
  );
};

export default Home3About;
