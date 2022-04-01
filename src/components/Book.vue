<template>
  <div class="p-2" >
    <a href="/detail" @click="setCommit()">
      {{name}}
    </a>
    <p>{{author}}</p>
    <p>{{released}}</p>
  </div>
</template>

<script>
export default {
  name: 'Book',
  props: {
    isbn: String,
    name: String,
    author : String,
    released : String
  },
  methods: {
    setCommit() {
      localStorage.setItem("currentBook",this.isbn)
    },
  },
}
</script>