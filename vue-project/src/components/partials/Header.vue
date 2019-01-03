<template>

<div>
<div>

    
    <v-navigation-drawer
    enable-resize-watcher
      fixed
      :clipped="clipped"
      v-model="drawer"
      app
      id='drawer--z'
      dark
      class='elevation-10'

    >
      <v-list dense>
        <v-img v-if='admin.isAdmin' :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
          <v-layout pa-2 column fill-height class="lightbox white--text">
            <v-spacer></v-spacer>
            <v-flex shrink>
              <div class="subheading"><p class='admin--font'>HELLO ADMIN</p></div>
              <div class="body-1"><p class='admin--font'>You have <strong class='new--order'>{{newOrder}}</strong> new order to check</p></div>
            </v-flex>
          </v-layout>
        </v-img>
        <div v-if='!admin.isAdmin'>
          <br>
          <div class='text-center'>
<img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMC4xNzQgNDAwLjE3NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDAwLjE3NCA0MDAuMTc0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM0NUI1NDk7IiBkPSJNMjAxLjM4LDg4LjQyMmMxMTMuMTItMTIuNDQsMTQ5Ljg4LTg0LDE1MC04NGMxLjg1Ni0zLjU2Nyw2LjI1Mi00Ljk1Myw5LjgxOS0zLjA5NyAgYzEuNzk5LDAuOTM2LDMuMTI2LDIuNTgxLDMuNjYxLDQuNTM3YzM3LjYsMTI3LjUyLDE3LjA4LDIxNS40NC0yNi4wOCwyNjcuNmMtMTYuNzA5LDIwLjMzMS0zOC4xMSwzNi4yOTYtNjIuMzYsNDYuNTIgIGMtMjIuMzM5LDkuNDc0LTQ2LjU4NywxMy41ODQtNzAuOCwxMmMtNDYuMzYtMy4yNC04OC42OC0yOC0xMDguMzItNzIuMzZjLTUuMDMyLTExLjM0LTguMjg0LTIzLjM4OC05LjY0LTM1LjcyICBjLTIuNzQzLTI0LjcxNywyLjA4My00OS42ODUsMTMuODQtNzEuNmMxMi42MjItMjMuMzg1LDMyLjcxOS00MS44NjMsNTcuMDgtNTIuNDhDMTcyLjE3Myw5My44MzMsMTg2LjYxMSw4OS45ODgsMjAxLjM4LDg4LjQyMiAgTDIwMS4zOCw4OC40MjJ6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMwMDk1NDk7IiBkPSJNMzUwLjU4LDcuMTAyYzAuMDk5LTQuMDE5LDMuNDM3LTcuMTk4LDcuNDU2LTcuMDk5YzQuMDE5LDAuMDk5LDcuMTk4LDMuNDM3LDcuMDk5LDcuNDU2ICBjLTAuMDA3LDAuMjk2LTAuMDMzLDAuNTktMC4wNzYsMC44ODNjMCwwLjM2LTYuMzYsODQtODgsMTY4LjY0bC0wLjc2LDAuOGMtMTkuMTgsMTkuNjczLTQwLjIyNiwzNy40MzYtNjIuODQsNTMuMDRsNDkuMDQsOS4xMiAgYzMuOTA5LDAuOTQzLDYuMzEzLDQuODc2LDUuMzcsOC43ODRjLTAuODU0LDMuNTM4LTQuMTg5LDUuOTAyLTcuODEsNS41MzZsLTY0LTEyYy01OC4zNiwzNi45Ni0xNTcuMjgsNzEuMDgtMTY1LjkyLDE1MS42ICBjLTAuNTM1LDMuOTg1LTQuMTk5LDYuNzgyLTguMTg0LDYuMjQ3Yy0zLjc5My0wLjUwOS02LjU0NC0zLjg2OC02LjI5Ni03LjY4N2MxMC4zMi05Ni41MiwxMDguNC0xMjEuMzYsMTc0LjU2LTE2My41NmwwLjkyLTAuNiAgYzI2LjQwMy0xNi43MSw1MC44NjEtMzYuMzExLDcyLjkyLTU4LjQ0bC01LjgtNTcuNGMtMC41MzUtMy45ODUsMi4yNjItNy42NDksNi4yNDctOC4xODRzNy42NDksMi4yNjIsOC4xODQsNi4yNDcgIGMwLjAyMiwwLjE2NSwwLjAzOSwwLjMzMSwwLjA0OSwwLjQ5N2w0LjQsNDQuNTZDMzQ1LjE4LDc5LjE0MiwzNTAuNTQsNy40MjIsMzUwLjU4LDcuMTAyTDM1MC41OCw3LjEwMnoiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />          </div>
          
        </div>
        <v-list-tile to='/'>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
           <strong>HOME</strong>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to='/posts'>
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <strong>SHOP</strong>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to='/shop'>
          <v-list-tile-action>
            <v-icon> shopping_basket</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <div v-if='cart.length === 0'>
             <strong>YOUR ORDER ({{cart.length}})</strong>
             </div>
          <div
          v-if='cart.length > 0' flat
          >
          <v-badge
            color="cyan"
            right
          >
          <strong>ORDER</strong>
            <span slot="badge"> {{cart.length}}</span>
          </v-badge>
          </div>
          </v-list-tile-content>
          <div class='check--order'> 
            {{checkOrder}}
            </div>
        </v-list-tile>
        <v-list-tile to='/checkorder'>
          <v-list-tile-action>
            <v-icon>shopping_basket</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <strong>CHECK STATUS</strong>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if='!admin.isAdmin' to='/admin'>
          <v-list-tile-action>
            <v-icon>shopping_basket</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
           <strong>LOGIN</strong>
          </v-list-tile-content>
        </v-list-tile>
        <div v-if='admin.isAdmin == false'>
        <v-list-tile v-if='!vampire'> 
          <v-list-tile-action>
            <v-switch
                @click='vampireStateTrue()'
                label="IM VAMPIRE"
                :value='vampire'
                hide-details
              ></v-switch>
              
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile v-if='vampire'>
          <v-list-tile-action>
            <v-switch
                @click='vampireStateFalse()'
                label="IM NOT VAMPIRE"
                :value='vampire'
                hide-details
              ></v-switch>
              
          </v-list-tile-action>
        </v-list-tile>
        </div>
        <p class='text-center' v-if='admin.isAdmin'>sorry admin :( vampire style doesnt work well right now</p>
        <div v-if='admin.isAdmin'>
        <h3>Admin dashboard</h3>
        </div>
        <v-list-tile v-if='admin.isAdmin' to='/dashboard'>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <div flat>
          <v-badge
            color="cyan"
            right
          >
          <strong>USER ORDERS</strong>
            <span slot="badge"> {{newOrder}}</span>
          </v-badge>
          </div>
        
        </v-list-tile>
        <v-list-tile v-if='admin.isAdmin' to='/charts'>
          <v-list-tile-action>
            <v-icon>bar_chart</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <strong>CHARTS</strong>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if='admin.isAdmin' to='/new'>
          <v-list-tile-action>
            <v-icon>create_new_folder</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <strong>NEW ITEM</strong>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if='admin.isAdmin' to='/adminpost'>
          <v-list-tile-action>
            <v-icon>view_list</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <strong>PRODUCT LIST</strong>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if='admin.isAdmin' @click='logout'>
          <v-list-tile-action>
            <v-icon>offline_bolt</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <strong>LOGOUT</strong>
            
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    
    <v-toolbar color="blue-grey lighten-1" 
    :clipped-left="clipped"
    dark fixed app id='toolbar-zIndex'>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
       <v-spacer></v-spacer>
       <v-menu class="hidden-md-and-up" :nudge-width="100">
        
  
        </v-menu>
    </v-toolbar>
</div>

</div>
</template>



<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      drawer: false,
      adminPassword: "",
      adminUser: "",
      clipped: false
    };
  },
  computed: {
    ...mapGetters(["cart", "admin", "newOrder", 'vampire']),
    checkOrder() {
      if (this.cart.length > 0) {
        return (this.drawer = true);
      }
    }
  },
  methods: {
    ...mapActions(["newOrders", 'vampireStateFalse', 'vampireStateTrue']),
    logout() {
      (this.admin.password = ""),
        (this.admin.user = ""),
        (this.admin.isAdmin = false);
      this.$router.push({ name: "Posts" });
    }
  }
};
</script>
<style scoped>
#toolbar-zIndex {
  z-index: 1000;
}
#drawer--z {
  z-index: 10001;
}
a {
  color: white;
}
a:hover {
  color: black;
  transition-duration: 0.3s;
}
.nav > li > a:hover {
  background-color: white;
  transition-duration: 0.4s;
}
.router-anim-enter-active {
  animation: coming 1s;
  animation-delay: 0.5s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going 1s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.lightbox {
  box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 72px
  );
}
.admin--font {
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
.new--order {
  color: palevioletred;
}
.check--order {
  visibility: hidden;
}
@media only screen and (max-width: 800px) {
  #drawer--z {
    max-width: 60%;
  }
}
</style>
