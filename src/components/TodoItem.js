import React from 'react';

//componente qwue mostra a tarefa a ser realizada
export default function TodoItem({todo, removeTask}){
    return(
        <li sytle={styles.item}>
            {todo.date} --- {todo.hora} --- {todo.text}
            <button style={styles.button}onClick={()=>removeTask(todo.id)}>Delete</button>
        </li>
    );
}
const styles = {
    item : {
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "15px",
        display: "flex",
        justifycontent:"space-between",
        alignIens:"center",
    },

    button:{
        backgroud:"red",
        color:"White",
        border:"none",
        padding:"5px",
        cursor: "pointer",
        borderRadius: "5px",
    }
};