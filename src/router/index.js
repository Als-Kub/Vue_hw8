import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage";
import ProjectComp from "@/pages/ProjectComp";
import ProjectDetails from "@/pages/ProjectDetails";
import BlogPage from "@/pages/BlogPage";
import BlogDetailsPage from "@/pages/BlogDetailsPage";
import NotFound from "@/pages/NotFound";

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainPage,
  },
  {
    path: "/project",
    name: "Project",
    component: ProjectComp,
  },
  {
    path: "/blog",
    name: "Blog",
    component: BlogPage,
  },
  {
    path: "/project-details",
    name: "projectDetails",
    component: ProjectDetails,
  },
  {
    path: "/blog-details",
    name: "blogDetails",
    component: BlogDetailsPage,
  },

  {
    path: "/:CatchAll(.*)",
    name: "404",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
