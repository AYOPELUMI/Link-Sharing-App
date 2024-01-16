import {useState, useEffect} from "react"
import {useRef} from 'react';
import {RiEyeCloseFill} from "react-icons/ri"
import {HiEye} from "react-icons/hi"
import "./FormInput.scss"

export function FormInput (props) {
	const{
		type,
		className,
		onChange,
		placeHolder,
		required,
		labelFor,
		labelClassName,
		value,
		index,
		span,
		errorMsg
	} = props

	const [focusBoolean, setFocusBoolean] = useState(false)
	const [divClickBoolean, setDivClickBoolean] = useState(false)
	const inputRef = useRef(null);
	const [showPassword, setShowPassword] = useState(false)
	
	let style = {}

	const handleOnFocus = (e) =>{
		setFocusBoolean(true)
		setDivClickBoolean(true)
	}
	const handleDivClick =(e) => {
		setDivClickBoolean(true)
		// handleclick(!divClickBoolean)
		console.log("i passed thru here")
		inputRef.current.focus()		
	}

	const handleShowPassword = () =>{
		setShowPassword(!showPassword)
		console.log("i pass here")
	}

		style={
			fontSize: value ? "12px" : null,
			transform:  value ? "translateY(-50px)" : "translateY(-160%)",
			zIndex : value ? "2" : "1",
			top: value? '52px' : '55px',
			left : value ? "12px" :"15px",
			color: className == "error" ? "red" : undefined
		}

	return(
		<label className={labelClassName ? labelClassName : undefined} style ={{
			flexDirection : span ? "row" : undefined,
			cursor : span ? "pointer" : undefined
		}}>
			{labelFor}
			{errorMsg ? <p className="errorMsg" style={{
				fontSize: type== "password" ? "12px" : undefined,
				position : "static" 
			}}>{errorMsg}</p> : null}

					<input 
						type={showPassword ? "text" : type} 
						required={required ? true :false }  
						ref={inputRef} 
						onFocus={span ? null : handleOnFocus} 
						className={className ? className : undefined} 
						onChange={onChange} 
						value={value}
						index={index}
						name={span}
						id={span}
					/>
					{type == "password" ? showPassword ? <HiEye className="passWordIcon"  onClick={handleShowPassword}/> : <RiEyeCloseFill onClick={handleShowPassword} className="passWordIcon"/> : null}
					<div 
						className="placeHolder" 
						style={style} 
						onClick={handleDivClick}>
						{placeHolder}
					</div>
				{span ? span: null}
		</label>
	)
}