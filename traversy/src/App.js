import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import PostForm from './components/Postform';

const store = createStore(() => [], {}, applyMiddleware());
function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                </header>
                <PostForm></PostForm>
                <Post />
            </div>
        </Provider>
    );
}

export default App;
