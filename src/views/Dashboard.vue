<template>
  <div class="team">
    <h1 class="overline grey--text ml-14" v-if="social">Redes socias de {{social.full_name}}  </h1>
    <v-container>
      <v-layout row wrap>
  
        <v-flex xs12 sm6 md4 lg3>
          <CardInstagramUser
            v-if="social"
            :img='social.instagram.profile_pic_url' 
            :username='social.instagram.username' 
            :full_name='social.instagram.full_name' 
            :biography='social.instagram.biography'
            :followers="social.instagram.followers"
            :following="social.instagram.following"
            :verified='social.instagram.verified' 
          />
        </v-flex>

        <v-flex xs12 sm6 md4 lg3>
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
        </v-flex>

        <v-flex xs12 sm6 md4 lg3>
          <CardFacebookUser
            v-if="social"
            :img='social.instagram.profile_pic_url' 
            :username='social.facebook.username' 
            :full_name='social.facebook.full_name' 
            :biography='social.facebook.biography'
            :followers="social.facebook.followers"
            :likes="social.facebook.likes"
            :verified='social.facebook.verified' 
          />
        </v-flex>

        <v-flex xs6 sm4 md3 lg2>
          <CardYoutubeFollow
            v-if="social"
            :subscribers="social.youtube.subscribers"
          />
        </v-flex>

        <v-flex xs12 sm12 md6 lg6>
          <v-card>
            <CardInstagramUserAnalytics class="mt-4 mx-n3"
              v-if="social"
              :comments='social.instagram.comments'
              :likes='social.instagram.likes'
              :engagement='social.instagram.engagement'
              :frequency='social.instagram.frequency'
            />
            <div v-if="loaded">
                <ChartGeneric chartName='Seguidores' type='line' :labelsX='labelsX' :datasets='datasetsFollowersGain'/>
                <ChartGeneric chartName='Engajamento recebido' type='line' :labelsX='labelsX' :datasets='datasetsEngagementReceived'/>
                <ChartGeneric chartName='Percentual de engajamento ' type='line' :labelsX='labelsX' :datasets='datasetsEngagementRatio'/>
            </div>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
import moment from 'moment'
import { getSocial, getListSocials } from '../services/socialService'
import ChartGeneric from '../components/ChartGeneric'
import CardInstagramUser from '../components/CardInstagramUser'
import CardTwitterUser from '../components/CardTwitterUser'
import CardFacebookUser from '../components/CardFacebookUser'
import CardYoutubeFollow from '../components/CardYoutubeFollow'
import CardInstagramUserAnalytics from '../components/CardInstagramUserAnalytics'

export default {
  name: "team",
  components: {
    ChartGeneric,
    CardInstagramUser,
    CardTwitterUser,
    CardFacebookUser,
    CardYoutubeFollow,
    CardInstagramUserAnalytics
  },
  data: () => ({
    labelsX: [],
    datasetsFollowersGain: [],
    datasetsEngagementReceived: [],
    datasetsEngagementRatio: [],
    loaded: false,
    getSocial: null,
    getListSocials: [],
  }),
  computed: {
    social: function () {
      return this.getSocial
    }  
  },
  methods: {
    loadSocial: async function () {
      try {
        const res = await getSocial()
        this.getSocial = res // res.data.records
      } catch (error) {
        // TODO catch properly this
        // eslint-disable-next-line no-console
        console.log(error)
      }
    },

    loadListSocials: async function () {
      try {
        const res = await getListSocials()
        this.getListSocials = res // res.data.records
      } catch (error) {
        // TODO catch properly this
        // eslint-disable-next-line no-console
        console.log(error)
      }
    },

    fillDataChart() {
      let dataFollowers = []
      let dataNewFollowers = []
      let PreviousNumberOfFollowers
      let dataLikes = []
      let dataComments = []
      let dataRatio = []

      this.getListSocials.forEach(s => {
        this.labelsX.push(moment(s.date).format("DD/MM/YY"))
        dataFollowers.push(s.instagram.followers)
        if (!PreviousNumberOfFollowers) PreviousNumberOfFollowers = s.instagram.followers  
        // PreviousNumberOfFollowers = PreviousNumberOfFollowers ? PreviousNumberOfFollowers : s.instagram.followers      
        dataNewFollowers.push(s.instagram.followers-PreviousNumberOfFollowers)
        PreviousNumberOfFollowers = s.instagram.followers
        dataLikes.push(s.instagram.likes)
        dataComments.push(s.instagram.comments)
        dataRatio.push(s.instagram.engagement)
      })
    
      this.fillDatasets(this.datasetsFollowersGain,'Seguidores','bar','left-y-axis',dataFollowers,['rgb(54,73,93,.1)'],['rgb(54,73,93,.1)'],3)
      this.fillDatasets(this.datasetsFollowersGain,'Novos Seguidores','line','right-y-axis',dataNewFollowers,['rgb(71, 183,132,.1)'],['#47b784'],3)

      this.fillDatasets(this.datasetsEngagementReceived,'Likes','line','left-y-axis',dataLikes,['rgb(102,102,255,.03)'],['rgb(102,102,255,1)'],3)
      this.fillDatasets(this.datasetsEngagementReceived,'Comments','line','right-y-axis',dataComments,['rgb(0, 153, 76,.03)'],['rgb(0, 153, 76,1)'],3)

      this.fillDatasets(this.datasetsEngagementRatio,'Percentual','line','left-y-axis',dataRatio,['rgb(255,102,102,.03)'],['rgb(255,102,102,1)'],3)
    },
    
    fillDatasets(datasets,labely,type,yAxisID,data,backgroundColor,borderColor,borderWidth) {
      datasets.push({ 
          label: labely,
          type: type,
          yAxisID: yAxisID,
          data: data,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          borderWidth: borderWidth
      })
    }
  },
  async mounted () {
    this.loadSocial()
    await this.loadListSocials()
    this.fillDataChart()

    this.loaded = true
  }
}
</script>
