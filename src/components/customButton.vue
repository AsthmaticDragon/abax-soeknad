<template>
    <button v-on:click='changeState()' v-if='!this.isDone'>Idle</button>
    <button class='done disabled' v-if='this.isDone'>Done</button>
</template>
<script>
export default {
    name: 'CustomButton', 
	props: ['thisStage'],
    data() {
        return {
            isDone: false,
        }
    },
    methods: {
        changeState() {
            this.isDone = !this.isDone;
        },
    }
};
</script>
<style scoped>
button {
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
}
.disabled{   
    pointer-events: none;   
    cursor: not-allowed;   
    opacity: 0.65;   
    filter: alpha(opacity=65);   
    -webkit-box-shadow: none;   
    box-shadow: none;
}
</style>