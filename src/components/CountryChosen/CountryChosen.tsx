import React from "react"
import { useGetCountryByNameQuery } from "../../store/counter/counterApi"
import { Params, useNavigate, useParams } from "react-router-dom"
import { Button } from "@mui/material"

const CountryChosen = () => {
	const { name } = useParams()
	const navigate = useNavigate()
	// @ts-ignore
	const { data, error, isLoading } = useGetCountryByNameQuery(name)
	if (isLoading) {
		return <div>Загрузка</div>
	}

	if (error) {
		return <div>Произошла ошибка</div>
	}
	const handleClickBackToCountries = () => {
		navigate("/")
	}
	return (
		<div>
			<Button onClick={handleClickBackToCountries} variant="contained">
				Вернуться назад к списку стран
			</Button>

			<h1>Страна:{data[0].name.common}</h1>
			<h3>Столица:{data[0].capital[0]}</h3>
			<h4>Населения:{data[0].population}</h4>
		</div>
	)
}

export default CountryChosen
