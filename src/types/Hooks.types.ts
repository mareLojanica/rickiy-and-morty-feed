export type CharacterType = {
	id: number
	name: string
	image: string
}
export type UseFetchCharactersReturnType = {
	data: CharacterType[]
	loading: boolean
	error: boolean
	totalPages: number
}

export type EpisodeType = {
	id: number
	name: string
	characterIds: string
}
export type UseFetchEpisodesReturnType = {
	data: EpisodeType[]
	loading: boolean
	error: boolean
	totalPages: number
}
