import React, { useState } from "react";
import "./index.css";



const App = () => {
    const [val, Uval] = useState();
    const [item, setItem] = useState([]);
    const Change = (event) => {
        Uval(event.target.value)
        console.log(event.target.value)
    }
    const Click = () => {
        setItem((olditem) => {
            if (olditem.length <= 8) {
                
                return [...olditem, val]
                
            }
            else {
                alert("Todo is full")
                return [...olditem]

            }
        })
        Uval("");
    };
    const deleteItem = (id) => {
        setItem((olditem) => {
            return olditem.filter((arr, ind) => {
                return ind !== id;
            });
        })
    }
    const Clear = ()=>{
        setItem((olditem) => {
            return[]
        }
        )}
    
    return (
        
        <div className="all">
      
            <div className="card">
               <span className="ftop">  <p>-ToDo Application</p> <button onClick={Clear}>
               Clear All</button></span>
                <span className="top">
                    <input type="text"
                        id = "myinput"
                        name="data"
                        value={val}
                        placeholder="Enter your data"
                        onChange={Change}
                    />
                    <button id="mybtn" onClick={Click}> + </button>

                </span>
                <div className="list">
                    <ul>
                        {/* <li>{val}</li> */}
                        {
                            item.map((itemval, index) => {
                                const id = index;
                                return (
                                    <li><button onClick={() => {
                                        deleteItem(id)
                                    }}>x</button>{index + 1}_ {itemval}</li>
                                )
			{/* return(
                      <Todolist 
                        key = {index}
                        id = {index}
                        text = {itemval}
                        onSelect = {deleteItem}
                      />
                        ) */}
                            })
                        }
                    </ul>

                </div>
            </div>


        </div>
    )
}
export default App;