<template>
  <div class="team">
    <v-container>
      <!-- <h1 class="overline grey--text" v-if="instagram">Redes socias de {{instagram.full_name}}  </h1> -->
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3>
          <CardInstagramUser
            v-if="instagram.profile_pic_url"
            :img='instagram.profile_pic_url' 
            :username='instagram.username' 
            :full_name='instagram.full_name' 
            :biography='instagram.biography'
            :followers="instagram.followers"
            :following="instagram.following"
            :verified='instagram.verified' 
            :comments='instagram.comments'
            :likes='instagram.likes'
            :engagement='instagram.engagement'
            :frequency='instagram.frequency'
          />
        </v-flex>

        <!-- <v-flex xs12 sm6 md4 lg3>
          <CardTwitterUser
            v-if="social"
            :img='social.instagram.profile_pic_url' 
            :username='social.twitter.username' 
            :full_name='social.twitter.full_name' 
            :biography='social.twitter.biography'
            :followers="social.twitter.followers"
            :following="social.twitter.following"
            :verified='social.twitter.verified' 
          />
        </v-flex> -->

        <v-flex xs12 sm6 md8 lg9>
          <v-card>
            <GridInstagramPosts/>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
import CardInstagramUser from '../components/CardInstagramUser'
// import CardTwitterUser from '../components/CardTwitterUser'
import { mapGetters, mapActions } from 'vuex'
import GridInstagramPosts from '../components/GridInstagramPosts'

export default {
  name: "Dashboard",
  components: {
    CardInstagramUser,
    // CardTwitterUser,
    GridInstagramPosts
  },
  computed: mapGetters(['instagram','twitter']),
  created() {
      this.fetchInstagram('ricaperrone')
      this.fetchTwitter()
  },
  methods: {
    ...mapActions(['fetchInstagram','fetchTwitter'])
  }
}
</script>