import {NavLink, Route, Routes} from "react-router-dom";
import {FC, Suspense} from "react";
import './styles/index.scss'

import {MainPageAsync} from "./pages/MainPage/MainPage.async.tsx";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async.tsx";

import {useTheme} from "./theme/useTheme.ts";
import {classNames} from "./helpers/classNames/classNames.ts";



const App: FC = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Сменить тему</button>
            <NavLink to={'/'}>Главная</NavLink>
            <NavLink to={'/about'}>Про нас</NavLink>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App
