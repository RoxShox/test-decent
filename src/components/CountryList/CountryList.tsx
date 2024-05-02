import { useGetAllCountriesQuery } from "../../store/counter/counterApi"
import { useNavigate } from "react-router-dom"

import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import { ListItemButton } from "@mui/material"

export default function GutterlessList() {
	const { data, error, isLoading } = useGetAllCountriesQuery("")
	const navigate = useNavigate()
	const countries = data?.slice(0, 20)
	if (isLoading) {
		return <h1>Загрузка</h1>
	}
	if (error) {
		return <h1>Что-то пошло не так ERRR</h1>
	}
	const handleClickCountry = (country: string) => {
		navigate(country)
	}
	return (
		<List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
			{countries.map((country: any) => (
				<ListItemButton>
					<ListItem
						onClick={() => handleClickCountry(country.name.common)}
						key={country.name.common}
						disableGutters
					>
						<ListItemText primary={country.name.common} />
					</ListItem>
				</ListItemButton>
			))}
		</List>
	)
}
