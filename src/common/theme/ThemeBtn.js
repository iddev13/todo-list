import React from 'react';


const ThemeBtn = () => {

	document.addEventListener('DOMContentLoaded', function () {
		const bntTheme = document.querySelector('.bntTheme');
		bntTheme.addEventListener('click', () => {
			document.body.classList.add('dark');
			console.log(bntTheme);
			console.log('fff');
		})
	});


	// bntTheme.addEventListener('click', () => {
	//   document.body.classList.toggle('dark');
	// })

	return (
		<>
			<button className="bntTheme">Сменить тему</button>
		</>
	)
}

export default React.memo(ThemeBtn);