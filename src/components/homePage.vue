<template>
	<ul>
		<li v-for="item in items" :key="item">
			<div class="container">
				<span class="img-span">
					<img :src="item.image_url"/>
				</span>
				<router-link :to="{name: 'Beer', params: {id: item.id}}"><h3 class="item-title">{{item.name}}</h3></router-link>
				<p>{{item.description}}</p>
				<p>Abv: {{item.abv}}</p>
			</div>
		</li>
	</ul>
</template>
<script>
import Api from './Api.vue'
export default {
  name: 'homePage',
  data() {
	return {
		items: ""
	}
  },
  async mounted() {
	this.items = await Api.fetchData()
  } 
}
</script>
<style scoped>
img {
	max-width: 50px;
	max-height: 125px;
	display: inline;
	width: auto;
	height: auto;
}
p {
	display: block;
	font-family: 'Courier New', Courier, monospace;
	font-size: 14;
	font-weight: 600;
}
.container {
	justify-content: center;
	vertical-align: middle;
	max-width: 600px;
	max-height: 500px;
	width: 100%;
	overflow: hidden;
	border-top: 2px solid black;
	margin:0 auto;
}
.item-title {
	font-family: 'Courier New', Courier, monospace;
	text-decoration: underline;
	justify-content: center;
	align-items: center;
}
.img-span {
	position: relative;
	display: inline-flex;
	float: right;
	padding: 10px;
}
</style>