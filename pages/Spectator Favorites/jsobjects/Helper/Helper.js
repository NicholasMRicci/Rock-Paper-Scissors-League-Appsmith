export default {
		getPlayerNames() {
		let data = Get_Players.data
		let result = []
		for (let player in data) {
			result.push({"label": data[player]["firstName"] + " " + data[player]["lastName"], "value":  data[player]["playerID"]})
		}
		return result
	},
	getPlayer(id) {
		let data = Get_Players.data
		for (let player in data) {
			if (data[player]["playerID"] === id) {
				return data[player]
			}
		}
		return {}
	},
	getTeamnames() {
		let data = Get_Teams.data
		let result = []
		for (let team in data) {
			result.push({"label": data[team]["teamName"], "value":  data[team]["teamName"]})
		}
		return result
	},
	getTeam(teamName) {
		let data = Get_Teams.data
		for (let player in data) {
			if (data[player]["teamName"] === teamName) {
				return data[player]
			}
		}
		return {}
	},
	getCoach(id) {
		let data = Get_Coaches.data
		for (let coach in data) {
			if (data[coach]["coachID"] === id) {
				return data[coach]
			}
		}
		return {}
	},
	getFavoriteTeams() {
		let data = Get_Fav_Teams.data
		for (let elem in data) {
			var coach = Helper.getCoach(data[elem]["coachID"])
			console.log(coach)
			data[elem]["coachID"] = undefined
			data[elem]["Coach"] = coach["firstName"] + " " + coach["lastName"]
		}
		return data
	}
}