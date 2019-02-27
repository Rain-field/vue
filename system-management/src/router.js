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
        {path:'/',name:'Home',component:Home},
     
        // 原始菜单
        {path:'/orign',name:'Orign',component:Orign,redirect:'/orign/show',children:[
            {path:'/orign/show',name:'Show',component:Show},
            {path:'/orign/add',name:'Add',component:Add},
            {path:'/orign/detail/:id',name:'Detail',component:Detail}
        ]},

        // ElementUI
        {path:'/elementUI',name:'EUI',component:EUI,redirect:'/elementUI/table',children:[
            {path:'/elementUI/table',name:'Table',component:Table}
        ]},

        // iview
        {path:'/iview',name:'Iview',component:Iview,redirect:'/iview/TablePageFilterModal',children:[
            {path:'/iview/tablePageFilterModal',name:'TablePageFilterModal',component:TablePageFilterModal},
            {path:'/iview/form',name:'Form',component:Form},
            {path:'/iview/step',name:'Step',component:Step},
        ]},

        {path:'/lizi',name:'Lizi',component:Lizi}
    ]
