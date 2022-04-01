<template>
  <div class="p-2" >
    <a href="/detail" @click="setCommit()">
      {{book.name}}
    </a>
    <p>{{book.authors[0]}}</p>
    <p>{{book.released}}</p>
  </div>
</template>

<script>
export default {
  name: 'Book',
  props: {
    book : {}
  },
  methods: {
    setCommit() {
      localStorage.setItem("currentBook",this.book.isbn)
    },
  },
}
</script>