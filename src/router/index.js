import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import CreateTournament from "../views/CreateTournament.vue";

import NameTournamentForm from "../components/NameTournamentForm.vue";
import AddPlayersForm from "../components/AddPlayersForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/create",
    name: "create",
    component: CreateTournament,
    children: [
      {
        name: "name_tournament",
        path: "name_tournament",
        component: NameTournamentForm,
      },
      {
        name: "add_players",
        path: "add_players",
        component: AddPlayersForm,
      },
    ],
  },
  {
    path: "/leaderboard",
    name: "Leaderboard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Leaderboard.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
