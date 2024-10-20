import { useEffect, useState } from "react"
import { api } from "../api"
import {
	CharacterType,
	UseFetchCharactersReturnType,
} from "../types/Hooks.types"
import { Character } from "../types/Api.types"

const useFetchCharacters = (
	listOfIds: string,
	page: number
): UseFetchCharactersReturnType => {
	const [data, setData] = useState<CharacterType[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const [totalPages, setTotalPages] = useState(0)

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true)
				const response = await api.characters(listOfIds, page)
				if (Array.isArray(response)) {
					setData(response)
					setTotalPages(0)
				} else {
					setTotalPages(response.info.pages)
					const characters = response.results.map(
						(character: Character) => ({
							id: character.id,
							name: character.name,
							image: character.image,
						})
					)
					setData(characters)
				}
			} catch (error) {
				setError(true)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [listOfIds, page])

	return { data, loading, error, totalPages }
}

export default useFetchCharacters
