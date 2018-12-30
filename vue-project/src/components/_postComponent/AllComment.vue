<template>
    <div  class='comment'>
              <v-rating
                              :value='comment.rating'
                              background-color="green lighten-3"
                              color="purple"
                              medium
                              readonly
                            ></v-rating>

                          
                            <p>{{comment.text}}</p>
              <small class="text-muted">Posted by {{comment.author}} on 3/1/17</small>
              <hr>
              </div>
</template>

<script>
export default {
  props: ["comment"]
};
</script>
