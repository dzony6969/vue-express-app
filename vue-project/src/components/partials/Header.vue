<template>
<div>
<div>
    
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
       <v-spacer></v-spacer>
       <v-menu class="hidden-md-and-up" :nudge-width="100">
          <v-toolbar-title slot="activator">
            <span>All</span>
            <v-icon dark>arrow_drop_down</v-icon>
          </v-toolbar-title>
        
  
          <v-list>
          <v-list-tile>  
        <v-btn to='/' flat>Home</v-btn>
        <v-btn to='/posts' flat>Shop</v-btn>
        <v-btn to='/new' flat>New item</v-btn>
        <v-btn v-if='cart.length === 0' to='/shop' flat><v-icon> shopping_basket</v-icon>  {{cart.length}}</v-btn>
         <v-btn 
          color='red'
          v-if='cart.length > 0' to='/shop' flat><v-badge
            color="cyan"
            left
          >
            <span slot="badge">{{cart.length}}</span>
            <v-icon
              large
              color="grey lighten-1"
            >shopping_cart</v-icon>
          </v-badge></v-btn>
            </v-list-tile>
          </v-list>
        </v-menu>
  
        <v-btn icon>
        </v-btn>
        <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to='/' flat>Home</v-btn>
        <v-btn to='/posts' flat>Shop</v-btn>
        <v-btn to='/new' flat>New item</v-btn>
         <v-btn v-if='cart.length === 0' to='/shop' flat><v-icon> shopping_basket</v-icon>  {{cart.length}}</v-btn>
         <v-btn 
          color='red'
          v-if='cart.length > 0' to='/shop' flat><v-badge
            color="cyan"
            left
          >
            <span slot="badge">{{cart.length}}</span>
            <v-icon
              large
              color="grey lighten-1"
            >shopping_cart</v-icon>
          </v-badge></v-btn>
       
      </v-toolbar-items>
    </v-toolbar>
</div>
</div>

<!-- <div> -->
 <!-- <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    <v-card
      color="indigo lighten-1"
      flat
      height=""
    >
      <v-toolbar 
      scroll-toolbar-off-screen
      height='50'
      fixed color="indigo lighten-1" dark>
  
        <v-menu class="hidden-md-and-up" :nudge-width="100">
          <v-toolbar-title slot="activator">
            <span>All</span>
            <v-icon dark>arrow_drop_down</v-icon>
          </v-toolbar-title>
  
          <v-list>
            <v-list-tile>  
        <v-btn to='/' flat>Home</v-btn>
        <v-btn to='/posts' flat>Shop</v-btn>
        <v-btn to='/new' flat>New item</v-btn>
        <v-btn v-if='cart.length === 0' to='/shop' flat><v-icon> shopping_basket</v-icon>  {{cart.length}}</v-btn>
         <v-btn 
          color='red'
          v-if='cart.length > 0' to='/shop' flat><v-badge
            color="cyan"
            left
          >
            <span slot="badge">{{cart.length}}</span>
            <v-icon
              large
              color="grey lighten-1"
            >shopping_cart</v-icon>
          </v-badge></v-btn>
        <v-btn to='/register' flat>Register</v-btn>
            </v-list-tile>
          </v-list>
        </v-menu>
  
        <v-spacer></v-spacer>
  
        <v-btn icon>
        </v-btn>
        <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to='/' flat>Home</v-btn>
        <v-btn to='/posts' flat>Shop</v-btn>
        <v-btn to='/new' flat>New item</v-btn>
         <v-btn v-if='cart.length === 0' to='/shop' flat><v-icon> shopping_basket</v-icon>  {{cart.length}}</v-btn>
         <v-btn 
          color='red'
          v-if='cart.length > 0' to='/shop' flat><v-badge
            color="cyan"
            left
          >
            <span slot="badge">{{cart.length}}</span>
            <v-icon
              large
              color="grey lighten-1"
            >shopping_cart</v-icon>
          </v-badge></v-btn>
        <v-btn to='/register' flat>Register</v-btn>
       
      </v-toolbar-items>
      </v-toolbar>
    </v-card>
    </div> -->
</template>



<script>
import { mapGetters } from 'vuex'
   export default {
     data() {
       return {
         drawer: false,
       }
     },
     computed: {
       ...mapGetters([
         'cart'
       ])
     }
}
    
</script>
<style scoped>
    a{
        color: white;

    }
    a:hover {
        color: black;
        transition-duration: 0.3s;
    }
    .nav>li>a:hover {
        background-color: white;
        transition-duration: 0.4s;
    }
    .router-anim-enter-active {
  animation: coming 1s;
  animation-delay: .5s;
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
a {
  text-decoration: none;
}
</style>