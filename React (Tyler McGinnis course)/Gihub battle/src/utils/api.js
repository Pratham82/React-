export function fetchPopularRepos(Language) {
	const endpoint = window.encodeURI(
		`https://api.github.com/search/repositories?q=stars:>1+language:${Language}&sort=stars&order=desc&type=Repositories`
	);

	return fetch(endpoint)
		.then((response) => response.json())
		.then((data) => {
			// If the data cannot be fetched then throw error
			if (!data.items) {
				throw new Error(data.message);
			}
			// If there was not any error then  we are just going to return the data
			return data.items;
		});

	// We are not using catching the here because we cannot do anything here, so rather instead of catching error here we are throwing the error from here and when we invoke the function we are going to catch the error.

	// If theres a problem then we are in the UI layer, now we can update th UI based on that problem
}
