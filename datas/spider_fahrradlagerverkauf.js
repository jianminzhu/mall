let head = document.getElementsByTagName('head')[0];
let script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://code.jquery.com/jquery-3.6.1.js';
head.appendChild(script);
let items = await spiderKeyWords("cube 2023 e-bikes")

console.log(items)
async function spiderKeyWords(keyWords) {
    let query = encodeURI(keyWords)
    let jobj = {
        "requests": [{
            "indexName": "production_SEARCH_INDEX_EN",
            "params": `clickAnalytics=true&enablePersonalization=false&facets=%5B%22*%22%5D&getRankingInfo=true&highlightPostTag=%3C%2Fais-highlight-0000000000%3E&highlightPreTag=%3Cais-highlight-0000000000%3E&hitsPerPage=30&maxValuesPerFacet=999&page=0&query=${query}&tagFilters=&userToken=ca2397b6-e442-4127-8cc1-9839566ec797`
        }]
    }
    let aa = await fetch("https://search.bike24.com/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(4.14.2)%3B%20Browser%20(lite)%3B%20JS%20Helper%20(3.11.1)%3B%20react%20(17.0.2)%3B%20react-instantsearch%20(6.33.0)", {
        body: JSON.stringify(jobj),
        headers: {'Content-Type': 'application/json'},
        "method": "POST"
    }).then((res) => {
        return res.json()
    })
    let urls = aa.results[0].hits.map(it => {
        return it.productLink.en + ".html"
    })
    let items = await Utils.parseUrls(urls, parseItem)
    return items
}

function parseItem(htmlOrJson) {
    let $doc = $(htmlOrJson)
    let item = {
        title: $doc.find("h1.product-detail-information-area__product-name").text(),
        description: $doc.find(".product-detail-tab-nav__content--4").html(),
        FactSheet: [],
        FactSheetObj: {},
        images: []
    }
    try {
        let it = JSON.parse($doc.find("#add-to-cart").attr("data-props"));
        item.price = it.gtmData.price
        item.productId = it.gtmData.id
    } catch (e) {
    }

    $doc.find(".product-detail-tab-nav__list-item--3 .product-detail-data-sheet__table tbody > tr").each(function (index, it) {
        let k = $(it).find(">td:eq(0)").text().replace(":", "")
        let v = $(it).find(">td:eq(1)").text()
        item.FactSheet.push({k, v})
        item.FactSheetObj[k] = v
    })
    $doc.find(".image-gallery__slide img").each(function (index, it) {
        item.images.push($(it).attr("src"))
    })
    item.store = $doc.find(".product-detail-tab-nav__content--2 td:eq(0)").text().replace(/Still|in|stock|\s*/gi, "")
    item.sendTime = $doc.find(".product-detail-tab-nav__content--2 td:eq(1)").text()

    item.store = $doc.find(".product-availability__availability").text().replace(/Still|in|stock|\s*/gi, "")
    item.store = $doc.find(".product-availability__info-text").text().replace(/Still|in|stock|\s*/gi, "")
    item.size = $doc.find(".product-detail-tab-nav__content--2 td:eq(2)").text()
    return item;
}

class Utils {
    static async fetchAndParse(url, parseItem) {
        let html = await Utils.fetchHtml(url);
        return new Promise((resolve, reject) => {
            let it = parseItem(html);
            resolve(it)
        })
    }

    static async fetchHtml(url) {
        return await fetch(url).then((res) => {
            return res.text()
        })
    }

    static async parseUrls(urls, parseItem) {
        let all = urls.filter(it => (it || "").trim() !== "").map(url => {
            return Utils.fetchAndParse(url, parseItem)
        });
        return Promise.all(all)
    }
}

