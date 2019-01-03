<template>
    <div>
         <div class="card-deck">
                <div class="card">
                <div class="card-body">
            <div class="card-header alert-success"> <v-icon style="font-size: 40px;" large>monetization_on</v-icon> <span class='title display-1'>  AMOUNT</span></div>
                <h2 color='green' class="card-text">{{sumAllAmount.sum}} $</h2>
                               <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, accusantium, sunt dicta cupiditate debitis ipsum dolorem, similique amet natus rerum consequatur id minus. Quasi et optio, placeat provident accusamus fuga!</small>

            </div>
        </div>
        <div class="card">
                <div class="card-body">
            <div class="card-header alert-warning"> <v-icon style="font-size: 40px;" large>monetization_on</v-icon> <span class='title display-1'>  TAX DUE</span></div>
               <h2 color='green' class="card-text">{{sumAllAmount.tax}} $</h2>
               <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, accusantium, sunt dicta cupiditate debitis ipsum dolorem, similique amet natus rerum consequatur id minus. Quasi et optio, placeat provident accusamus fuga!</small>
            </div>
        </div>
        <div class="card">
                <div class="card-body">
            <div class="card-header alert-primary"> <v-icon style="font-size: 40px;" large>monetization_on</v-icon> <span class='title display-1'>  PROFIT</span></div>
               <h2 color='green' class="card-text">{{sumAllAmount.profit}} $</h2>
                              <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, accusantium, sunt dicta cupiditate debitis ipsum dolorem, similique amet natus rerum consequatur id minus. Quasi et optio, placeat provident accusamus fuga!</small>

            </div>
        </div>
  </div>
    </div>
</template>

<script>
export default {
    props: ['sumAllAmount']
}
</script>