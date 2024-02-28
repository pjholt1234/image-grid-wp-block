export function LogoGrid({ logos }) {
	return (
		<div className="logo-grid-container">
			{logos.map((logo) => (
				<div className="logo-container">
					<img className="logo" src={logo.url} alt={logo.alt} key={logo.id} />
				</div>
			))}
		</div>
	);
}
