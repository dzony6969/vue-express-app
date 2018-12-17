<template>
 <div>
    <br>
    <br>
    <br>
    <div v-if='product.id.length > 3' class="container">

      <div class="row">

        <div class=" offset-lg-2 col-lg-2">
          <h1 class="my-4">Nature shop</h1>
          <div class="list-group">
            <a href="#" class="list-group-item active">Category 1</a>
            <a href="#" class="list-group-item">Category 2</a>
            <a href="#" class="list-group-item">Category 3</a>
          </div>
        </div>
        <!-- /.col-lg-3 -->

        <div class="col-lg-5">

          <div class="card mt-4">
            <img class="card-img-top img-fluid" :src="product.img" alt="">
            <div class="card-body">
              <h3 class="card-title">{{product.title}}</h3>
              <h4>{{product.price}} $</h4>
              <p class="card-text">{{product.text}}</p>
               <v-btn
          absolute
          color="orange"
          class="white--text"
          fab
          medium
          right
          middle
          @click='addToCart(product)'
        >
          <v-icon  >shopping_basket</v-icon>
        </v-btn>
              <v-rating
                              
                              background-color="green lighten-3"
                              color="green"
                              medium
                              :value='avgRating'
                              readonly
                            ></v-rating>
                           <h4 v-if='product.comments.length > 0'>average rating for this product: <strong>{{`${avgRating.toFixed(2)}`}}</strong></h4>
                           <h4 v-if='product.comments.length === 0'>There is no review of this product</h4> 
            </div>
          </div>
          <!-- /.card -->

          <div class="card card-outline-secondary my-4">
            <div class="card-header">
              Product Reviews
            </div>
            <div class="card-body">
              <div v-for='comment in product.comments' :key='comment._id' class='comment'>
                <all-comment></all-comment>
              <v-rating
                              :value='comment.rating'
                              background-color="green lighten-3"
                              color="green"
                              medium
                              readonly
                            ></v-rating>

                          
                            <p>{{comment.text}}</p>
              <small class="text-muted">Posted by {{comment.author}} on 3/1/17</small>
              <hr>
              </div>
               <div class="form-group">
                    
                            <div class="col-sm-12">
                              <v-textarea
                                    v-model='comment.text'
                                    auto-grow
                                    box
                                    color="deep-purple"
                                    label="Comment"
                                    rows="1"
                                  ></v-textarea>
                            </div>
                        </div>
                        <div class="form-group">
                          
                            <div class="col-sm-12 w-25">                    
                                <div class="input-group">
                                  <v-text-field
                                    v-model="comment.author"
                                    color="purple darken-2"
                                    label="Author"
                                    required
                                    
                                  ></v-text-field>
                                </div>
                            </div>
                            <div class='col-sm-12'>
                              <p>Rating:</p>
                            <v-rating
                           v-model='comment.rating'
                              background-color="green lighten-3"
                              color="green"
                              medium
                            ></v-rating>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-offset-4 col-sm-10">                    
                                <button @click='addComment()' class="btn btn-success btn-circle text-uppercase text-center" type="submit" id="submitComment"><span class="glyphicon glyphicon-send"></span> Summit comment</button>
                            </div>
                        </div>  
            </div>
          </div>
          <!-- /.card -->
        </div>
        <!-- /.col-lg-9 -->

      </div>

    </div>
    </div>
</template>

<script>
import PostsService from '../../services/PostsService'
import AllComment from './_postComponent/AllComment'
import { mapState } from 'vuex';
export default {
  name: 'showPost',
  data () {
    return {
     product: {
      title: '',
      text: '',
      img: '',
      price: '',
      id: '',
      comments: [],
      avgRatings: 0,
     },
      comment: [{
         text: '',
         author: '',
         rating: '',
      }]
    }
  },
  components: {
    AllComment,
  },
  mounted () {
    this.getPost()
  },
  methods: {
    reloadPage(){
    window.location.reload()
  },
    async getPost () {
      try {
      const response = await PostsService.getPost({
        id: this.$route.params.id
      })
      this.product.title = response.data.title
      this.product.text = response.data.text
      this.product.img = response.data.img
      this.product.price = response.data.price
      this.product.id = response.data._id
      this.product.comments = response.data.comments
      } catch(err) {
        console.log(err)
      }
    },
    async addComment () {
      if(this.comment.rating > 0) {
      await PostsService.addComment({
        id: this.$route.params.id,
        text: this.comment.text,
        author: this.comment.author,
        rating: this.comment.rating,
      })
      this.reloadPage()
      } else {
        alert('You must to evaluate this product')
      }
    },
    addToCart(product) {
            this.$store.commit({
                type: 'addToCart',
                id: this.product.id,
                title: this.product.title,
                img: this.product.img,
                price: this.product.price,
                quantity: 1
                })
            }
  },
  computed: {
    ...mapState([
      'comments'
    ]),
    avgRating() {
      const rate = this.product.comments.map((item) => item.rating)
      const rateArray = Array.from(rate)
      const sum = rateArray.reduce((prev, cur) => {
        return prev + cur
      }, 0)
      let avg = sum/this.product.comments.length
      return avg
      
    },
  }
}
</script>
<style type="text/css">

</style>