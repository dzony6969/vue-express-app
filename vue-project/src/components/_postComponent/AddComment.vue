<template>

<div>
    <div>

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
                            {{showComment}}
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-offset-4 col-sm-10">                    
                                <button @click='addComment()' class="btn btn-success btn-circle text-uppercase text-center" type="submit" id="submitComment"><span class="glyphicon glyphicon-send"></span> Summit comment</button>
                            </div>
                        </div>  
                            
                            </div>
                            <br>
                            <br>
                        </div>
                    
</template>

<script>
import PostsService from '../../../services/PostsService'
    export default {
        props: ['showComment'],
        data() {
                return {
                    comment: [{
                    text: '',
                    author: '',
                    rating: '',
                    }]
                }
            },
        methods: {
            
            async addComment () {
      if(this.comment.rating > 0) {
      await PostsService.addComment({
        id: this.$route.params.id,
        text: this.comment.text,
        author: this.comment.author,
        rating: this.comment.rating,
      })
        this.comment.author = ''
        this.comment.text = ''
        this.comment.rating = ''
      } else {
        alert('add rating before')
      }
      console.log('chuj')
    },
        }
    }
</script>