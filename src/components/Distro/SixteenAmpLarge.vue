<template>
    <div>
        <h2>16a Outlet {{ props.id }}</h2>
        <div>
            <h3>{{ selectedLoad }}a</h3>
        </div>
        <div class="flex align-items-center justify-content-center p-2">
            <!-- Display LED based on the load value -->
            <div v-if="ledOn" class="led led-on"></div>
            <div v-else class="led led-off"></div>
        </div>
        <div class="flex align-items-center justify-content-center">
            <Image :src="SixteenAmp" alt="Image" width="250" />
        </div>
    </div>
</template>

<script setup>
import SixteenAmp from '../../assets/Distro/SixteenAmp.png';
import Image from 'primevue/image';
import { defineProps, computed } from 'vue';

// Define props for the component
const props = defineProps({
    loads: Array, // Array containing all load objects
    id: Number,   // The ID of the selected instance
});

console.log('Received loads:', props.loads, 'ID:', props.id);

// Compute the selected load based on the id prop
const selectedLoad = computed(() => {
    // Find the load value corresponding to the provided ID
    const loadItem = props.loads.find(item => item.Id === props.id);
    // Return the first element of the Loads array if it exists, otherwise return 0
    return loadItem && loadItem.Loads.length > 0 ? parseFloat(loadItem.Loads[0]) : 0;
});

// Compute whether the LED should be on based on the selected load value
const ledOn = computed(() => {
    console.log('Selected load for ID', props.id, 'is', selectedLoad.value);
    return selectedLoad.value > 0;
});
</script>

<style scoped>
.led-on {
    background-color: green;
    width: 25px;
    height: 25px;
    border-radius: 50%;
}

.led-off {
    background-color: red;
    width: 25px;
    height: 25px;
    border-radius: 50%;
}
</style>
