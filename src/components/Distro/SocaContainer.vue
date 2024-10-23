<template>
    <div>
        <!-- Row 1-->
        <div class="grid">
            <div class="col-4">
                <SocapexOutlet :loads="props.loads" :id=1 @click="$emit('openModal', 1)">
                </SocapexOutlet>
            </div>
            <div class="col-4">
                <SocapexOutlet :loads="props.loads" :id=2 @click="$emit('openModal', 2)">
                </SocapexOutlet>
            </div>
            <div class="col-4">
                <SocapexOutlet :loads="props.loads" :id=3 @click="$emit('openModal', 3)">
                </SocapexOutlet>
            </div>
        </div>
        <!-- Row 2-->
        <div class="grid">
            <div class="col-4">
                <SocapexOutlet :loads="props.loads" :id=4 @click="$emit('openModal', 4)">
                </SocapexOutlet>
            </div>
            <div class="col-4">
                <SocapexOutlet :loads="props.loads" :id=5 @click="$emit('openModal', 5)">
                </SocapexOutlet>
            </div>
            <div class="col-4">
                <SocapexOutlet :loads="props.loads" :id=6 @click="$emit('openModal', 6)">
                </SocapexOutlet>
            </div>
        </div>
        <!-- Row 3-->
        <div class="grid">
            <div class="col-4">
                <SocapexOutlet :loads="props.loads" :id=7 @click="$emit('openModal', 7)">
                </SocapexOutlet>
            </div>
            <div class="col-4">
                <SocapexOutlet :loads="props.loads" :id=8 @click="$emit('openModal', 8)">
                </SocapexOutlet>
            </div>
            <div class="col-4">
                <SocapexOutlet :loads="props.loads" :id=9 @click="$emit('openModal', 9)">
                </SocapexOutlet>
            </div>
        </div>
        <!-- Row 4-->
        <div class="grid">
            <div class="col-4">
                <SocapexOutlet :loads="props.loads" :id=10 @click="$emit('openModal', 10)">
                </SocapexOutlet>
            </div>
            <div class="col-4">
                <SocapexOutlet :loads="props.loads" :id=11 @click="$emit('openModal', 11)">
                </SocapexOutlet>
            </div>
            <div class="col-4">
                <SocapexOutlet :loads="props.loads" :id=12 @click="$emit('openModal', 12)">
                </SocapexOutlet>
            </div>
        </div>
    </div>

</template>
<script setup>

import { defineProps } from 'vue';

import SocapexOutlet from './SocapexOutlet.vue';


const props = defineProps({
    loads: Array, // Array of load values
});

</script>
<style scoped></style>