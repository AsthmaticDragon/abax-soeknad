<template>
    <li v-for="hops in hopsArray" :key="hops">
        {{hops.name}}
        <button class='done disabled'   v-if='hops.isDone'>Done</button>
        <button class='disabled' v-on:click='changeState(hops), hopsStage(hops.add)' v-else-if="hops.add != currentStage">Idle</button>
        <button v-on:click='changeState(hops), hopsStage(hops.add)' v-else>Idle</button>
    </li>
</template>
<script>
import Api from './Api.vue'
export default {
    name: 'hopsCluster',
    props: ['hopsArray'],
    components: {
        
    },
    methods: {
        hopsStage(hopsStage) {
            if(hopsStage == 'start') this.amountPerCluster.start--;
            if(hopsStage == 'middle') this.amountPerCluster.middle--;
            if(hopsStage == 'end') this.amountPerCluster.end--;
            if(hopsStage == 'dry hop') this.amountPerCluster.dry--;

        },
        changeState(i) {
            i.isDone = !i.isDone;
        },
    },
    data() {
        return {
            amountPerCluster: {start: 0, middle: 0, end: 0, dry: 0},
            currentStage: 'start',
            hops: [],
            
        }
    },
    watch: {
        'amountPerCluster.start': function() {
            if(this.amountPerCluster.start == 0) this.currentStage = 'middle'
        }, 
        'amountPerCluster.middle': function() {
            if(this.amountPerCluster.middle == 0) this.currentStage = 'end'
        },
        'amountPerCluster.end': function() {
            if(this.amountPerCluster.end == 0) this.currentStage = 'dry hop'
        }
    },
    created() {
        this.hops = Api.items[this.$route.params.id - 1].ingredients.hops
        this.hops.forEach((hopsItem) => {
            if(hopsItem.add == 'start') this.amountPerCluster.start++;
            if(hopsItem.add == 'middle') this.amountPerCluster.middle++;
            if(hopsItem.add == 'end') this.amountPerCluster.end++;
            if(hopsItem.add == 'dry hop') this.amountPerCluster.dry++;
        });
        
        this.hops.forEach((x) => {x.isDone = false})
        if(this.amountPerCluster.start==0) { 
            this.currentStage = 'middle'
            if(this.amountPerCluster.middle==0) { 
                this.currentStage = 'middle' 
                if(this.amountPerCluster.end==0) { 
                    this.currentStage = 'middle' 
                    }
                }
            }  
    }
}
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