import React, { useContext, useState } from 'react';
import { topicContext } from "../../Context/TopicContext"
import '../Lenta/Lenta.css'

const Lenta = () => {

    const [name, setName] = useState('')
    const [silka, setSilka] = useState('')
    const [descriptions, setDescriptions] = useState('')

    const { addTask } = useContext(topicContext)

    function handleClick() {
        let newObj = {
            name: name,
            silka: silka,
            descriptions: descriptions
        }
        addTask(newObj)
        setName("")
        setSilka("")
        setDescriptions("")
    }

    return (
        <div className="Lenta">
            <div className="three-inp">
                <input className="item-inp" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Названия поста" />
                <input className="item-inp" value={silka} onChange={(e) => setSilka(e.target.value)} type="text" placeholder="Ссылка для фотo" />
                <input className="item-inp" value={descriptions} onChange={(e) => setDescriptions(e.target.value)} type="text" placeholder="Описание" />
                <button className="item-btn" onClick={handleClick}>Загрузить instagram</button>
            </div>
        </div>
    );
};

export default Lenta;