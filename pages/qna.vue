<template>
    <section class="fb__qna fb__page">
        <h2 class="fb__page__title">문의/제안</h2>

        <div class="fb__qna__form">
            <!-- <span class="fb__qna__tip">이메일로 문의 / 제안을 보내주세요 !</span> -->

            <label>
                <span class="fb__qna__label">연락 받으실 이메일 *</span>
                <input type="text" placeholder="연락을 받으실 이메일을 입력하세요." maxlength="30" v-model="content.reply_to">
            </label> 

            <label>
                <span class="fb__qna__label">이름</span>
                <input type="text" placeholder="이름을 입력하세요." maxlength="30" v-model="content.name">
            </label> 

            <label>
                <span class="fb__qna__label">제목 *</span>
                <input type="text" placeholder="제목을 입력하세요." maxlength="30" v-model="content.title">
            </label> 

            <label>
                <span class="fb__qna__label">내용 *</span>
                <textarea type="text" placeholder="내용을 입력하세요." maxlength="100" v-model="content.message"></textarea>
            </label> 

            <div class="fb__qna__bottom">
                <button type="button" class="fb__qna__send" @click="sendEmail($event)">이메일 보내기</button>
            </div>
        </div>
</section>
</template>
<script>

//https://www.emailjs.com/
import emailjs from "emailjs-com";

export default {
    data() {
        return {
            SERVICE_ID: "service_ewx0f38",
            TEMPLATE_ID: "template_th1s929",
            API_KEY: "user_rd9DdB4KQe2PyiiUTxon5",
            content: {
                reply_to: "",
                name: "",
                title: "",
                message: ""
            }
        }
    },

    methods: {
        sendEmail() {
            if ( !this.content.reply_to 
                 || !this.content.title 
                 || !this.content.message 
            ) {
                alert("필수 입력란을 확인해주세요.");
                return ;
            }

            this.requestEmailJs();
        },

        requestEmailJs() { 
             const templateParams = {
                reply_to: this.content.reply_to,
                name: this.content.name,
                title: this.content.title,
                message: this.content.message,
            };

            emailjs
                .send (this.SERVICE_ID, this.TEMPLATE_ID, templateParams, this.API_KEY)
                .then (
                    function(response) {
                        console.log("success", response)
                        alert("이메일을 보냈습니다! \n 곧 연락드리겠습니다. 감사합니다!");
                    },

                    function (error) {
                        console.error("Error", error)
                        alert("오류가 발생하였습니다.\n 잠시 후 다시 시도 부탁드립니다.");
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