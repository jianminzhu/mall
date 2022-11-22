import Head from 'next/head';
import Image from 'next/image';
import s from '../styles/Home.module.css';
import NLink from 'next/link'
import p from "../datas/data_products";

export default function Home({}) {
    function getLi(it) {
        return <li className="sc-1o6m0xd-2 fMNxoH">
            <article className="sc-akwrq9-0 QcCxK"
                     href={"/product/" + it.id}>
                <a aria-label="Keep an eye out: this year, you can enjoy an entire week of Black Friday"
                   className="sc-qlvix8-0 sc-8stqpn-0 dDCPSf cSFqDH"></a>
                <div role="presentation" className="sc-akwrq9-1 bxAPvb">
                    <div className="sc-5yfme-0 byYTBE">
                        <Image
                            className="sc-1k4pd2t-0 sc-5yfme-2 fKlzeC"
                            src={it.images[0]}
                            sizes="(min-width: 1600px) 1255px,(min-width: 1400px) 1000px,(min-width: 992px) 668px,200px"
                            decoding="sync" alt="" loading="eager"
                            importance="high"/>
                    </div>
                </div>
                <div className="sc-akwrq9-2 ZkrEU">
                    <p className="sc-ftmmoq-0 iEiUsJ"> Shopping
                        guide</p><h4
                    className="sc-178swec-0 bGuWDK">{it.title}</h4>
                    <p className="sc-1dle1jt-0 gcvCjY"></p></div>
            </article>
        </li>;
    }

    function getLi2(it) {
        return <div className="sc-nduxza-3 gRgblo">
            <div
                className="sc-nhzw9r-0 sc-nduxza-4 dcQoXx kMlMLj"></div>
            <div className="sc-6sjgb6-0 ehANaZ sc-nduxza-5 bimniy">
                <div className="sc-6sjgb6-1 cICEPK">
                    <div width="80%"
                         height="var(--theme-product-tile-font-size)"
                         className="sc-nhzw9r-0 cGZGBh">{it.title}</div>
                </div>
                <div className="sc-6sjgb6-1 cICEPK">
                    <div width="80%"
                         height="var(--theme-product-tile-font-size)"
                         className="sc-nhzw9r-0 cGZGBh"></div>
                </div>
                <div className="sc-6sjgb6-1 cICEPK">
                    <div width="80%"
                         height="var(--theme-product-tile-font-size)"
                         className="sc-nhzw9r-0 cGZGBh"></div>
                </div>
                <div className="sc-6sjgb6-1 cICEPK">
                    <div width="50%"
                         height="var(--theme-product-tile-font-size)"
                         className="sc-nhzw9r-0 gWbDuo"></div>
                </div>
            </div>
        </div>;
    }

    function getLi3(it, index) {
        // let arr="cHvngh eGRkRH eBGukk cWzfmG fMNxoH".split(" ")
        let arr = "cWzfmG".split(" ")
        let data = "sc-1o6m0xd-2 " + arr[index % arr.length]
        return <li className={data}>
            <article className="sc-akwrq9-0 QcCxK"><a
                aria-label="Keep an eye out: this year, you can enjoy an entire week of Black Friday"
                href={"/product/"+it.id}
                className="sc-qlvix8-0 sc-8stqpn-0 dDCPSf cSFqDH"></a>
                <div role="presentation" className="sc-akwrq9-1 bxAPvb">
                    <div className="sc-5yfme-0 UNNII">
                        <Image  
             				alt={it.title} 
            				width={200}
        					height={200}
                            src={it.images[0]}
                            importance="high"/>
                    </div>
                </div>
                <div className="sc-akwrq9-2 ZkrEU"><p
        className="sc-ftmmoq-0 iEiUsJ"> {it.price} €</p><h4
                    className=" ">{it.title}</h4>
                    <p className="sc-1dle1jt-0 gcvCjY"></p>
                </div>
            </article>
        </li>;
    }

    return (
    <div className="sc-uyg4v5-0 kulRZW containerFluid">
        <div className="sc-1ntwnpc-0 eEyBHS">
            <div className="sc-1eipa6s-0 cBQlgb">
                <div id="pageContent" className="sc-ibc58p-0 iOYsNF">
                    <div className="sc-mwvx1f-0 caepos">
                        <div className="sc-1163rsi-1 dvYWiL">
                            <div className="sc-mwvx1f-1 cODMRb">
                                <section className="sc-1qqogss-0 dDLgCn"></section>
                            </div>
                            <div className="sc-mwvx1f-1 cODMRb">
                                <section className="sc-1qqogss-0 dDLgCn"></section>
                            </div>
                            <section className="sc-1qqogss-0 dDLgCn">
                                <div className="sc-1o6m0xd-0">
                                    <ul className="sc-1o6m0xd-1 fBHiOm">
                                        {p.datas.map((it, index) => {
                                            return getLi3(it, index)
                                        })}
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export async function getStaticProps({params}) {
    return {
        props: {
            products: p.datas,
            page: {
                no: 1,
                pageSize: 10,
                total: 10
            }
        },
    }
}
