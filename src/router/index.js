import { createRouter , createWebHistory } from "vue-router";
import CoursesView from "@/views/CoursesView.vue";
import CourseView from "@/views/CourseView.vue";

const router = createRouter({
    history : createWebHistory(),
    routes : [
        { 
            path : "/",
            name : "courses",
            component : CoursesView
        },
        { 
            path : "/course/:id",
            name : "course",
            component : CourseView
        }
    ]
})
export default router;