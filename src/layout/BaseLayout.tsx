import { FC } from "react"
import MainContent from "../components/MainContent/MainContent"
import Sidebar from "../components/Sidebar/Sidebar"
import DataProvider from "../providers/DataProvider"

const BaseLayout: FC = (): JSX.Element => {
	return (
		<DataProvider>
			<div className="flex ">
				<Sidebar />
				<MainContent />
			</div>
		</DataProvider>
	)
}

export default BaseLayout
