<template>
  <h1 class="m-lg-4 p-5">List Surah :</h1>
  <p class="m-lg-4" v-for="chapters in chapters" :key="chapters">
    {{ chapters.name_simple }}
  </p>
  <audio controls>
    <source :src="audio" type="audio/mpeg">

  </audio>
</template>

<script>
export default {
  name: "Surah",
  data() {
    return {
      chapters: null,
    };
  },
  methods: {
    async getListChapter() {
      fetch("https://api.quran.com/api/v4/chapters?language=id", {
        method: "GET",
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((json) => {
          this.chapters = json.chapters;
        });
    },
  },
  mounted() {
    this.getListChapter();
  },
};
</script>
