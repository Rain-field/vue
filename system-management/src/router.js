import Home from './components/Home';
import About from './components/About';
import Add from './components/Add';
import Step from './components/Step';
import Detail from './components/Detail';
import App2 from './components/test/App2';


import Home2 from './components/test/Home2';
import Add2 from './components/test/Add2';

export  default [
        {path:'/',component:Home},
        {path:'/about',component:About},
        {path:'/add',component:Add},
        {path:'/step',component:Step},
        {path:'/detail/:id',component:Detail},
        {path:'/test/app',component:App2,redirect:'/test/home',children:[
            {path:'/test/home',component:Home2},
            {path:'/test/add',component:Add2}
        ]},
    ]
