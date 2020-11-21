import React from 'react'

export const Transaction = () => {
    return (
        <div>
            <li className = "plus">
                Project 1 Income
                <span>$1000</span>
                <button className="delete-btn">X</button>
              </li>
              <li className = "minus">
                Project 1 Salaries 
                <span>-$500</span>
                <button className="delete-btn">X</button>
              </li>
              <li className = "plus">
                Project 2 Income
                <span>$2000</span>
                <button className="delete-btn">X</button>
              </li>
              <li className = "minus">
                Project 2 Salaries
                <span>-$100</span>
                <button className="delete-btn">X</button>
              </li>
        </div>
    )
}
