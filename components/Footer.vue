<template>
    <footer class="footer fb__footer">
        <div class="footer__inner">
            <div class="footer__customer">
                <span class="footer__customer__name">
                  고객문의 대표전화
                </span>
                <a href="tel:1566-0228" class="footer__customer__tel">1234-5678</a>
            </div>
            <p class="footer__info">
                (주) ELBUM&nbsp;&nbsp;&nbsp;&nbsp;대표이사 : 류은우<br>
                사업자등록번호 : 123-45-67891<br>
                주소 : 서울특별시 라라로 라라라 12<br>
                통신 판매업 신고 : 2020-서울강남-12345&nbsp;&nbsp;<a href="#" target="_blank" class="btn__biz">사업자 정보확인</a><br>
                개인정보보호책임자 : 류은우<br>
                e-mail : TEST@TEST.com<br>
                Copyright © 2020 ELBUM Co., Ltd. All rights reserved<br>
            </p> 
        </div>
    </footer>
</template>
<script>
    export default {
        data() {
            return {
                menuOpen: false,
            }
        }
    }
</script>
<style lang="scss">
@media screen and (max-width: 1100px) {
  .fb__footer .footer__inner {
    width: 100%;
    padding: 11.33333vw 6vw 10.66667vw;
    background: #000;
  }

  .fb__footer .footer__customer {
    color: #FFF;
    letter-spacing: -0.01rem;
  }

  .fb__footer .footer__customer:after {
    display: block;
    clear: both;
    content: "";
  }

  .fb__footer .footer__customer__box {
    float: left;
    width: 53vw;
  }

  .fb__footer .footer__customer__box:after {
    display: block;
    clear: both;
    content: "";
  }

  .fb__footer .footer__customer__inner {
    display: inline-block;
    margin-left: 4vw;
    vertical-align: bottom;
  }

  .fb__footer .footer__customer__name {
    display: block;
    margin-bottom: 1.33333vw;
    font-size: 2.93333vw;
  }

  .fb__footer .footer__customer__tel {
    display: block;
    margin-top: 2vw;
    font-size: 7.6vw;
    font-weight: 400;
    font-family: "GillSansWGL", sans-serif;
    color: #FFF;
    letter-spacing: -0.025rem;
  }

  .fb__footer .footer__customer__tip {
    font-size: 2.93333vw;
    color: #b0b0b0;
    letter-spacing: -0.025rem;
  }

  .fb__footer .footer__customer__agencyinfo {
    margin-top: 1.33333vw;
    line-height: 3.73333vw;
    font-size: 2.93333vw;
    color: #fff;
    letter-spacing: -0.025rem;
  }

  .fb__footer .footer__menu {
    margin-top: 6.66667vw;
  }

  .fb__footer .footer__menu li {
    position: relative;
    float: left;
    width: 33.333%;
    text-align: center;
  }

  .fb__footer .footer__menu li:before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    width: 1px;
    height: 3.2vw;
    margin-top: -1.6vw;
    background: #ccc;
  }

  .fb__footer .footer__menu li:first-child {
    text-align: left;
  }

  .fb__footer .footer__menu li:first-child:before {
    display: none;
  }

  .fb__footer .footer__menu li:last-child {
    text-align: right;
  }

  .fb__footer .footer__menu li a {
    line-height: normal;
    font-size: 2.93333vw;
    color: #FFF;
    letter-spacing: -0.025rem;
  }

  .fb__footer .footer__sns {
    float: left;
    margin-top: 4vw;
  }

  .fb__footer .footer__sns li {
    float: left;
    width: 8.8vw;
    margin-left: 2vw;
  }

  .fb__footer .footer__sns li:first-child {
    margin-left: 0;
  }

  .fb__footer .footer__sns:after {
    content: '';
    display: block;
    clear: both;
  }

  .fb__footer .footer__info {
    margin-top: 6.66667vw;
    border-top: 1px solid #4d4d4d;
    padding-top: 6.66667vw;
    line-height: 4.66667vw;
    font-size: 2.93333vw;
    color: rgba(255, 255, 255, 0.5);
    letter-spacing: -0.025rem;
  }

  .fb__footer .footer .btn__biz {
    display: inline-block;
    margin-left: 2vw;
    border-bottom: 1px solid #FFF;
    font-size: 2.53333vw;
    color: #FFF;
    vertical-align: text-top;
    line-height: normal;
    letter-spacing: -0.025rem;
  }

  .fb__footer .footerBanner {
    position: fixed;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 0;
  }

  .fb__footer .footerBanner.top {
    bottom: 14.66667vw;
  }

  .fb__footer .footerBanner__goApp {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 39.33333vw;
  }

  .fb__footer .footerBanner__close {
    position: absolute;
    top: 39.33333vw;
    left: 0;
    width: 100%;
    height: 14vw;
  }

  .fb__footer .footerBanner__dim {
    display: none;
    position: fixed;
    z-index: 9;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
  }
}

@media screen and (min-width: 1100px) {
  .fb {
    &__footer {
      margin-top: 80px;
      background: #000;
      color: #fff;


      .footer {
        &__inner {
          display: block;
          width: 1100px;
          margin: 0 auto;
          padding: 45px 0;
        }

        &__customer {
            font-size: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #ddd;
            margin-bottom: 20px;
        }

        &__info {
            color: rgba(255, 255, 255, 0.5);
            font-size: 13px;
            line-height: 1.5;
        }
      }
    }
  }

}
</style>