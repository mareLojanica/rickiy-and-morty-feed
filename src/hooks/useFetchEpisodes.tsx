import { useEffect, useState } from "react"
import { api } from "../api"
import { Episode } from "../types/Api.types"
import { EpisodeType, UseFetchEpisodesReturnType } from "../types/Hooks.types"

const useFetchEpisodes = (currentPage: number): UseFetchEpisodesReturnType => {
	const [data, setData] = useState<EpisodeType[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const [totalPages, setTotalPages] = useState(0)
	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true)
				const response = await api.episodes(currentPage)
				const episodes = response.results.map((episode: Episode) => {
					const characterIds = episode.characters
						.map((item: string) =>
							Number(
								item.split(
									"https://rickandmortyapi.com/api/character/"
								)[1]
							)
						)
						.join(",")
					return { name: episode.name, characterIds, id: episode.id }
				})
				setData([...data, ...episodes])
				setTotalPages(response.info.pages)
			} catch (error) {
				setError(true)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [currentPage])
	return { data, loading, error, totalPages }
}

export default useFetchEpisodes
