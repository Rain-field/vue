import Home from './components/Home';
import About from './components/About';
import Add from './components/Add';
import Detail from './components/Detail';

export  default [
        {path:'/',component:Home},
        {path:'/about',component:About},
        {path:'/add',component:Add},
        {path:'/detail/:id',component:Detail}
    ]
