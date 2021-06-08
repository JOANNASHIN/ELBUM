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

        <!-- <form @submit="sendEmail()"> -->
            <label>
                <input type="text" placeholder="이메일을 입력하세요." maxlength="30" v-model="content.emailid">
            </label> 
            <label>
                <input type="text" placeholder="이름을 입력하세요." maxlength="30" v-model="content.sendname">
            </label> 
            <label>
                <input type="text" placeholder="제목을 입력하세요." maxlength="30" v-model="content.title">
            </label> 
            <label>
                <textarea type="text" placeholder="내용을 입력하세요." maxlength="100" v-model="content.message"></textarea>
            </label> 
            <button type="button" @click="sendEmail($event)">보내기</button>
        <!-- </form> -->
</section>
</template>
<script>

import emailjs from "emailjs-com";

export default {
    data() {
        return {
            SERVICE_ID: "service_ewx0f38",
            TEMPLATE_ID: "template_th1s929",
            content: {
                emailid: "",
                sendname: "",
                title: "",
                message: ""
            }
        }
    },

    mounted() {
        // this.sendEmail();
    },

    methods: {
        sendEmail(e) {
            // console.log("test",emailjs,this.SERVICE_ID)

            const templateParams = {
                // emailid: "emailid",
                // sendname: "sendname",
                // title: "title",
                // message: "messagemessagemessage"
                email: this.content.emailid,
                name: this.content.sendname,
                title: this.content.title,
                message: this.content.message,
            };

            emailjs
                .send("service_ewx0f38", "template_th1s929", templateParams, "user_rd9DdB4KQe2PyiiUTxon5")
                .then(
                    function(response) {
                        console.log("success", response)
                    },

                    function (error) {
                        console.log("Error")
                    }
                )
            
        }
    }
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