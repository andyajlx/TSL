<template>
    <div>
        <div class="grid">
            <div class="col-2 col-offset-1">
                <PowerLock type="EOut"></PowerLock>
            </div>
            <div class="col-2">
                <PowerLock type="NOut"></PowerLock>
            </div>
            <div class="col-2">
                <PowerLock type="L1Out"> </PowerLock>
            </div>
            <div class="col-2">
                <PowerLock type="L2Out"></PowerLock>
            </div>
            <div class="col-2">
                <PowerLock type="L3Out"></PowerLock>
            </div>
        </div>
        <div class="grid">
            <div class="col-2 col-offset-1">
                <PowerLock type="EIn"></PowerLock>
            </div>
            <div class="col-2">
                <PowerLock type="NIn"></PowerLock>
            </div>
            <div class="col-2">
                <PowerLock type="L1In"> </PowerLock>
            </div>
            <div class="col-2">
                <PowerLock type="L2In"></PowerLock>
            </div>
            <div class="col-2">
                <PowerLock type="L3In"></PowerLock>
            </div>
        </div>
    </div>

</template>
<script setup>

import PowerLock from './PowerLock.vue';




</script>
<style scoped></style>