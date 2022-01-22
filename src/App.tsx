import Title from './components/Title'
import './App.css'

// 自分で作成したタグの最初の文字は大文字で始めること。＝ReactコンポーネントであることをReactに伝える。
function App() {
  return (
    <div className="test">
      <h1>Hello!</h1>
      <Title />
    </div>
  )
}

export default App
