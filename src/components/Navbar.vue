<template>
  <nav>
    <v-app-bar color="green" dark app>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Bud</span>
        <span>cs</span>
        <span class="font-weight-regular red--text"> - Versão demonstração - dados fictícios</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <v-icon left>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list flat>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
            active-class="border"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn text>
        <span>Exit</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>

  </nav>
</template>
<script>
export default {
  data: () => ({
    links: [
      { icon: "dashboard", text: "Dashboard", route: "/" },
      { icon: "folder", text: "Comparativo", route: "/" },
      { icon: "person", text: "Sobre Nos", route: "/" },
    ],
  })
};
</script>
<style scoped>
.border {
  border-left: 4px solid #0ba518;
}
</style>
