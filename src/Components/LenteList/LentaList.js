import React, { useContext, useEffect } from 'react';
import { topicContext } from "../../Context/TopicContext"
import '../LenteList/LentaList.css'

const LentaList = () => {

    const { todos, getTodosData } = useContext(topicContext)

    useEffect(() => {
        console.log("useEffect");
        getTodosData()
    }, [])


    return (
        <ul className="ul">
            {todos.map(item => (
                <li className="li-1" key={item.id}>
                    <li>{item.name}</li>
                    <li >
                        <img className="img-1" key={item.id}
                            src={item.silka}
                        />
                    </li>
                    <li>{item.descriptions}</li>
                </li>
            ))}
        </ul>
    );
};

export default LentaList;