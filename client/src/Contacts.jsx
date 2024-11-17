import React from "react"
import { useQuery, gql } from "@apollo/client"

export const contactsListQuery = gql`
	query ContactsQuery {
		contacts {
			id
			firstName
			lastName
		}
	}
`

const Contacts = () => {
	const { loading, error, contacts } = useQuery(contactsListQuery)

	if (loading) return <p>Loading...</p>

	if (error) return <p>{error.message}</p>

	return (
		<ul>
			{contacts.map((contact) => (
				<li key={contact.id}>
					{contact.firstName} {contact.lastName}
				</li>
			))}
		</ul>
	)
}

export default Contacts
