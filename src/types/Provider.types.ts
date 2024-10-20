import { Dispatch, SetStateAction } from "react"
import { CharacterType, EpisodeType } from "./Hooks.types"

export type DataContextType = {
	selectedEpisode: EpisodeType | null
	handleEpisodeToggle: (episode: EpisodeType) => void
	episodes: EpisodeType[]
	loading: boolean
	totalPages: number
	setCurrentEpisodePage: Dispatch<SetStateAction<number>>
	currentEpisodePage: number
	characters: CharacterType[]
	charactersError: boolean
	charactersLoading: boolean
	setCurrentCharacterPage: Dispatch<SetStateAction<number>>
	currentCharacterPage: number
	totalPagesCharacters: number
}
