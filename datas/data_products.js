import datas from "./bike24_result.json"

datas.map(it => {
    it.id=it.productId
    it.price=(it.price*1.2).toFixed(2)
});
export default {
    datas
}
