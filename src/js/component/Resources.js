import React from "react";

function Resources() {
	const data = [
		{
			id: 1,
			name: "Learn React Here : React Js Tutorial",
			url:
				"https://content.breatheco.de/en/lesson/learn-react-js-tutorial"
		},
		{
			id: 2,
			name: "Creating React Components",
			url:
				"https://content.breatheco.de/en/lesson/making-react-components"
		}
		// uncomment the following lines and see how the new element gets mapped (pay attention to the commas separating each object in this array of data)
		// ,{
		// 	id: 3,
		// 	name: "React Hooks Explained",
		// 	url: "https://content.breatheco.de/en/lesson/react-hooks-explained"
		// }
	];

	return (
		<ul className="mt-2 p-0">
			{data.map(x => (
				<li key={x.id} style={{ listStyleType: "none", margin: "0" }}>
					<a href={x.url} target="_blank" rel="noreferrer">
						{x.name}
					</a>
				</li>
			))}
		</ul>
	);
}

// Home.propTypes = {
// 	name: PropTypes.string
// };

export default Resources;
