import { useEffect, useState } from "react";
import { useItems } from "../../hooks/useItems";
import ItemCard from "./ItemCard";
import { useNavigate } from "react-router-dom";

function Items() {
    const [items, setItems] = useState("")
    const { itemsData } = useItems()
    const navigate = useNavigate()
    useEffect(() => {
        if (itemsData.data) {
            setItems(itemsData.data)
        }
    }, [itemsData.data])

    const handlePage = async (url) => {
        try {
            let res = await fetch(url)
            let data = await res.json()
            setItems(data)
        } catch (error) {
            console.error(error)
        }
    }

    return (<>
        <button className="btn btn-dark" onClick={() => navigate(-1)}>←</button>
        <section>
            <h1 className="display-1 w-100 text-center my-5">Items</h1>
            <main className="items-grid">
                {items && items.results.map(item => <ItemCard key={item.name} item={item} />)}
            </main>
            <div className="w-100 d-flex justify-content-between my-5 px-4">
                <button className="btn btn-outline-primary btn-lg px-5" disabled={items?.previous ? false : true} onClick={() => handlePage(items?.previous)}>Prev</button>
                <button className="btn btn-outline-primary btn-lg px-5" disabled={items?.next ? false : true} onClick={() => handlePage(items?.next)}>Next</button>
            </div>
        </section></>);
}

export default Items;