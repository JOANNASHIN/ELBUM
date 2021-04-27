<template>
    <header class="fb__header">
        <div id="fixtarget" class="fb__header__fix">
            <h1 class="fb__title">ELBUM</h1>
        </div>
    </header>
</template>

<script>

    export default {
        data() {
            return {
            }
        },

        created() {
            window.addEventListener("scroll", this.scrollEvent)
        },

        mounted() {
        },

        methods: {
            scrollEvent(e) {
                const $header = document.getElementById("fixtarget");

                if (window.scrollY <= 10) {
                    $header.classList.remove("background");
                }
                else {
                    $header.classList.add("background");
                }
            }
        }
    }
</script>