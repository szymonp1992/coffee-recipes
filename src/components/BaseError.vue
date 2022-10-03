<template>
    <div class="backdrop">
        <div class="modal-background">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.backdrop {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0,0,0,0.4);
    }
.modal-background {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 30vh;
        width: 50vw;
        background-color: white;
        border-radius: 50px;
    }

</style>