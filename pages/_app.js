import '../styles/globals.css';
import Link from 'next/link';
import Image from "next/image";

function MyApp({Component, pageProps}) {
    return <div className="sc-xmddk5-0 iGGwpC">
        <div className="sc-xmddk5-0 iGGwpC">
            <div id="pageHead" className="sc-u7tzga-0 dXqmMu">
                <header className="sc-u7tzga-1 hPYOlB">
                    {/*<div className="sc-1o0de0t-0 sc-u7tzga-5 eNmyuB dOdoJr"></div>*/}
                    <div id="logo" className="sc-u7tzga-2 WcvBn">
                        <Link aria-label="Go to homepage" href="/product" className="sc-1m0vvus-0 kzrwnV">nuti mall</Link>
                    </div>
                    <div className="sc-1bg9vab-0 ejaLtM">
                        <div className="sc-1e0d7x8-0 AqSpN">
                            <button type="button" aria-label="Menu"
                                    className="sc-1xfepqk-0 lldxBz sc-1a5ntln-0 sc-17677ar-0 HgcUH dNzOQU">
                                <svg viewBox="0 0 16 24" className="sc-1dvwguf-1 gzNdDp">
                                    <g>
                                        <line x1="0" y1="7" x2="16" y2="7"
                                              className="sc-1dvwguf-0 cVaLqf"></line>
                                        <line x1="0" y1="12" x2="16" y2="12"
                                              className="sc-1dvwguf-0 cVaLqf"></line>
                                        <line x1="0" y1="17" x2="16" y2="17"
                                              className="sc-1dvwguf-0 cVaLqf"></line>
                                        <line x1="8" y1="4" x2="8" y2="20"
                                              className="sc-1dvwguf-0 cVaLqe"></line>
                                    </g>
                                </svg>
                                Menu
                            </button>
                        </div>
                        <form action="/search" method="get" className="sc-1hl19fu-0 cZldIg">
                            <button type="button" role="button" aria-label="Close search"
                                    className="sc-180r47m-0 sc-1nka5nr-0 sc-1wt2tkb-0 efBJcA laHjgb iQiRZr">
                                <svg fill="none" viewBox="0 0 16 16" width="16" height="16"
                                     className="sc-1ex2yi3-0 gulag">
                                    <path fill="#000" fill-rule="evenodd"
                                          d="M5.95 3.5 1 8.499l.707.716L5.95 13.5l.707-.714-3.743-3.782H15V7.995H2.914l3.743-3.78L5.95 3.5Z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </button>
                            <input autoComplete="off" type="search" name="q" id="q" placeholder="Search"
                                   className="sc-1hl19fu-1 sc-1hl19fu-2 cJRBFl jBKJFD" value=""/><input
                            autoComplete="off"
                            type="search"
                            name="q" id="q"
                            placeholder="Search for products, categories, brands and more"
                            className="sc-1hl19fu-1 sc-1hl19fu-3 cJRBFl dBnhkV"
                            value=""/>
                            <button type="submit" tabIndex="-1" aria-label="Execute search"
                                    className="sc-180r47m-0 sc-1nka5nr-0 sc-1e3p7aj-0 efBJcA laHjgb btKSBI">
                                <svg fill="none" viewBox="0 0 16 16" width="16" height="16"
                                     className="sc-1ex2yi3-0 gulag">
                                    <path fill="#000" fill-rule="evenodd"
                                          d="M6 11c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5Zm10 4.293-5.421-5.421A5.97 5.97 0 0 0 12 6 6 6 0 0 0 0 6a6 6 0 0 0 6 6 5.97 5.97 0 0 0 3.872-1.421L15.293 16l.707-.707Z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </button>
                            <div className="sc-1hl19fu-4 hCpcEQ">
                                <div className="sc-7dzag4-0 cXFkOB"></div>
                            </div>
                        </form>
                    </div>
                    <div className="sc-fxoj0o-0 cBOimE">
                        <button aria-label="Country Language Switcher" type="button"
                                className="sc-180r47m-0 efBJcA">
                            <div className="sc-fxoj0o-1 lnuGUg">
                                <svg fill="none" viewBox="0 0 16 16" width="16" height="16"
                                     className="sc-1ex2yi3-0 gulag">
                                    <path fill="#000"
                                          d="M14.92 12A7.979 7.979 0 0 0 16 8c0-1.46-.4-2.82-1.08-4A7.953 7.953 0 0 0 8.69.04C8.46.01 8.23 0 8 0a7.988 7.988 0 0 0-6.92 4A7.979 7.979 0 0 0 0 8c0 1.46.4 2.82 1.08 4a7.953 7.953 0 0 0 6.23 3.96c.23.03.46.04.69.04a7.988 7.988 0 0 0 6.92-4ZM8.5 14.84V13h1.85c-.52.71-1.14 1.32-1.85 1.84Zm0-2.84V8.5h3.46a8.43 8.43 0 0 1-.98 3.5H8.5Zm0-4.5V4h2.48c.57 1.05.91 2.24.98 3.5H8.5Zm0-4.5V1.16c.71.52 1.33 1.13 1.85 1.84H8.5Zm1.81-1.6c.97.34 1.85.89 2.58 1.6h-1.33c-.36-.58-.78-1.11-1.25-1.6ZM4.45 3H3.11a6.89 6.89 0 0 1 2.58-1.6c-.47.49-.89 1.02-1.24 1.6ZM7.5 1.16V3H5.65c.52-.71 1.14-1.32 1.85-1.84ZM7.5 4v3.5H4.04c.07-1.26.42-2.45.98-3.5H7.5Zm0 4.5V12H5.02a8.283 8.283 0 0 1-.98-3.5H7.5Zm0 4.5v1.84A8.496 8.496 0 0 1 5.65 13H7.5Zm-1.81 1.6A7.05 7.05 0 0 1 3.11 13h1.33c.36.58.78 1.11 1.25 1.6Zm5.86-1.6h1.33a6.89 6.89 0 0 1-2.58 1.6c.48-.49.9-1.02 1.25-1.6Zm.55-1c.5-1.07.81-2.25.87-3.5h2.01c-.09 1.3-.53 2.49-1.24 3.5H12.1Zm2.87-4.5h-2.01A9.294 9.294 0 0 0 12.1 4h1.64c.7 1.01 1.14 2.2 1.23 3.5ZM3.9 4c-.5 1.07-.8 2.25-.87 3.5h-2c.09-1.3.53-2.49 1.23-3.5H3.9ZM1.03 8.5h2.01c.06 1.25.36 2.43.86 3.5H2.26c-.7-1.01-1.14-2.2-1.23-3.5Z"></path>
                                </svg>
                                <svg fill="none" viewBox="0 0 16 16" width="16" height="16"
                                     className="sc-1ex2yi3-0 gmIvAH">
                                    <path fill="#DA291C" d="M0 0h16v16H0z"></path>
                                    <path fill="#F1F9FF"
                                          d="M9.514 3.027H6.486v3.46H3.027v3.027h3.46v3.459h3.027v-3.46h3.459V6.487h-3.46V3.027Z"></path>
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div id="usermenu" className="sc-16ny2pj-0 kHRdyM usermenu" data-test="loggedOut">
                        <div className="sc-m9ommx-0 iyUVDN">
                            <div className="sc-g4z71u-0 kHHsAt"></div>
                            <div className="sc-15na5th-0 bJQOCP"></div>
                        </div>
                        <div className="sc-m9ommx-1 bDjLSg">
                            <div className="sc-m9ommx-0 iyUVDN">
                                <button type="button" className="sc-180r47m-0 efBJcA"><span
                                    aria-label="Product comparison"
                                    className="sc-14p7t1m-0 fznDHV"><svg
                                    fill="none" viewBox="0 0 16 16" width="16" height="16"
                                    className="sc-1ex2yi3-0 gulag"><path fill="#000" fill-rule="evenodd"
                                                                         d="M9 8h7V1H9v7Zm1-1h5V2h-5v5ZM0 8h7V1H0v7Zm1-1h5V2H1v5Zm8 5h7v-1.001H9V12Zm-9 0h7v-1.001H0V12Zm9 2h7v-1H9v1Zm-9 0h7v-1H0v1Zm9 2h7v-1H9v1Zm-9 0h7v-1H0v1Z"
                                                                         clip-rule="evenodd"></path></svg><span
                                    className="sc-14p7t1m-1 gimHET">0</span></span></button>
                                <div className="sc-15na5th-0 bJQOCP"></div>
                            </div>
                        </div>
                        <div className="sc-m9ommx-1 bDjLSg">
                            <div className="sc-m9ommx-0 iyUVDN">
                                <button type="button" className="sc-180r47m-0 efBJcA"><span
                                    aria-label="Watch lists"
                                    className="sc-14p7t1m-0 fznDHV"><svg
                                    fill="none" viewBox="0 0 16 16" width="16" height="16"
                                    className="sc-1ex2yi3-0 gulag"><path fill="#000" fill-rule="evenodd"
                                                                         d="M9.318 0 6.123 3.195l1.495 1.494-2.492 2.49H2.14L.644 8.675l2.99 2.989L0 15.294.705 16l3.632-3.633 2.99 2.988 1.493-1.494v-2.989l2.49-2.49 1.495 1.494L16 6.682 9.318 0ZM2.052 8.674l.5-.498h2.987l3.488-3.487-1.495-1.494 1.786-1.786 5.273 5.273-1.786 1.786-1.494-1.495-3.487 3.487v2.989l-.498.498-5.274-5.273Z"
                                                                         clip-rule="evenodd"></path></svg><span
                                    className="sc-14p7t1m-1 gimHET">0</span></span></button>
                                <div className="sc-15na5th-0 bJQOCP"></div>
                            </div>
                        </div>
                        <div className="sc-m9ommx-1 bDjLSg">
                            <div className="sc-m9ommx-0 iyUVDN">
                                <button type="button" className="sc-180r47m-0 efBJcA"><span aria-label="Cart"
                                                                                            className="sc-14p7t1m-0 fznDHV"><svg
                                    fill="none" viewBox="0 0 16 16" width="16" height="16"
                                    className="sc-1ex2yi3-0 gulag"><path fill="#000" fill-rule="evenodd"
                                                                         d="M15 4H3.728l2.225 6.113L15 8.19V4Zm1-1v6L5.311 11.272 1.936 2H0V1h2.636l.728 2H16ZM3.5 12a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM14 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                                                                         clip-rule="evenodd"></path></svg><span
                                    className="sc-14p7t1m-1 gimHET">0</span></span></button>
                                <div className="sc-15na5th-0 bJQOCP"></div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <div id="stickyHeaderPortalContainer" className="sc-u7tzga-4 kZCddo"></div>
            <Component {...pageProps} />
        </div>
    </div>;
}

export default MyApp;
