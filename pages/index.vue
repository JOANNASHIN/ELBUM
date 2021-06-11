<template>
  <main class="fb__main">
        <h2 class="fb__title--hidden">메인페이지</h2>

        <section class="fb__main__visual">
            <h3 class="fb__title--hidden">상단 대표이미지</h3>
            <figure>
                <img src="~/assets/images/main/background.jpg">
            </figure>
            <div class="visual__text">
                <span class="visual__logo">ELBUM</span>
                <p class="visual__desc">저희는 고객의 성공과 함께 성장합니다.</p>
            </div>
        </section>

        <section class="fb__main__we">
            <h3 class="fb__main__title">WHO WE ARE</h3>
            <ul class="we__detail js__we__detail">
                <li class="we__detail__box">
                    <em class="we__detail__count">{{count1.from}}</em>
                    <span class="we__detail__name">연차+</span>
                </li>
                <li class="we__detail__box">
                    <em class="we__detail__count">{{count2.from}}</em>
                    <span class="we__detail__name">프로젝트+</span>
                </li>
                <li class="we__detail__box js__menu">
                    <em class="we__detail__count">{{count3.from}}</em>
                    <span class="we__detail__name">유지관리+</span>
                </li>
                <li class="we__detail__box">
                    <em class="we__detail__count">{{count4.from}}</em>
                    <span class="we__detail__name">고객사+</span>
                </li>
            </ul>
        </section>

        <section class="fb__main__menu">
            <h3 class="fb__title--hidden">메뉴</h3>
            <ul class="menu__wrapper">
                <li class="menu__box">
                    <a class="menu__link" href="/notice">
                        <span class="menu__name">공지사항</span>
                    </a>
                </li>
                <li class="menu__box">
                    <a class="menu__link" href="/company">
                        <span class="menu__name">회사개요</span>
                    </a>
                </li>
                <li class="menu__box">
                    <a class="menu__link" href="/qna">
                        <span class="menu__name">문의제안</span>
                    </a>
                </li>
                <li class="menu__box">
                    <a class="menu__link" href="/product" target="_blank">
                        <span class="menu__name">제품안내</span>
                    </a>
                </li>
            </ul>
        </section>

        <section class="fb__main__company js__company">
            <h3 class="fb__title--hidden">회사정보</h3>
            <ul class="company__info">
                <li class="company__info__list">
                    <div class="company__info__wrapper">
                        <span class="company__info__name">Tel</span>
                        <a href="tel:070-8712-0013" class="company__info__detail">070-8712-0013</a>
                        <a href="#" class="company__info__detail">China P: +86 17734453783</a>
                    </div>
                </li>
                <li class="company__info__list">
                    <div class="company__info__wrapper">
                        <span class="company__info__name">Location</span>
                        <p class="company__info__detail">부산광역시 금정구 금강로 271 (미주빌딩), 407호</p>
                    </div>
                </li>
            </ul>
        </section>
  </main>
</template>

<script>
import $ from "jquery";
window.$ = $;

export default {
    data() {
        return {
            isUserScrolling : 0,
            startCount: 0,
            count1: {
                from: 0,
                to: 20
            },
            count2: {
                from: 0,
                to: 40
            },
            count3: {
                from: 0,
                to: 100
            },
            count4: {
                from: 0,
                to: 90
            },
        }
    },

    created() {
        window.addEventListener("scroll", this.scrollEvent)
    },

    mounted() {
        const $we = $(".js__we__detail");
        $we.fadeIn("slow").addClass("active");

        setTimeout(this.countPlus, 500);
        setTimeout(this.countPlus2, 500);
        setTimeout(this.countPlus3, 500);
        setTimeout(this.countPlus4, 500);
    },

    methods: {
        scrollEvent(e) {
            const $company = $(".company__info__list");
            const _companyOffset = $(".js__menu").offset().top;
            
            let _current = window.scrollY;

            if (_current >= _companyOffset) {
                $company.addClass("active");
            }
        },

        countPlus() {
            if (this.count1.from <= this.count1.to) {
                this.count1.from++;
                setTimeout(this.countPlus, 30)
            }
        },

        countPlus2() {
            if (this.count2.from <= this.count2.to) {
                this.count2.from++;
                setTimeout(this.countPlus2, 10)
            }
        },

        countPlus3() {
            if (this.count3.from <= this.count3.to) {
                this.count3.from++;
                setTimeout(this.countPlus3, 10)
            }
        },

        countPlus4() {
            if (this.count4.from <= this.count4.to) {
                this.count4.from++;
                setTimeout(this.countPlus4, 10)
            }
        }
    }
}
</script>