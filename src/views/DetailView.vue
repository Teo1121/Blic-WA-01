<template>
  <div class="p-2">
    <p>
      {{book.authors}}
    </p>
    <p>
      {{book.isbn}}
    </p>
    <p>
      {{book.numberOfPages}}
    </p>
    <p>
      {{book.publisher}}
    </p>
    <p>
      {{book.country}}
    </p>
    <p>
      {{book.characters.length}}
    </p>
    <div>
      <button onclick="location.href='/'">
        Back
      </button>
    </div>
  </div>
</template>

<script>
import DataService from '@/DataService.js'

export default {
  name: 'DetailView',
  data() {
    return {
      book : {}
    }
  },
  created() {
    DataService.getData().then((data) => {this.book = data.find(
          (bk) => bk.isbn === localStorage.getItem("currentBook")
        );})
    console.log(this.book)
  }
}
</script>

<style lang="scss">
  .username {
    display: inline; 
    margin-left: 1rem;
  }
</style>