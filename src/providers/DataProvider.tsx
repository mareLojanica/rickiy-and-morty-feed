import { createContext, FC, PropsWithChildren, useState } from "react"
import useFetchEpisodes from "../hooks/useFetchEpisodes"
import useFetchCharacters from "../hooks/useFetchCharacters"
import { DataContextType } from "../types/Provider.types"
import { EpisodeType } from "../types/Hooks.types"

export const DataContext = createContext<DataContextType>({} as DataContextType)

const DataProvider: FC<PropsWithChildren> = ({ children }) => {
	const [selectedEpisode, setSelectedEpisode] = useState<null | EpisodeType>(
		null
	)
	const [currentEpisodePage, setCurrentEpisodePage] = useState<number>(1)
	const [currentCharacterPage, setCurrentCharacterPage] = useState(0)
	const {
		data: episodes,
		loading,
		totalPages,
	} = useFetchEpisodes(currentEpisodePage)

	const {
		data: characters,
		loading: charactersLoading,
		error: charactersError,
		totalPages: totalPagesCharacters,
	} = useFetchCharacters(
		selectedEpisode?.characterIds ?? "",
		Number(currentCharacterPage) + 1
	)
	const handleEpisodeToggle = (episode: EpisodeType) => {
		if (episode.id === selectedEpisode?.id) {
			setSelectedEpisode(null)
		} else {
			setSelectedEpisode(episode)
		}
	}
	return (
		<DataContext.Provider
			value={{
				selectedEpisode,
				handleEpisodeToggle,
				episodes,
				loading,
				totalPages,
				setCurrentEpisodePage,
				currentEpisodePage,
				characters,
				charactersError,
				charactersLoading,
				setCurrentCharacterPage,
				currentCharacterPage,
				totalPagesCharacters,
			}}
		>
			{children}
		</DataContext.Provider>
	)
}

export default DataProvider
