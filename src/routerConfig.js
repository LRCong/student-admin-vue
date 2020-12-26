import GeneralSituation from "./components/study/GeneralSituation";
import CourseSelect from "./components/study/CourseSelect";
import UserEdit from "@/components/user/UserEdit";
import Fee from "./components/user/Fee"
import VueRouter from "vue-router";

const routerConfig =  {
    routes: [
        {path: '/user/fee', component: Fee},
        {path: '/user/:id', component: UserEdit},
        {path: '/study/situation', component: GeneralSituation},
        {path: '/study/course/select', component: CourseSelect},
        {path: '/*', redirect: '/study/situation'},
    ],
};

export default new VueRouter(routerConfig);