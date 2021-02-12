const Redlight = (props) => {

		let style = {
			backgroundColor:"white",
			marginLeft:10,
			height:200,
			width:200
		}
		if(props.color === "red") {
			style.backgroundColor = "red"
		}
		return (
			<div style={style}></div>
		)
}

export default Redlight;