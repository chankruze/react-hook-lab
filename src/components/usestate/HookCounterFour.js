/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 08 2020 19:12:52 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState } from 'react'

function HookCounterFour() {
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([...items,
        {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }
        ])
    }

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Value</th>
                </tr>
                {
                    items.map(item => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.value}</td>
                        </tr>
                    ))
                }
            </table>

        </div>
    )
}

export default HookCounterFour
