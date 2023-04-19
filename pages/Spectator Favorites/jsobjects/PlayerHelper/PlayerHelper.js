export default {
	getPlayerNames() {
		let data = Get_Players.data
		let result = []
		for (let player in data) {
			let entry = {}
			entry["label"] = data[player]["firstName"] + " " + data[player]["lastName"]
			entry["value"] = data[player]["playerID"]
			result.push(entry)
		}
		return result
	}
}