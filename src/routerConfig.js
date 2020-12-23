import GeneralSituation from "@/components/study/GeneralSituation";
import CourseSelect from "@/components/study/CourseSelect";

const routerCOnfig =  {
    routes: [
        {path: '/study/situation', COMPONENT: GeneralSituation},
        {path: '/study/course/select', COMPONENT: CourseSelect}
    ],
};

export default routerCOnfig;