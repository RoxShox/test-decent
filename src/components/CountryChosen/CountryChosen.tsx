import React from "react"
import { useGetCountryByNameQuery } from "../../store/counter/counterApi"
import { Params, useNavigate, useParams } from "react-router-dom"

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
			<button
				className="country__back-btn"
				onClick={handleClickBackToCountries}
			>
				Вернуться назад к списку стран
			</button>
			<h1>Страна:{data[0].name.common}</h1>
			<h3>Столица:{data[0].capital[0]}</h3>
			<h4>Населения:{data[0].population}</h4>
		</div>
	)
}

export default CountryChosen
