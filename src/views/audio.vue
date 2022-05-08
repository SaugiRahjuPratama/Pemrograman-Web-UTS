<template>
  <div v-if="audio_file">
    <audio controls>
      <source :src="audio_file" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
</template>
<script>
export default {
  name: "audio_file",
  data() {
    return {
      audio_file: null,
    };

  },
  methods: {
    async getAudio_File() {
      fetch("https://api.quran.com/api/v4/chapter_recitations/7/1", {
        method: "GET",
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((json) => {
          this.audio_file = json.audio_file;
        });
    },
  },
  mounted() {
    this.getAudio_File();
  },
};
</script>
