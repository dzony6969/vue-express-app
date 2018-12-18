<template>
    <v-dialog
        v-model="dialog"
        width="500"
      >
        <v-btn
          slot="activator"
          color="red lighten-2"
          dark
        >
          Click Me
        </v-btn>
  
        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            Privacy Policy
          </v-card-title>
  
          <v-card-text>
              Are you sure about deleting this product?
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class='warning' @click='deletePost(post._id), setDialog()'>Delete</v-btn>
            <v-btn dark @click='setDialog()'>Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
</template>