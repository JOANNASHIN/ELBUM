<template>
    <header class="fb__header">
        <div id="fixtarget" class="fb__header__fix">
            <h1 class="fb__title">
                <a href="/">ELBUM</a>
            </h1>
        </div>

        <nav class="fb__nav">
            <ul class="fb__nav__list">
                <li class="fb__nav__menu home">
                    <a href="/">홈</a>
                </li>
                <li class="fb__nav__menu">
                    <a href="/notice">공지사항</a>
                </li>
                <li class="fb__nav__menu">
                    <a href="/company">회사소개</a>
                </li>
                <li class="fb__nav__menu">
                    <a href="/qna">문의/제안</a>
                </li>                               
                <li class="fb__nav__menu">
                    <a href="/product">제품안내</a>
                </li>
            </ul>
        </nav>
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