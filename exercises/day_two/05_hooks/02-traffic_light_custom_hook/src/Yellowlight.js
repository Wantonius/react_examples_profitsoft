const Yellowlight = (props) => {

		let style = {
			backgroundColor:"white",
			marginTop:10,
			marginLeft:10,
			height:200,
			width:200
		}
		if(props.color === "yellow") {
			style.backgroundColor = "yellow"
		}
		return (
			<div style={style}></div>
		)
}

export default Yellowlight;