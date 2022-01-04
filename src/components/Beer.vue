<template>
	<div class="container">
		<span class="img-span">
			<img :src="selectedItem.image_url"/>
		</span>
		<h1 class="title">{{selectedItem.name}}</h1>
		<p>{{selectedItem.description}}</p>
		<p>Abv: {{selectedItem.abv}}%</p>
		<div>
			<h3 class="sub-title">Hops:</h3>
			<ul>
				<li>
					<hops-cluster :hopsArray='hops'/>
				</li>
			</ul>
			<h3 class="sub-title">Malts:</h3>
			<ul>
				<li v-for="malt in malt" :key="malt">
					{{malt.name}}
					<custom-button/>
				</li>
			</ul>
			<h3 class="sub-title">Methods:</h3>
			<ul>
				<h3 v-if="methods.fermentation">Fermentation:</h3>
				<li v-for="fermentation in methods.fermentation" :key="fermentation">
					<p>{{fermentation.value}} degrees {{fermentation.unit}}</p>
					<custom-button/>
				</li>
				<h3 v-if="methods.mash_temp">Mash temps:</h3>
				<li v-for="mash in methods.mash_temp" :key="mash">
					<p>{{mash.temp.value}} degrees {{mash.temp.unit}}</p>
					<Timer v-if="mash.duration" :timeToComplete='mash.duration'/>
					<custom-button v-else></custom-button>
				</li>	

				<h3 v-if="methods.twist">Twist:</h3>
				<li class="twist" v-if="methods.twist">
					{{methods.twist}}
					<custom-button/>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import Api from '../components/Api.vue'
import Timer from '../components/Timer.vue'
import CustomButton from "../components/customButton.vue";
import HopsCluster from "../components/hopsCluster.vue";
export default {
name: 'Beer',
components: {
	Timer,
	CustomButton,
	HopsCluster
},
  data() {
	return {
		selectedItem: [],
		hops: [],
		malt: [],
		methods: {}
	}
  },
  mounted() {
	this.selectedItem = Api.items[this.$route.params.id - 1]
	this.hops = this.selectedItem.ingredients.hops;
	this.malt = this.selectedItem.ingredients.malt;
	this.methods = this.selectedItem.method;
  },
}
</script>
<style scoped>
button {
	display: block;
	font-family: 'Courier New', Courier, monospace;
	font-size: 14;
	font-weight: 600;
}
.title {
	font-family: 'Courier New', Courier, monospace;
	text-decoration: underline;
	justify-content: center;
	align-items: center;
}
.sub-title {
	font-family: 'Courier New', Courier, monospace;
	text-decoration: underline;
	justify-content: center;
	align-items: center;
}
.container {
	justify-content: center;
	vertical-align: middle;
	max-width: 800px;
	max-height: 100%;
	width: 100%;
	overflow: hidden;
	margin:0 auto;
}
.img-span {
	position: relative;
	float: right;
	padding: 10px;
}
.twist {
	padding-bottom: 25px;
	
}
img {
	max-width: 150px;
	max-height: 305px;
	display: inline;
	width: auto;
	height: auto;
}
ul {
	display: block;
	font-family: 'Courier New', Courier, monospace;
	font-size: 14;
	font-weight: 600;
}
p {
	display: inline-block;
	font-family: 'Courier New', Courier, monospace;
	font-size: 14;
	font-weight: 600;
}
</style>