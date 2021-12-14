<template>
  <v-app>
    <v-card class="overflow-hidden" style="height: 100%">
      <v-app-bar fixed color="#00000000" flat style="min-width: 200px">
        <v-toolbar-title
          style="color: black; font-size: 36px; font-weight: bold"
          v-scroll-to="'#topPage'"
          to
          >PORTFOLIO</v-toolbar-title
        >
        <v-spacer></v-spacer>
        <v-btn icon large @click="openTab('github')">
          <v-icon style="color: black"> mdi-github </v-icon>
        </v-btn>
        <v-btn icon large @click="openTab('twitter')">
          <v-icon style="color: black"> mdi-twitter </v-icon>
        </v-btn>
      </v-app-bar>
      <v-sheet style="margin-top: 64px" id="scrolling">
        <v-main>
          <transition name="fade">
            <router-view v-show="show"></router-view>
          </transition>
          <footer style="position: relative; margin-bottom: 0" id="content1">
            © 2021 Honda Daiki
          </footer>
        </v-main>
      </v-sheet>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    show: true,
    collapseOnScroll: true,
    navi: false,
  }),
  created() {},
  methods: {
    openTab(val) {
      switch (val) {
        case "github":
          window.open("https://github.com/wataruhigasi");
          return;
        case "twitter":
          window.open("https://twitter.com/ayu97985116");
          return;
      }
    },
  },
};
</script>