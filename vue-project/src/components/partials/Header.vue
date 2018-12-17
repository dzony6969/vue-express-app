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
      class='elevation-20'

    >
    {{checkOrder}}
    <br>
    <br>
      <v-list dense>
        <v-list-tile @click='drawer = false'>
          <v-list-tile-action class='text-center'>
            <v-icon large>close</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
          
          </v-list-tile-content>
        </v-list-tile>
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
        <div v-if='admin.isAdmin'>
        <br>
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
        <v-list-tile v-if='admin.isAdmin' to='/new'>
          <v-list-tile-action>
            <v-icon>create_new_folder</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <strong>NEW ITEM</strong>
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
import { mapGetters, mapActions, mapState } from 'vuex'
   export default {
     data() {
       return {
        drawer: false,
        adminPassword: '',
        adminUser: '',
        clipped: false,
       }
     },
     computed: {
       ...mapGetters([
         'cart',
         'admin',
         'newOrder'
       ]),
       checkOrder() {
         if(this.cart.length > 0) {
           return this.drawer = true;
         }
       },
     },
     methods: {
       ...mapActions([
         'newOrders'
       ]),
        logout() {
         this.admin.password = '',
         this.admin.user = '',
         this.admin.isAdmin = false;
         this.$router.push({name: 'Posts'})
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

.v-list__tile__content:hover {
}
</style>