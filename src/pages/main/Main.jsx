import React from "react";
import Airport from "../../component/Airport-block/Airport";
import Four_div from "../../component/four/Four_div";
import Search from "../../component/search_area/Search";
import Third from "../../component/Third_box/Third";
import css from './main.module.css'
const Main=()=>{
    return(
        <>
        <div className={css.main}>
            <Search/>
            <Airport/>
            <Third/>
            <Four_div/>
        </div>
        </>
    )

}
export default Main;