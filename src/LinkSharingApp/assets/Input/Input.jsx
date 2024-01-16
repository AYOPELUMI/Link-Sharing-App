import {useState, useEffect} from "react"
import {useRef} from 'react';
import {RiEyeCloseFill} from "react-icons/ri"
import {HiEye} from "react-icons/hi"
import "./Input.scss"

export function Input (props) {
	const{
		type,
		className,
		placeHolder,
		checkedValueFunction,
		required,
		inputChange,
		labelFor,
		labelClassName,
		value,
		updateState,
		index,
		span,
		accept,
		handleChange,
		spanBg,
		errorMsg,
		disabled
	} = props

	const [checkedValue, setCheckedValue] = useState(false)
	const [showPassword, setShowPassword] = useState(false)
	let style = {}



	const handleOnFocus = (e) =>{
		// setFocusBoolean(true)
		// setDivClickBoolean(true)
	}
	const handleDivClick =(e) => {
		setDivClickBoolean(true)
		// handleclick(!divClickBoolean)
		console.log("i passed thru here")
		inputRef.current.focus()		
	}

	const handleBlur = (e) => {
		// if (!value) {
		// 	setFocusBoolean(false)
		// 	// setDivClickBoolean(false)
		// }
		// else{
		// 	setFocusBoolean(true)
		// 	updateState(inputValue)
		// 	// setDivClickBoolean(true)
		// }
	}

	const handleShowPassword = () =>{
		setShowPassword(!showPassword)
		console.log("i pass here")
	}

	return(
		<label className={labelClassName ? labelClassName : "labelInput"} style ={{
			flexDirection : span ? "row" : undefined,
			cursor : span ? "pointer" : undefined
		}}>
			<span>{labelFor}</span>
			<div>		
				{placeHolder ? <div 
					className="placeHolder" 
					style={style} 
					onClick={handleDivClick}>
					{placeHolder}
				</div> : null}
				<input style={{
					backgroundImage : spanBg ? "URL(" + spanBg+")" : undefined
				}}
					type={showPassword ? "text" : type} 
					required={required} 
					accept={accept}
					checked={checkedValue} 
					onBlur={span ? null : handleBlur}  
					onFocus={span ? null : handleOnFocus} 
					className={className ? className : undefined} 
					onChange={handleChange} 
					value={value}
					index={index}
					name={span}
					id={span}
					disabled={disabled}
				/>
				{type == "password" ? showPassword ? <HiEye className="passWordIcon"  onClick={handleShowPassword}/> : <RiEyeCloseFill onClick={handleShowPassword} className="passWordIcon"/> : null}
			</div>
				{spanBg ?<div  className="imagePreview" style={{
					backgroundImage: "url("+spanBg+")"
				}}></div> : null}
		</label>
	)
}