export default {
	getPlayerNames() {
		let data = Get_Players.data
		let result = []
		for (let player in data) {
			result.push({"label": data[player]["firstName"] + " " + data[player]["lastName"], "value":  data[player]["playerID"]})
		}
		return result
	},
	getTeamNames() {
		let data = Get_Teams.data
		let result = []
		for (let team in data) {
			result.push({"label": data[team]["teamName"], "value":  data[team]["teamName"]})
		}
		return result
	}
}