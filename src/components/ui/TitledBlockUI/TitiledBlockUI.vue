<template>
    <section>
        <div class="header-section">
            <h2>{{ title }}</h2>
            <div class="header-block">
                <slot name="header"/>
            </div>
        </div>
        <slot></slot>
    </section>
</template>

<script>
export default {
    props: {
        title: String,
    },
}
</script>

<style scoped>
section {
    width: 100%;
    margin-top: 60px;
}

.header-section {
    display: flex;
    position: relative;
    justify-content: space-between;
    margin-bottom: 30px;
}

.header-section h2 {
    font-weight: 500;
    font-size: 22px;
}

.header-block {
    position: absolute;
    right: 0;
    top: -12px
}

</style>