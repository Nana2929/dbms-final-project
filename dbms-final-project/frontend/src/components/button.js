import React, {useContext} from "react";
import { DBAppContext } from "./AppContext";
function Button ({name, StyleCmpt}){
    const {handleClick} = useContext(DBAppContext);
    return (
        <StyleCmpt>
          <button
            type="button"
            onClick={()=>handleClick(name)}
          >
          {name}
          </button>
        </StyleCmpt>
  )
}

export default Button;

