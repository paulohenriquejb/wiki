/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {ItemContainer} from './style'
function ItemRepo({repo}){
    return(
       <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} target="_blank" className="Remover"> ver repositorio</a>
        <br/>
        <a href="#"> Remover</a>
        <hr/>

       </ItemContainer>
    )
}



export default ItemRepo