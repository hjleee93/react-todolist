import { createGlobalStyle} from 'styled-components'
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

//styled-components
const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
  `;
function App() {
  return (
    <>
    <GlobalStyle/>
    <div>
    <TodoTemplate>
      <TodoHead/>
      <TodoList/>
    </TodoTemplate>
    </div>
    </>
  );
}

export default App;
