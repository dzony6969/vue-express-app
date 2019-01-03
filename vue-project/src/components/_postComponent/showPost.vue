<template>
 <div>
    <br>
    <br>
    <br>
    <v-container v-if='product.id.length > 3'>

      <v-layout row>
        <!-- /.col-lg-3 -->

        <v-flex lg6 offset-lg3>

          <v-card class="card mt-4">
            <img class="card-img-top img-fluid" :src="product.img" alt="">
            <div class="card-body">
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
              <h3 class="card-title">{{product.title}}</h3>
              <h4>{{product.price}} $</h4>
               <hr>
             <div v-if='vampire' class='grey lighten-4 vampire--color' v-html='product.text'>{{product.text}}</div>
              <div v-if='!vampire' v-html='product.text'>{{product.text}}</div>

              <hr>
              <v-rating      
                background-color="purple lighten-3"
                color="purple"
                medium
                :value='avgRating'
                readonly
              ></v-rating>
              <h4 v-if='product.comments.length > 0'>average rating for this product: <strong>{{`${avgRating.toFixed(2)}`}}</strong></h4>
              <h4 v-if='product.comments.length === 0'>There is no review of this product</h4> 
            </div>
          </v-card>
            <h3>Add review of our product</h3>
          <!-- <add-comment :showComment='showComment'></add-comment> -->
          <div>
    <div>
                          <div class="col-sm-12">
                              <v-textarea
                                    v-model='comment.text'
                                    auto-grow
                                    box
                                    outline
                                    color="deep-purple"
                                    label="Comment"
                                    rows="1"
                                  ></v-textarea>
                            </div>
                        <div class="form-group">
                          
                            <div class="col-sm-12 col-md-6 col-lg-5">                    
                                <div class="input-group">
                                  <v-text-field
                                    v-model="comment.author"
                                    color="purple darken-2"
                                    label="Author"
                                    required
                                    
                                  ></v-text-field>
                                </div>
                            </div>
                            <div class='col-sm-12 col-md-5 col-lg-5'>
                              <p>Rating:</p>
                            <v-rating
                           v-model.number='comment.rating'
                              background-color="purple lighten-3"
                              color="purple"
                              medium
                            ></v-rating>
                        
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-offset-4 col-sm-10">   
                              <br>
                              <br>                 
        <v-btn @click='addComment(), updateRating()' 
        :disabled='disabledButton'
        color='secondary'
        v-if='!spinner'
        class="btn btn-success btn-circle text-uppercase text-center" 
        type="submit" id="submitComment">
        <span class="glyphicon glyphicon-send"></span>Add comment</v-btn>
                            <div class="text-xs-center"  v-if='spinner'>
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
            </div>
              <br>
                <br>
              </div>
            </div>  
        </div>
        </div>
          <br>
          <br>
          <br>
          <v-flex class="my-4 col-sm-12">
            <div class="card-header">
            Product Reviews <strong class='show--comment' @click='loadComment'>({{product.comments.length}})</strong>
            </div>
         
            <div class="card-body">
                <transition-group 
       mode='in-out'
       v-if='!showComment'
       enter-active-class="animated slideInDown" 
       leave-active-class="animated slideOutDown"
       >
                <all-comment  v-for='comment in product.comments' :comment='comment' :key='comment._id'></all-comment>
                </transition-group>  
            </div>
          </v-flex>
          <!-- /.card -->
        </v-flex>
        <!-- /.col-lg-9 -->

      </v-layout>
      
    </v-container>
    </div>
</template>

<script>
import PostsService from "../../../services/PostsService";
import AddComment from "./AddComment.vue";
import AllComment from "./AllComment";
import { mapState } from "vuex";
export default {
  name: "showPost",
  data() {
    return {
      showComment: true,
      spinner: false,
      darkColor: '#F5F5F5',
      disabledButton: false,
      comment: [
        {
          text: "",
          author: "",
          rating: 0
        }
      ],
      product: {
        title: "",
        text: "",
        img: "",
        price: "",
        id: "",
        comments: [],
        avgRating: 0
      }
    };
  },
  components: {
    AllComment,
    AddComment
  },
  mounted() {
    this.getPost();
  },
  methods: {
    loadComment() {
      this.showComment = !this.showComment;
    },
    async getPost() {
      try {
        const response = await PostsService.getPost({
          id: this.$route.params.id
        });
        this.product.title = response.data.title;
        this.product.text = response.data.text;
        this.product.img = response.data.img;
        this.product.price = response.data.price;
        this.product.id = response.data._id;
        this.product.comments = response.data.comments;
        this.product.avgRating = response.data.avgRating;
      } catch (err) {
        console.log(err);
      }
    },
    async addComment() {
      if (this.comment.rating > 0) {
        await PostsService.addComment(
          {
            id: this.$route.params.id,
            text: this.comment.text,
            author: this.comment.author,
            rating: this.comment.rating
          },
          (this.comment.author = ""),
          (this.comment.text = ""),
          (this.comment.rating = 0),
          (this.spinner = true),
          (this.disabledButton = true),
          setTimeout(() => {
            this.getPost();
            this.spinner = false;
            this.disabledButton = false;
          }, 3000),
          (this.showComment = false)
        );
      } else {
        alert("Please rate this product");
      }
    },
    addToCart() {
      this.$store.commit({
        type: "addToCart",
        id: this.product.id,
        title: this.product.title,
        img: this.product.img,
        price: this.product.price,
        quantity: 1
      });
    },
    async updateRating() {
      await PostsService.updatesRating({
        id: this.$route.params.id,
        avgRating: this.avgRating
      });
    }
  },
  computed: {
    ...mapState(["comments", 'vampire']),
    avgRating() {
      const rate = this.product.comments.map(item => item.rating);
      const rateArray = Array.from(rate);
      const sum = rateArray.reduce((prev, cur) => {
        return prev + cur;
      }, 0);
      let avg = sum / this.product.comments.length;
      return Number(avg);
    }
  }
};
</script>
<style type="text/css" scoped>
.show--comment {
  cursor: pointer;
  color: blueviolet;
}
.note--description {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: inherit;
}
.card--img {
  height: 600px;
}
.vampire--color {
  padding: 10px;
  border-radius: 7%;
  color: #212121;
}
</style>
