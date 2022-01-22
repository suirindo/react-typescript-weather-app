type FormPropsType = {
  city: string
  setCity: React.Dispatch<React.SetStateAction<string>>
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void
}

const Form: React.FC<FormPropsType> = ({ city, setCity, getWeather }) => {
  return (
    // onChange = ハンドラー。inputに入力されたデータをsetCityに渡す。
    <form onSubmit={getWeather}>
      <input
        type="text"
        name="city"
        placeholder="都市名"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <button type="submit"> Get Weather</button>
    </form>
  )
}

export default Form

// onChange={ e => setCity(e.target.value)}
// e = event parameter, e には,<input/>に関係するさまざまな情報が格納されていて、ユーザーが入力した都市名の情報も入っている。
// これの取得のため、まずeの中のtargetにアクセスし、さらにその中のvalueへとアクセスする必要がある。

// APIコール = Form.tsxからAPIに都市名を渡す仕組み。 fetch()を利用する。
