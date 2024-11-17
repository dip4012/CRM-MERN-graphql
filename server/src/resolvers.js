const Contacts = [
	{
		id: 1,
		firstName: "Dibyendu",
		lastName: "Saha",
	},
	{
		id: 2,
		firstName: "Kakali",
		lastName: "Saha",
	},
	{
		id: 3,
		firstName: "Dilip",
		lastName: "Saha",
	},
]

const resolvers = {
	Query: {
		contacts: () => Contacts,
	},
}

module.exports = { resolvers }
