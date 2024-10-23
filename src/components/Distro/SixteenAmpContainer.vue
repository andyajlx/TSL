<template>
    <div class="grid">
        <div class="col-2">
            <SixteenAmp :loads="props.loads" :id=13 @click="$emit('openModal', 13)"></SixteenAmp>

        </div>
        <div class="col-2">
            <SixteenAmp :loads="props.loads" :id=14 @click="$emit('openModal', 14)"></SixteenAmp>
        </div>
        <div class="col-2">
            <SixteenAmp :loads="props.loads" :id=15 @click="$emit('openModal', 15)"></SixteenAmp>
        </div>
        <div class="col-2">
            <SixteenAmp :loads="props.loads" :id=16 @click="$emit('openModal', 16)"></SixteenAmp>
        </div>
        <div class="col-2">
            <SixteenAmp :loads="props.loads" :id=17 @click="$emit('openModal', 17)"></SixteenAmp>
        </div>
        <div class="col-2">
            <SixteenAmp :loads="props.loads" :id=18 @click="$emit('openModal', 18)"></SixteenAmp>
        </div>
    </div>

</template>
<script setup>
import SixteenAmp from './SixteenAmp.vue';
import { defineProps } from 'vue'

const props = defineProps({
    loads: Array, // Array of load values
});


console.log('16a container loads:', props.loads);


</script>
<style scoped></style>