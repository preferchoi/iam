<template>
    <div class="upper-half">
        <profileComponent/>
    </div>
    <div class="lower-half">
        <flexCardComponent />
    </div>
</template>

<script>
import flexCardComponent from "@/components/flexCardComponent.vue";
import profileComponent from "@/components/profileComponent.vue";

export default {
    components: {
        flexCardComponent,
        profileComponent
    }
}
</script>

<style>
.upper-half,
.lower-half {
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>