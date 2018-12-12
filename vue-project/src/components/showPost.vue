<template>
  <v-content>
    <br>
    <br>
    <br>
    <div v-if='product.id.length > 3' class="container">

      <div class="row">

        <div class="col-lg-3">
          <h1 class="my-4">Nature shop</h1>
          <div class="list-group">
            <a href="#" class="list-group-item active">Category 1</a>
            <a href="#" class="list-group-item">Category 2</a>
            <a href="#" class="list-group-item">Category 3</a>
          </div>
        </div>
        <!-- /.col-lg-3 -->

        <div class="col-lg-6">

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
          bottom
        >
          <v-icon @click='addToCart(product)' >shopping_basket</v-icon>
        </v-btn>
              <span class="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
              4.0 stars
            </div>
          </div>
          <!-- /.card -->

          <div class="card card-outline-secondary my-4">
            <div class="card-header">
              Product Reviews
            </div>
            <div class="card-body">
              
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
              <small class="text-muted">Posted by Anonymous on 3/1/17</small>
              <hr>
              <a href="#" class="btn btn-success">Leave a Review</a>
            </div>
          </div>
          <!-- /.card -->

        </div>
        <!-- /.col-lg-9 -->

      </div>

    </div>
  </v-content>
</template>

<script>
import PostsService from '../../services/PostsService'
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
     }
    }
  },
  mounted () {
    this.getPost()
  },
  methods: {
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
      } catch(err) {
        console.log(err)
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
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>