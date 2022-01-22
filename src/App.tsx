import { useState } from 'react' // state = データの保管場所
import Title from './components/Title'
import Form from './components/Form'
import Results from './components/Results'
import './App.css'

type ResultsStateType = {
  country: string
  cityName: string
  temperature: string
  conditionText: string
  icon: string
}

// 自分で作成したタグの最初の文字は大文字で始めること。＝ReactコンポーネントであることをReactに伝える。
function App() {
  const [city, setCity] = useState<string>('') // city = state,ユーザーが入力した都市名はここに保管される。 setCity:stateにデータを書き込んだり操作したりする仕組み。
  const [results, setResults] = useState<ResultsStateType>({
    country: '',
    cityName: '',
    temperature: '',
    conditionText: '',
    icon: '',
  })
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=730baec80e6c45fd91b85720212612&q=${city}&aqi=no`,
    ) // 都市名のデータをAPIに渡している。受け取りはthenを使う。
      .then((res) => res.json()) // このresの中にAPIから送り返された気象データが入っている。
      .then((data) => {
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon,
        })
      }) // これで、受け取った気象データが[results state]に保管されることになる。
  }
  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form setCity={setCity} getWeather={getWeather} />
        <Results results={results} />
      </div>
    </div>
  )
}
export default App
