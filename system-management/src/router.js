import Home from './components/Home';

// 原始菜单
import Orign from './system/Orign';
import Show from './system/Show';
import Add from './system/Add';
import Detail from './system/Detail';

// iview
import Iview from './iview/Iview';
import Form from './iview/Form';
import TablePageFilterModal from './iview/TablePageFilterModal';
import Step from './iview/Step';

// elementUI
import EUI from './elementUI/ElementUI';
import Table from './elementUI/Table';

import Lizi from './lizi/Lizi';

export  default [
        {path:'/',component:Home},
     
        // 原始菜单
        {path:'/orign',component:Orign,redirect:'/orign/show',children:[
            {path:'/orign/show',component:Show},
            {path:'/orign/add',component:Add},
            {path:'/orign/detail/:id',component:Detail}
        ]},

        // iview
        {path:'/iview',component:Iview,redirect:'/iview/TablePageFilterModal',children:[
            {path:'/iview/tablePageFilterModal',component:TablePageFilterModal},
            {path:'/iview/form',component:Form},
            {path:'/iview/step',component:Step},
        ]},

        // ElementUI
        {path:'/elementUI',component:EUI,redirect:'/elementUI/table',children:[
            {path:'/elementUI/table',component:Table}
        ]},

        {path:'/lizi',component:Lizi}
    ]
