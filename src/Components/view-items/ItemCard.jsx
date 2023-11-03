import { useEffect, useState } from "react";
import { getIndividualItemData } from "../../helpers/functionFetch";

function ItemCard({ item }) {
    const [itemInfo, setItemInfo] = useState("")
    useEffect(() => {
        getIndividualItemData(item.url).then((result) => {
            setItemInfo(result)
        })
    }, [])

    return (<>

        {itemInfo &&
            <div className="card" style={{ width: "18rem" }}>
                <h2 className="text-capitalize">{item.name}</h2>
                <img src={itemInfo.sprites.default} alt={item.name} />
                <div className="card-body">
                    <p className="card-text">{itemInfo.effect_entries[0].effect}</p>
                </div>
            </div>}
    </>);
}

export default ItemCard;