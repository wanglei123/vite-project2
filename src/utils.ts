export function getById(id: number){
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log('get id ', id)
			resolve(id)
		}, 1000)
	})
}

(async function(){
	const ids = [10, 20, 30, 40, 50]
	ids.forEach(async (id) => {
		await getById(id)
	})
})()