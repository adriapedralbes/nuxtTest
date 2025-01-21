import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: process.client ? localStorage.getItem("auth_token") : null,
    role: process.client ? localStorage.getItem("role") : null,
    user: process.client ? JSON.parse(localStorage.getItem("user")) : null,
  }),

  actions: {
    login(token, role, user) {
      if (process.client) {
        this.token = token;
        this.role = role;
        this.user = user;

        // Almacena los datos en localStorage
        localStorage.setItem("auth_token", token);
        localStorage.setItem("role", role);
        localStorage.setItem("user", JSON.stringify(user));
      }
    },

    logout() {
      if (process.client) {
        this.token = null;
        this.role = null;
        this.user = null;

        // Limpia localStorage
        localStorage.removeItem("auth_token");
        localStorage.removeItem("role");
        localStorage.removeItem("user");
      }
    },
  },
});
