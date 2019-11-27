import React from "react";
import style from "./index.scss"

const Header = (Props) => {

	

	return (
		<div className={ style.header }>
			<p className= { style.pageName }>{ Props.title }</p>
		</div>
	)
}

export default Header
