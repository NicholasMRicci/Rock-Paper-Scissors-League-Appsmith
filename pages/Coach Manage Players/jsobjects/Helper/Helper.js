export default {
		getPlayerNames() {
		let data = Get_Players.data
		let result = []
		for (let player in data) {
			result.push({"label": data[player]["firstName"] + " " + data[player]["lastName"], "value":  data[player]["playerID"]})
		}
		return result
	},
	getCoaches() {
		let data = Get_Coaches.data
		let result = []
		for (let coach in data) {
			result.push({"label": data[coach]["firstName"] + " " + data[coach]["lastName"], "value":  data[coach]["coachID"]})
		}
		return result
	},
	getMyTeam() {
		let data = Get_My_Team.data
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
	signPlayer() {
		let playerID = parseInt(SignSelect.selectedOptionValue)
		let player = Helper.getPlayer(playerID)
		player["teamName"] = Get_My_Team_Name.data
		let joinDate = new Date(player["joinDate"])
		player["joinDate"] = joinDate.toISOString().split('T')[0];
		let birthday = new Date(player["birthday"])
		player["birthday"] = birthday.toISOString().split('T')[0];
		return player
	},
	firePlayer() {
		let playerID = parseInt(FireSelect.selectedOptionValue)
		let player = Helper.getPlayer(playerID)
		player["teamName"] = undefined
		let joinDate = new Date(player["joinDate"])
		player["joinDate"] = joinDate.toISOString().split('T')[0];
		let birthday = new Date(player["birthday"])
		player["birthday"] = birthday.toISOString().split('T')[0];
		return player
	},
	editPlayer() {
		let playerID = parseInt(Player_Select.selectedOptionValue)
		let player = Helper.getPlayer(playerID)
		let joinDate = new Date(joinInput.inputText)
		player["joinDate"] = joinDate.toISOString().split('T')[0];
		let birthday = new Date(birthdayInput.inputText)
		player["birthday"] = birthday.toISOString().split('T')[0];
		player["playerStatus"] = `${statusInput.inputText}`
		player["firstName"] = firstNameInput.inputText
		player["lastName"] = lastNameInput.inputText
		player["phoneNumber"] = phoneInput.inputText
		
		return player
	},
}