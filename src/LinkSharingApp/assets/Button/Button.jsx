import {useState} from 'react';
import './styles.scss';


export const Button = props => {

	const{
		type,
		className,
		onClick,
		children,
		displayWord,
		disabled,
		value
	} = props
	
  return (
  	<>
  		<button 
  			type={type} 
  			onClick={onClick} 
  			className={className ? className : undefined}
  			disabled={disabled}
			value={value}>
				{displayWord}
  			{disabled ? <i className="loadingIcon"></i> : children}
  		</button>
  	</>
  )
}


