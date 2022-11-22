// posts will be populated at build time by getStaticProps()


import Image from 'next/image';
import Link from 'next/link';


function Product({it}) {

    return (<div>
        <div className="sc-uyg4v5-0 kulRZW containerFluid" data-layout-container="true">
            <div className="sc-1ntwnpc-0 eEyBHS" style={{align: "center"}}>
                <div className="sc-1eipa6s-0 cBQlgb">
                    <main id="pageContent" tabIndex="-1" className="sc-ibc58p-0 iOYsNF">
                        <div className="sc-1wxgg6a-0 hAplD">
                            <div className="sc-c3y39x-0 bAaSKU">
                                <div className="sc-12803q-0 cMnjlv">
                                    <div className="sc-12803q-1 ceXsHh"><Link
                                        className="sc-1xxwfxa-0 cjjNht sc-1lbzre4-0 dGDTVM" href="/">
                                        <svg fill="none" viewBox="0 0 16 16" width="16" height="16"
                                             className="sc-1ex2yi3-0 gulag">
                                            <path fill="#000" fill-rule="evenodd"
                                                  d="M5.95 3.5 1 8.499l.707.716L5.95 13.5l.707-.714-3.743-3.782H15V7.995H2.914l3.743-3.78L5.95 3.5Z"
                                                  clip-rule="evenodd"></path>
                                        </svg>
                                        Back</Link ></div>
                                </div>
                                <div className="sc-dz9g2r-0 iKnlzL">
                                    <div className="sc-dz9g2r-1 gKUcus">
                                        <div className="sc-dz9g2r-2 deYqGb media">
                                            <section className="sc-1j4409h-0 FNEVx" style={{align: "center"}}
                                                     role="group"
                                                     aria-label="Product Images and Videos"
                                                     aria-roledescription="Carousel">

                                                <div className="sc-l2w220-0 kTUkuW">
                                                    <div className="sc-l2w220-1 iQQZm sc-t7z758-0 fCdGYb"
                                                         tabIndex="-1">
                                                        <div role="group" aria-roledescription="slide"
                                                             aria-label="11 of 11" className="sc-l2w220-2 jYpftC">
                                                            <button className="sc-hjrdu-0 hBOvsE"> <Image  
									             				alt={it.title} 
									            				width={400}
									        					height={400}
									                            src={it.images[0]}
									                            importance="high"/> 
                                                                <div
                                                                    className="sc-1ag4hrz-0 fHUvZr sc-hjrdu-2 ipPcrY"
                                                                ></div>
                                                            </button>
                                                        </div>
                                                    	<h1 > 
                                            				<div ><span style={{"font-size":"1.5rem"}}>Price: {it.price} €</span> </div>
                                        				</h1>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                                <div className="sc-3c7r0w-0 fNfvkC sc-cc5b9d-0 iTeRyk"></div>
                                <div className="sc-3c7r0w-0 fNfvkC"></div>
                                <section className="sc-1qqogss-0 dDLgCn">
                                    <div className="sc-3c7r0w-0 fNfvkC sc-cc5b9d-0 iTeRyk"></div>
                                    <div className="sc-1ymlg2f-0 heVggU">
                                        <h3 id="description">
                                            <button data-test="description" aria-expanded="true"
                                                    className="sc-l19rvt-0 cpMnhX">
                                                <svg fill="none" viewBox="0 0 16 16" width="12" height="12"
                                                     className="sc-1ex2yi3-0 gulag sc-l19rvt-1 doxcjP">
                                                    <path fill="#000" fill-rule="evenodd" d="M5 2v12l6-6.001L5 2Z"
                                                          clip-rule="evenodd"></path>
                                                </svg>
                                                Description
                                            </button>
                                        </h3>
                                    </div>
                                    <div className="sc-l19rvt-2 gpTNdM sc-1wsbwny-0 EvAlG">
                                        <div className="sc-13r1zam-0 dQcQjj">
                                            <div dangerouslySetInnerHTML={{__html: it.description}}/>
                                        </div>
                                        <button type="button" data-test="showMoreButton-description"
                                                aria-expanded="false"
                                                className="sc-1xfepqk-0 lldxBz sc-1gd9bqe-0 hgnluL">
                                            <svg fill="none" viewBox="0 0 16 16" width="14" height="14"
                                                 className="sc-1ex2yi3-0 gulag">
                                                <path fill="#000" fill-rule="evenodd"
                                                      d="M7.995 1v12.086L4.213 9.343l-.713.707 4.284 4.243L8.5 15l4.999-4.95-.714-.707-3.78 3.743V1h-1.01Z"
                                                      clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </section>
                            </div>
                            <div></div>
                        </div>
                    </main>
                    <aside className="sc-1gl8yl3-1 CrOcZ">
                        <div id="sidebarMenu" className="sc-1gl8yl3-0 bmCLbM"></div>
                        <section className="sc-1qqogss-1 VXSyC"></section>
                    </aside>
                </div>
            </div>
        </div>
    </div>)
}

import product from "../../datas/data_products"

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    // const res = await fetch('https://.../posts')
    const datas = product.datas
    // Get the paths we want to pre-render based on posts
    const paths = datas.map((post) => ({
        params: {id: "" + post.id},
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {paths, fallback: false}
}

export async function getStaticProps({
                                         params
                                     }) {
    let productIdMap = {}
    product.datas.map(it => {
        productIdMap[it.id] = it
    });
    const it = productIdMap[params.id] || {id: -1, title: "not found "}
    return {
        props: {
            it,
        },
    }
}

export default Product
