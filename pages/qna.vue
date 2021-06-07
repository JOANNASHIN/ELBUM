<template>
    <section class="fb__qna">
        <section class="fb__main__visual">
            <h3 class="fb__title--hidden">상단 대표이미지</h3>
            <figure>
                <img src="~/assets/images/main/bg2.jpg">
            </figure>
        </section>
    
        <section class="notice__search">
            <header class="notice__header">
                <h2 class="notice__title">문의/제안</h2>
            </header>
        </section>

    </section>
</template>
<script>

export default {

}
</script>

<style lang="scss">
    .fb {
        &__qna {
            width: 1100px;
            margin: 0 auto 100px;
        }

        .fb__main__visual {
            margin-bottom: 100px;
        }
    }

    .fb {
        &__company {
            width: 900px;
            margin: 80px auto;

            &__cont {
                font-size: 16px;
                line-height: 1.5;
            }

            &__text {
                &--bold {
                    font-size: 20px;
                    font-weight: bold;
                }
            }

            .notice__title {
                margin-bottom: 40px;
            }

            .fb__main__visual {
                height: 400px;
                margin-bottom: 60px;

                img {
                    width: 400px;
                    height: 400px;
                }
            }
        }
    }
</style>