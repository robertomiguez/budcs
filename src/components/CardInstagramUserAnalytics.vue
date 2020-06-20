<template>
  <div>
    <v-card class="ma-3" outlined>
        <v-list-item three-line>
            <v-list-item-avatar tile class="mt-2 ml-n2">
            <v-sheet color="#833AB4" width="40" height="40" elevation="10">
                <v-icon dark>mdi-instagram</v-icon>
            </v-sheet>
            </v-list-item-avatar>
            <v-list-item-content>
            <div class="subheading text-left red--text mb-2">Instagram</div>
            <v-simple-table>
                <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-left">Comentarios</th>
                    <th class="text-left">Curtidas</th>
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
                    <th class="text-left">Engajamento</th>
                    <th class="text-left">Frequencia</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{{engagement}}%</td>
                    <td>{{frequency.days}} dia(s) {{frequency.hours}} hora(s)</td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>              </v-list-item-content>
        </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
    name: 'CardIntagramUserAnalytics',
    props: {
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
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>