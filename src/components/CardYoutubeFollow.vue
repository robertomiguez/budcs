<template>
  <div>
    <v-card class="ma-3">
        <v-list-item three-line>
            <v-list-item-avatar tile class="mt-2 ml-n2">
                <v-sheet color="#FF0000" width="40" height="40" elevation="10">
                    <v-icon dark large>mdi-youtube</v-icon>
                </v-sheet>
            </v-list-item-avatar>
            <v-list-item-content>
            <div class="subheading text-center red--text mb-2">Youtube</div>
            <div><v-divider></v-divider></div>
            <div class="overline text-center">Inscritos</div>
            <v-list-item-title class="headline mb-1 text-center">{{subscribers}}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
    name: 'CardYoutubeFollow',
    props: {
        subscribers: {
            type: Number,
            required: true
        }
    }
}
</script>

<style>

</style>