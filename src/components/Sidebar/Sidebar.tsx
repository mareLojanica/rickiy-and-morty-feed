import { FC, useContext } from "react"
import Spinner from "../Spinner/Spinner"
import { DataContext } from "../../providers/DataProvider"
import InfiniteScroll from "react-infinite-scroll-component"
import { EpisodeType } from "../../types/Hooks.types"

const Sidebar: FC = (): JSX.Element => {
	const {
		selectedEpisode,
		handleEpisodeToggle,
		totalPages,
		currentEpisodePage,
		setCurrentEpisodePage,
		loading,
		episodes,
	} = useContext(DataContext)

	const fetchData = () => {
		if (currentEpisodePage < totalPages) {
			setCurrentEpisodePage((prevPage: number) => prevPage + 1)
		}
	}

	return (
		<aside
			className="w-64 bg-gray-200 p-4 rounded-md mr-4 overflow-auto h-[60vh]"
			id="scrollableAside"
		>
			<h2 className="font-bold text-lg mb-4">Episodes</h2>

			{loading ? (
				<Spinner />
			) : episodes.length ? (
				<InfiniteScroll
					dataLength={episodes.length}
					scrollableTarget="scrollableAside"
					next={fetchData}
					hasMore={currentEpisodePage < totalPages}
					loader={<p>Loading</p>}
				>
					<ul className="space-y-2">
						{episodes.map((item: EpisodeType) => (
							<li
								key={item.id}
								className={`cursor-pointer p-2 rounded-md list-none text-white ${
									selectedEpisode?.id === item.id
										? "bg-blue-500 text-white"
										: "bg-gray-800"
								}`}
								onClick={() => handleEpisodeToggle(item)}
							>
								{item.name}
							</li>
						))}
					</ul>
				</InfiniteScroll>
			) : (
				<p> No episodes available</p>
			)}
		</aside>
	)
}

export default Sidebar
