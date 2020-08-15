<template>
  <div>
    <v-card class="text-center ma-3">
        <v-list-item three-line>
            <v-list-item-avatar tile class="mt-2 ml-n2">
                <v-sheet color="#833AB4" width="40" height="40" elevation="10">
                    <v-icon dark>mdi-instagram</v-icon>
                </v-sheet>
            </v-list-item-avatar>
            <v-list-item-content tile class="mt-2 ml-n12">
                <div class="subheading text-center red--text mb-2">Instagram</div>
                <div><v-divider></v-divider></div>
                <v-responsive class="pt-4">
                    <v-avatar size="100" class="red lighten-2">
                    <img :src="img" alt="" />
                    </v-avatar>
                </v-responsive>
                <v-card-text>
                    <div class="subheading">{{username}} <img v-show='verified' src="../assets/instagram-verified.png" height="20" size="20"/> </div>
                    <div class="subheading">{{full_name}}</div>
                    <div class="grey--text">{{biography}}</div>
                </v-card-text>
                <div class="overline text-center mt-1">Seguidores</div>
                <v-list-item-title class="headline mb-1 text-center">{{followers}}</v-list-item-title>
                <div class="overline text-center">Seguindo</div>
                <v-list-item-title class="headline mb-1 text-center">{{following}}</v-list-item-title>
                <v-simple-table>
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-center">Comentarios</th>
                        <th class="text-center">Curtidas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{{comments}}</td>
                        <td>{{likes}}</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                        <th class="text-center">Engajamento</th>
                        <th class="text-center">Frequencia</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{{engagement}}%</td>
                        <td>{{frequency}}</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>              

            </v-list-item-content>
        </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
    name: 'CardIntagramUser',
    props: {
        img: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        full_name: {
            type: String,
            required: true
        },
        biography: {
            type: String,
            required: true
        },
        verified: {
            type: Boolean,
            required: true
        },
        followers: {
            type: Number,
            required: true
        },
        following: {
            type: Number,
            required: true
        },
        comments: {
            type: Number,
            required: true
        },
        likes: {
            type: Number,
            required: true
        },
        engagement: {
            type: Number,
            required: true
        },
        frequency: {
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>