import React, { useState } from 'react';

const LightBox = ({ children, src, alt, Wrapper = 'div', zIndex = 100 }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleIsOpen = (e) => {
		console.log(e.target.tagName)
		setIsOpen(!isOpen);
	};
	

	return (
		<Wrapper onClick={toggleIsOpen}>
			{children}
			{isOpen ?
				<div style={{
					position: 'fixed',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					top: '0',
					left: '0',
					height: '100vh',
					width: '100vw',
					backgroundColor: 'rgba(0,0,0,0.7)',
					cursor: 'pointer',
					zIndex: '99'
				}}>
					<img 
					src={src}
						alt={alt}
						style={{
							display:'block',
							maxHeight: '80vh',
							maxWidth: '90vw',
						
						}}
					/>
				</div>
				: null}
		</Wrapper>
	);
};

export default LightBox;