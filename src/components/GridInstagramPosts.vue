<template>
    <div>
        <v-simple-table class="text-left ma-3">
            <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-center">imagem</th>
                    <th class="text-center">descricao</th>
                    <th class="text-center">data</th>
                    <th class="text-center">curtidas</th>
                    <th class="text-center">comentarios</th>
                    </tr>
                </thead>
                <tbody v-for="post in instagram.posts" :key="post.timestamp">
                    <tr>
                    <td><img :src="post.image" alt="" class="instagram-image"/> </td>
                    <td>{{post.caption}} </td>
                    <td>{{post.date.getDate()}}/{{post.date.getMonth()}}/{{post.date.getFullYear()}}</td>
                    <td>{{post.likes}}</td>
                    <td>{{post.comments}}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>              
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
   name: "GridPosts",
   computed: mapGetters(['instagram']),
}
</script>

<style>
.instagram-image {
  height: 150px;
  width: 150px;
  border-radius: 2px;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.5);
  transition: width 1s;
}
</style>