<script>
export default {
  name: 'Api',
  data() {
	return {
		items: []
	}
  },
  created() {
        this.$root.$refs.Api = this;
    },
  async fetchData() {
	const response = await fetch("https://api.punkapi.com/v2/beers");
	const data = await response.json();
	
	data.forEach((data, index) => {
		data.id = index + 1;
	})
	this.items = data;
	return data;
  },
  }
</script>