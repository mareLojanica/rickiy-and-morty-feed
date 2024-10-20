import { FC, useContext } from "react"
import { DataContext } from "../../providers/DataProvider"
import ReactPaginate from "react-paginate"
import Spinner from "../Spinner/Spinner"
import { CharacterType } from "../../types/Hooks.types"

const MainContent: FC = (): JSX.Element => {
	const {
		setCurrentCharacterPage,
		currentCharacterPage,
		characters,
		charactersLoading,

		totalPagesCharacters,
	} = useContext(DataContext)
	const handlePageClick = (event: { selected: number }) => {
		setCurrentCharacterPage(event.selected)
	}
	console.log(totalPagesCharacters)
	return (
		<main className="flex flex-col items-center w-full">
			<div className="grid grid-cols-4 gap-4 p-4 w-full max-w-4xl bg-gray-100 rounded-lg">
				{charactersLoading && <Spinner />}
				{characters.map((item: CharacterType) => (
					<div
						key={item.id}
						className="relative w-full h-40 bg-white rounded-md shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-between p-4"
					>
						<img
							src={item.image}
							alt={item.name}
							className="w-16 h-16 rounded-full object-cover mb-2"
						/>
						<span className="text-lg font-semibold text-gray-700 text-center">
							{item.name}
						</span>
					</div>
				))}
			</div>
			<div className="mt-8">
				{totalPagesCharacters ? (
					<ReactPaginate
						breakLabel="..."
						nextLabel="next >"
						pageCount={42}
						onPageChange={(selected: { selected: number }) => {
							handlePageClick(selected)
						}}
						forcePage={currentCharacterPage}
						marginPagesDisplayed={2}
						pageRangeDisplayed={5}
						previousLabel="< previous"
						containerClassName="flex justify-center items-center space-x-2"
						pageClassName="px-3 py-2 bg-white border rounded-md hover:bg-blue-100"
						previousClassName="px-4 py-2 bg-white border rounded-md hover:bg-blue-100"
						nextClassName="px-4 py-2 bg-white border rounded-md hover:bg-blue-100"
						activeClassName="!bg-blue-500 !text-white"
						breakClassName="px-3 py-2"
					/>
				) : (
					<></>
				)}
			</div>
		</main>
	)
}

export default MainContent
