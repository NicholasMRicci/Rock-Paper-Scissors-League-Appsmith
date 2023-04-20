export default {
	getMatches() {
		let players = Get_Players.data
		let plMap = new Map(players.map((pl) => {
			return [pl.playerID, pl.firstName + " " + pl.lastName]
		}))
		let tournaments = Tournaments.data
		let tMap = new Map(tournaments.map((t) => {
			return [t.tournamentID, t.tournamentName]
		}))
		let matches = Matches.data
		return matches.map((match) => {
			return {
				"player1": plMap.get(match.player1ID),
				"player1Throw": match.player1Throw,
				"player2": plMap.get(match.player2ID),
				"player2Throw": match.player2Throw,
				"team1": match.team1,
				"team2": match.team2,
				"tournament": tMap.get(match.tournamentID),
				"gameID": match.gameID
			}
		})
	},
	
	teamsForPlayers() {
		let players = Get_Players.data
		console.log(Player1_Select.selectedOptionValue)
		return [
			players.find((pl) => { return pl.playerID == Player1_Select.selectedOptionValue }).teamName,
			players.find((pl) => { return pl.playerID == Player_2Select.selectedOptionValue }).teamName,
		]
	}
}