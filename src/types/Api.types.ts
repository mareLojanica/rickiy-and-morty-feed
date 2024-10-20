export type EpisodeResponseType = {
	info: ResponseInfo
	results: Episode[]
}

export type Episode = {
	id: number
	name: string
	air_date: string
	episode: string
	characters: string[]
	url: string
	created: string
}

export type ResponseInfo = {
	count: number
	pages: number
	next: string | null
	prev: string | null
}
export type CharacterResponseType = {
	info: ResponseInfo
	results: Character[]
}

export type Character = {
	id: number
	name: string
	status: string
	species: string
	type: string
	gender: string
	origin: LocationInfo
	location: LocationInfo
	image: string
	episode: string[]
	url: string
	created: string
}

export type LocationInfo = {
	name: string
	url: string
}
