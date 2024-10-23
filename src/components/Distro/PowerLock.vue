<template>
    <div>
              <Image v-if="props.type == 'EIn'" :src="EarthIn" alt="Image" width="35" />
              <Image v-if="props.type == 'EOut'" :src="EarthOut" alt="Image" width="35" />
              <Image v-if="props.type == 'NIn'" :src="Nin" alt="Image" width="35" />
              <Image v-if="props.type == 'NOut'" :src="Nout" alt="Image" width="35" />
              <Image v-if="props.type == 'L1In'" :src="L1In" alt="Image" width="35" />
              <Image v-if="props.type == 'L1Out'" :src="L1Out" alt="Image" width="35" />
              <Image v-if="props.type == 'L2In'" :src="L2In" alt="Image" width="35" />
              <Image v-if="props.type == 'L2Out'" :src="L2Out" alt="Image" width="35" />
              <Image v-if="props.type == 'L3In'" :src="L3In" alt="Image" width="35" />
              <Image v-if="props.type == 'L3Out'" :src="L3Out" alt="Image" width="35" />
            </div>
</template>
<script setup>

import {defineProps} from 'vue'
const props = defineProps(['type'])
import Image from 'primevue/image';

import EarthIn from '@/assets/Distro/EarthIn.png'
import EarthOut from '@/assets/Distro/EarthOut.png'
import Nin from '@/assets/Distro/Nin.png'
import Nout from '@/assets/Distro/Nout.png'
import L1In from '@/assets/Distro/L1In.png'
import L2In from '@/assets/Distro/L2In.png'
import L3In from '@/assets/Distro/L3In.png'
import L1Out from '@/assets/Distro/L1Out.png'
import L2Out from '@/assets/Distro/L2Out.png'
import L3Out from '@/assets/Distro/L3Out.png'

</script>
<style scoped>

</style>