import axiosInstance from "./axiosInstance"
import {
	Character,
	CharacterResponseType,
	EpisodeResponseType,
} from "../types/Api.types"

export const api = {
	episodes: async (currentPage: number): Promise<EpisodeResponseType> => {
		const { data: episodes } = await axiosInstance.get(
			`episode?page=${currentPage}`
		)

		return episodes
	},
	characters: async (
		listOfIds: string | null,
		page: number | null
	): Promise<CharacterResponseType | Character[]> => {
		const params = new URLSearchParams()

		if (page) {
			params.append("page", page.toString())
		}

		const url = listOfIds
			? `character/${listOfIds}${
					params.toString() ? `?${params.toString()}` : ""
			  }`
			: `character?${params.toString()}`

		const { data: characters } = await axiosInstance.get(url)

		return characters
	},
}
