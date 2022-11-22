import Image from 'next/image';
import Link from 'next/link'
import p from "../../datas/data_products";

export default function Home({}) {
    function getLi3(it, index) {
        // let arr="cHvngh eGRkRH eBGukk cWzfmG fMNxoH".split(" ")
        let arr = "cWzfmG".split(" ")
        let data = "sc-1o6m0xd-2 " + arr[index % arr.length]
        return <li className={data}>
            <article className="sc-akwrq9-0 QcCxK"><Link
                aria-label="Keep an eye out: this year, you can enjoy an entire week of Black Friday"
                href={"/product/" + it.id}
                className="sc-qlvix8-0 sc-8stqpn-0 dDCPSf cSFqDH"></Link>
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
                <div className="sc-akwrq9-2 ZkrEU">
                    <p className="sc-ftmmoq-0 iEiUsJ"> {it.price} €</p>
                    <h4 className=" ">{it.title}</h4>
                    <p className="sc-1dle1jt-0 gcvCjY"></p>
                </div>
            </article>
        </li>;
    }

    return (<div className="sc-uyg4v5-0 kulRZW containerFluid">
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
            products: p.datas
        },
    }
}
