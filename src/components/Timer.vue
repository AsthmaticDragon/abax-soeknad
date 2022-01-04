<template>
	<button class="timerButton done" v-if="isDone">Done</button>
	<button class="timerButton ticking" v-on:click="changeState() ; beginCountDown()" v-else-if="state">Running</button>
	<button class="timerButton" v-on:click="changeState()" v-else-if="!state && !isdone && isStarted">Paused</button>
	<button class="timerButton" v-on:click="changeState()" v-else-if="!state && !isdone && !isStarted">Idle</button>
</template>
<script>
export default {
name: 'Timer',
  props: ['timeToComplete'],
  data() {
	return {
		timeRemaning: 0,
		state: false,
		isDone: false,
		isStarted: false,
	}
  },
  methods: {
  timerEnabled() {
	if(this.state && !this.isDone) {
		setTimeout(() => {
			if(this.timeRemaning <= 0) {
				this.changeState();
				this.isDone = true;
				return;
			}
			this.timeRemaning--;
			this.timerEnabled();
		}, 1000)
	}
  },
  beginCountDown() {
	this.isStarted = true;
  },
  changeState() {
	this.state = !this.state; 
	if(this.state) this.timerEnabled()
  },
  },
  mounted() {
	this.timeRemaning = this.timeToComplete;
  },
}
</script>
<style scoped>
.timerButton {
	display: inline;
	border-radius: 15%;
	display: inline-block;
	padding: .75rem 1.25rem;
	border-radius: 10rem;
	color: rgb(39, 37, 37);
	text-transform: uppercase;
	font-size: 1rem;
	letter-spacing: .15rem;
	transition: all .3s;
	position: relative;
	overflow: hidden;
	z-index: 1;
	font-family: 'Courier New', Courier, monospace;
}
.done {
	background-color: lightgreen;
	pointer-events: none;   
    cursor: not-allowed;   
    opacity: 0.65;   
    filter: alpha(opacity=65);   
    -webkit-box-shadow: none;   
    box-shadow: none;
}
.ticking {
	background-color: gainsboro;
}
</style>