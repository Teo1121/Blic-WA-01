<template>
  <book v-for="book in this.books" :key="book" :isbn="book.isbn" :name="book.name" :author="book.authors[0]" :released="book.released"/>
</template>

<script>
import Book from '@/components/Book.vue'
import DataService from '@/DataService.js'
// @ is an alias to /src
export default {
  name: 'HomeView',
  components: {Book},
  data() {
    return {
      books : []
    }
  },
  created() {
    DataService.getData().then((value) => {this.books = value})
  }
}
</script>
