export function LogoGrid({ logos, columns }) {
	let containerClass = '';

	switch(columns) {
		case 2:
			containerClass = 'logo-container--lg';
			break;
		case 3:
			containerClass = 'logo-container--md';
			break;
		case 4:
			containerClass = 'logo-container--sm';
			break;
		default:
			containerClass = 'logo-container--xl';
	}

	return (
		<div className="logo-grid-container" style={{ '--columns': columns }}>
			{logos.map((logo, index) => (
				<div className={containerClass} key={index}>
					<img className="logo" src={logo.url} alt={logo.alt} key={logo.id} />
				</div>
			))}
		</div>
	);
}
