<template>
   <div>
        <br>
        <br>
        <br>
        <br>
        <v-container>
            <v-flex align-center>
                <v-card class='notFound text-center'>
                    <h1>404 not found</h1>
                    <router-link to='/posts'>
                    <v-btn dark >Back to shop</v-btn>
                    </router-link>
                </v-card>
                
            </v-flex>
        </v-container>
</div>
</template>

<style lang="scss">
    .notFound {
        margin: 0 auto;
        max-width: 600px;
        padding: 50px;
    }
</style>