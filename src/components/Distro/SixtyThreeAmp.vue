<template>
    <div>
        <!-- Display three LEDs side by side -->
        <div class="flex align-items-center justify-content-center p-2 gap-2">
            <div v-for="(load, index) in loadsToDisplay" :key="index">
                <div v-if="load > 0" class="led led-on"></div>
                <div v-else class="led led-off"></div>
            </div>
        </div>
        <div class="flex align-items-center justify-content-center">
            <Image :src="sixtyThreeAmp" alt="Image" width="75" />
        </div>
    </div>
</template>

<script setup>
import sixtyThreeAmp from '../../assets/Distro/63a.png';
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
    // Return the Loads array if it exists, otherwise return an empty array
    return loadItem && Array.isArray(loadItem.Loads) ? loadItem.Loads : [];
});

// Limit to the first three values to display three LEDs
const loadsToDisplay = computed(() => selectedLoad.value.slice(0, 3));
</script>

<style scoped>
.led-on {
    background-color: green;
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.led-off {
    background-color: red;
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.flex.gap-2 {
    gap: 0.5rem;
    /* Adjust this value for spacing between LEDs */
}
</style>
