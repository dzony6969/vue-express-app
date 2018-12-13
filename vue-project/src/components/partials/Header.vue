<template>
<div>
<div>
    
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
      id='drawer--z'

    >
    {{checkOrder}}
      <v-list dense>
        <v-list-tile @click='drawer = false'>
          <v-list-tile-action>
            <v-icon large>close</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
           CLOSE PANEL
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to='/'>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
           HOME
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to='/posts'>
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            SHOP
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to='/new'>
          <v-list-tile-action>
            <v-icon>shop</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            NEW ITEM
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to='/shop'>
          <v-list-tile-action>
            <v-icon> shopping_basket</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <div v-if='cart.length === 0'>
             Your order ({{cart.length}})
             </div>
          <div
          v-if='cart.length > 0' flat
          >
          <v-badge
            color="cyan"
            right
          >
          ORDER
            <span slot="badge"> {{cart.length}}</span>
          </v-badge>
          </div>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to='/dashboard'>
          <v-list-tile-action>
            <v-icon>shopping_basket</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            admin dashboard
          </v-list-tile-content>
        </v-list-tile>
         <v-list-tile to='/checkorder'>
          <v-list-tile-action>
            <v-icon>shopping_basket</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            Check order status
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    
    <v-toolbar color="indigo" dark fixed id='toolbar-zIndex'>
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
       ]),
       checkOrder() {
         if(this.cart.length > 0) {
           return this.drawer = true;
         }
       }
     }
}
    
</script>
<style scoped>
  #toolbar-zIndex {
    z-index: 1000;
  }
  #drawer--z {
    z-index: 10001;
  }
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
#aside--menu {
  display: none;
}
</style>