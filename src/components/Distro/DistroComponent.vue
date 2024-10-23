<template>
    <div class="border-solid border-900 surface-ground">

        <!-- 16a Container-->
        <SixteenAmpContainer :loads="props.distroData" @open-modal="(n) => openOutletModal(n)"></SixteenAmpContainer>
        <!-- Soca Rows-->
        <SocaContainer :loads="props.distroData" @open-modal="(n) => openOutletModal(n)"></SocaContainer>

        <div class="grid">
            <div class="col-6"></div>
            <div class="col-3">
                <ThirtyTwoAmp :loads="props.distroData" :id=19 @click="openOutletModal(19)"></ThirtyTwoAmp>
            </div>
            <div class="col-3">
                <SixtyThreeAmp :loads="props.distroData" :id=20 @click="openOutletModal(20)"></SixtyThreeAmp>
            </div>

        </div>
        <power-lock-container></power-lock-container>
    </div>

</template>
<script setup>
import SixteenAmpContainer from './SixteenAmpContainer.vue';
import SocaContainer from './SocaContainer.vue';
import ThirtyTwoAmp from './ThirtyTwoAmp.vue';
import SixtyThreeAmp from './SixtyThreeAmp.vue';
import PowerLockContainer from './PowerlockContainer.vue'



import { defineEmits, defineProps } from 'vue';

const emit = defineEmits(['id', 'opneModal'])

const props = defineProps({
    distroData: Array, // Array of load values
});


console.log('the distro data', props.distroData)


const openOutletModal = (id) => {
    console.log('the outlet id is', id)
    emit('id', id)
}



</script>
<style scoped></style>
